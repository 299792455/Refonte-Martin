"use client";
import "../../styles/Services.css"; 

export default function Services() {
  return (
    <section className=" bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-8xl mx-auto">
        
        <div className="card  p-10 relative">
          
  <div className="circle"></div>
  <div className="relative lg:pr-52">
    <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Pack<br /> Brisa</h3>
    <p className="text-gray-400">
      ✓ 8 publicaciones<br />
      ✓ 12 stories<br />
      ✓ 2 reels<br />
      ✓ 20€ en publicidad incluidos<br />
      ✓ Mini informe mensual<br />
      ✓ Sorpresa de bienvenida
    </p>
  </div>
</div>


        <div className="card  p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Pack <br />  impulso</h3>
            <p className="text-gray-400">
      ✓ 12 publicaciones<br />
      ✓ 20 stories<br />
      ✓ 4 reels<br />
      ✓ 50€ en publicidad incluidos<br />
      ✓ Informe detallado mensual<br />
      ✓ Mini tutorial de grabación
    </p>
          </div>
        </div>

        <div className="card  p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-44">
            <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Pack <br />  Accelerador </h3>
                  <p className="text-gray-400">
      ✓ 20 publicaciones<br />
      ✓ 40 stories<br />
      ✓ 6 reels<br />
      ✓ 150€ en publicidad incluidos<br />
      ✓ Estadisticas avanzadas<br />
      ✓ Asesoria personalizada
    </p>
         
          </div>
        </div>

        <div className="card p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Pack<br />  Elite</h3>
            <p className="text-gray-400">
      ✓ 28 publicaciones<br />
      ✓ 60 stories<br />
      ✓ 8 reels<br />
      ✓ 300€ en publicidad incluidos<br />
      ✓ Informe completo con KPIs<br />
      ✓ Cena exclusiva de networking
    </p>
          </div>
        </div>
      </div>
    </section>
  );
}
