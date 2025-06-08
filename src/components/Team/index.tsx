// components/Team.tsx
import React from "react";
import "../../styles/Team.css";

const Team: React.FC = () => {
  return (
    <section className="team-section">
      <span>nuestro</span>
      <h2>EQUIPO</h2>
      <p>
        UN EQUIPO CON VISIÓN, CORAZÓN Y ACCIÓN
      </p>
      <span className="bg-watermark">team</span>
      <div className="cards">
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Franklin Carlson"
          />
          <div className="card-content">
            <h3>Martin</h3>
            <p>Fundador y
estraega de
alto vuelo</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Antonia Moore"
          />
          <div className="card-content">
            <h3>Noe</h3>
            <p>Diseñadora
de
realidades</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travis Lynch"
          />
          <div className="card-content">
            <h3>Assier</h3>
            <p>Coordinador
cósmico de
contenido</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Team;
