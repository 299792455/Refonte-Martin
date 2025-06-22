import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { LRUCache } from 'lru-cache';

const rateLimiter = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60,
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message, honeypot } = await req.json();

    if (honeypot) {
      return NextResponse.json({ error: 'Bot détecté.' }, { status: 400 });
    }

    if (!name || !email || !message || !phone) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const key = `ip:${ip}`;

    if (rateLimiter.has(key)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Réessaie dans une minute.' },
        { status: 429 }
      );
    }

    rateLimiter.set(key, Date.now());

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

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
    console.error('Erreur email:', error);
    return NextResponse.json({ error: 'Échec de l’envoi du message' }, { status: 500 });
  }
}
