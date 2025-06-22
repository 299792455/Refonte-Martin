import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { LRUCache } from 'lru-cache';

const rateLimiter = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60, // 1 minuto
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, honeypot } = await req.json();

    // Honeypot activado
    if (honeypot) {
      return NextResponse.json(
        { error: '⚠️ Acción bloqueada. Si eres humano, no completes ese campo.' },
        { status: 400 }
      );
    }

    // Campos requeridos faltantes
    if (!name || !email || !message || !phone) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios. Por favor revisa el formulario.' },
        { status: 400 }
      );
    }

    // Límite de frecuencia por IP
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const key = `ip:${ip}`;

    if (rateLimiter.has(key)) {
      return NextResponse.json(
        { error: 'Has enviado demasiadas solicitudes. Intenta nuevamente en un minuto.' },
        { status: 429 }
      );
    }

    rateLimiter.set(key, Date.now());

    // Configuración del transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Opciones del email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `
Nombre: ${name}
Email: ${email}
Teléfono: ${phone}

Mensaje:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: '❌ Ha ocurrido un error al enviar el mensaje. Intenta nuevamente más tarde.' },
      { status: 500 }
    );
  }
}
