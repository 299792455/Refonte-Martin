export const metadata = {
  title: "Aviso Legal | OnlineDreamsMakers",
};

export default function AvisoLegalPage() {
  return (
    <section className="relative bg-black text-white min-h-screen w-full overflow-hidden px-6 py-48">
      {/* Background visuel (optionnel : image ou lignes SVG) */}
      <img
        src="/medias/HeroBgL.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
      />

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-500 tracking-wide mb-8">
          Aviso Legal
        </h1>

        <div className="space-y-10 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">1. Datos del titular del sitio</h2>
            <p>
              En cumplimiento con la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que:
              <br />
              <strong>Titular:</strong> OnlineDreamsMakers<br />
              <strong>Correo electrónico:</strong> contacto@onlinedreamsmakers.es<br />
              <strong>Sitio web:</strong> https://onlinedreamsmakers.es<br />
              <strong>Finalidad:</strong> Presentación de servicios de comunicación digital, diseño web y redes sociales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">2. Alojamiento web</h2>
            <p>
              El sitio está alojado en servidores de un proveedor ubicado en la Unión Europea.<br />
              <strong>Proveedor:</strong> Hostinger
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio web son propiedad exclusiva de OnlineDreamsMakers o de terceros con autorización.
              Se prohíbe su reproducción o modificación sin permiso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">4. Protección de datos personales</h2>
            <p>
              Los datos recogidos se tratarán conforme al Reglamento (UE) 2016/679 (RGPD).<br />
              <strong>Responsable:</strong> OnlineDreamsMakers<br />
              <strong>Finalidad:</strong> Responder a solicitudes<br />
              <strong>Derechos:</strong> Acceso, rectificación, supresión, oposición, portabilidad<br />
              <strong>Contacto:</strong> contacto@onlinedreamsmakers.es
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">5. Limitación de responsabilidad</h2>
            <p>
              OnlineDreamsMakers no se responsabiliza de posibles errores en los contenidos ni de los daños derivados del uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">6. Política de enlaces</h2>
            <p>
              Este sitio puede contener enlaces externos. OnlineDreamsMakers no se responsabiliza del contenido de dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-white">7. Ley aplicable y jurisdicción</h2>
            <p>
              Este aviso legal se rige por la legislación española. Para cualquier conflicto, las partes se someten a los juzgados de A Coruña.
            </p>
          </section>
        </div>

        {/* Lien retour */}
        <div className="relative group flex justify-center mt-12">
  <a
    href="/"
    className="relative overflow-hidden px-6 py-3 border border-[#b8860b] text-[#d4af37] text-base font-medium rounded-lg tracking-wide transition-all duration-300 hover:border-[#d4af37] hover:bg-[#1a1a1a] shadow-md group w-[200px] text-center"
  >
    <span className="relative z-10">Volver al inicio</span>
    <span className="absolute left-[-100%] top-[-50%] w-48 h-24 rotate-45 bg-white/20 group-hover:translate-x-[250%] transition-transform duration-[1100ms] ease-in-out blur-sm z-0" />
  </a>
</div>

      </div>
    </section>
  );
}
