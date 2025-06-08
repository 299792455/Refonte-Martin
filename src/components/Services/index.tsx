"use client";
import "../../styles/Services.css"; 

export default function Services() {
  return (
    <section className=" bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center max-w-[1600px] mx-auto">
      
      <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-8xl mx-auto">
        
        <div className="card  p-10 relative">
          
  <div className="circle"></div>
  <div className="relative lg:pr-52">
    <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Redes<br /> Sociales</h3>
    <p className="text-gray-400">
      ✓ 8 publicaciones<br />
      ✓ 12 stories<br />
      ✓ 2 reels
    </p>
  </div>
</div>


        <div className="card  p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Diseno <br />  Web</h3>
            <p className="text-gray-400">
      ✓ 12 publicaciones<br />
      ✓ 20 stories<br />
      ✓ 4 reels
    </p>
          </div>
        </div>

        <div className="card  p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pr-44">
            <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Creacion <br />Video</h3>
                  <p className="text-gray-400">
      ✓ 20 publicaciones<br />
      ✓ 40 stories<br />
      ✓ 6 reels
    </p>
         
          </div>
        </div>

        <div className="card p-10 relative">
          <div className="circle"></div>
          <div className="relative lg:pl-48">
            <h3 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Gestion<br />  Marca</h3>
            <p className="text-gray-400">
      ✓ 28 publicaciones<br />
      ✓ 60 stories<br />
      ✓ 8 reels
    </p>
          </div>
        </div>
      </div>
    </section>
  );
}
