import React from "react";
import "../../styles/ExclusiveService.css";

const ExclusiveService: React.FC = () => {
  return (
    <section
      id="advertisers"
      className="advertisers-service-sec pt-5 pb-5"
    >
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="fw-bold fs-1">
              Our&nbsp;
              <span className="b-class-secondary">Advertiser </span>
              Services
            </h2>
            <p className="sec-icon">
              <i className="fa-solid fa-crown"></i>
            </p>
          </div>
        </div>

      
        <div className="cards-grid mt-5 mt-md-4">
          {/* Carte 1 */}
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <h3>Redes Sociales</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3>Diseno Web</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3>Creacion Video</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>

          {/* Carte 4 */}
          <div className="service-card">
            <div className="icon-wrapper">
              <i className="fa-solid fa-money-check-dollar"></i>
            </div>
            <h3>Gestion Marca</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveService;
