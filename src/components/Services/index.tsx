"use client";
import "../../styles/Services.css"; 

export default function Services() {
  return (
    <section className="bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center w-full max-w-[1440px] mx-auto">

      <h2>Experiencia digital única</h2>
      <p>UNA SINERGIA SOLIDA PARA SU EXITO</p>
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-8xl mx-auto">
        
                <div className="card  p-10 relative">
                  
          <div className="circle"></div>
          <div className="relative lg:pr-52">
            <h3 className="capitalize text-white mb-4 service-title">Redes<br /> Sociales</h3>
            <p className="text-gray-400">
              Impulsa tu marca en las redes sociales con contenido cautivador y auténtico. 
        Generamos impacto con estrategias creativas y coherentes. <br /><br />
        Conéctate de forma orgánica con tu audiencia.<br />
        No es tener más números, sino que tú vendas más
            </p>
          </div>
        </div>


        <div className="card  p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h3 className="capitalize text-white mb-4 service-title">Diseño <br />  Web</h3>
            <p className="text-gray-400">
      Especializados en sitios web de alto nivel con la última tecnología (React, Next, Node). <br /><br />Hoy en día no basta con solo hacer un sitio bonito, sino que tiene que estar totalmente optimizado y adaptado a versiones móviles.
    </p>
          </div>
        </div>

        <div className="card  p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-44">
            <h3 className="capitalize text-white mb-4 service-title">Creacion <br />Video</h3>
                  <p className="text-gray-400">
      Transformamos ideas en historias visuales que impactan y conectan.
Cada video es una pieza única, pensada para emocionar y fidelizar.<br /><br />
Ahora deja que todo el mundo se enamore de tu marca.
    </p>
         
          </div>
        </div>

        <div className="card p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h3 className="capitalize text-white mb-4 service-title">Gestion<br />  Marca</h3>
            <p className="text-gray-400">
     Llevamos tu marca al siguiente nivel con una gestión integral y sólida.
Definimos la voz, la imagen y la estrategia que harán que destaques.<br /><br />
Tu esencia se quede en la mente de tu público.
    </p>
          </div>
        </div>
      </div>
    </section>
  );
}
