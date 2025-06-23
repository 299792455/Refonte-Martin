// components/Team.tsx
import React from "react";
import "../../styles/Team.css";

const Team: React.FC = () => {
  return (
    <section className="team-section max-w-[1440px] mx-auto">
      <div className="px-4">
      <span>nuestro</span>
        <h2>EQUIPO</h2>
        <p>
          UN EQUIPO CON VISIÓN, CORAZÓN Y ACCIÓN
        </p>
      <span className="bg-watermark">team</span>
      <div className="cards">
        <div className="card">
          <img
            src="https://i.postimg.cc/RFGqWw58/Noe.jpg"
            alt="Franklin Carlson"
          />
          <div className="card-content">
            <h3>Martin</h3>
            <p>Fundador y
            estraega de
            alto vuelo
            </p>
                        <ul>
                          <li>
  <a href="https://www.instagram.com/onlinedreamsmakers.es/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram" />
  </a>
</li>
                        </ul>
          </div>
        </div>

        <div className="card">
          <img
            src="https://i.postimg.cc/yYGghhgC/Martin.jpg"
            alt="Antonia Moore"
          />
          <div className="card-content">
            <h3>Noe</h3>
            <p>Diseñadora
de
realidades</p>
            <ul>
              <li>
  <a href="https://www.instagram.com/onlinedreamsmakers.es/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram" />
  </a>
</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img
            src="https://i.postimg.cc/d3tk64jw/Assier.jpg"
            alt="Assier Cooper"
          />
          <div className="card-content">
            <h3>Assier</h3>
            <p>Coordinador
cósmico de
contenido</p>
            <ul>
             <li>
  <a href="https://www.instagram.com/onlinedreamsmakers.es/" target="_blank" rel="noopener noreferrer">
    <i className="fa-brands fa-instagram" />
  </a>
</li>
            </ul>
          </div>
        </div>
        
      </div>
      </div>
    </section>
  );
};

export default Team;
