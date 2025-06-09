import React from "react";
import "../../styles/CardExclusiveService.css";

export default function CardExclusiveService() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 py-10">
      {/* Première carte : Brisa (Bleue) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-brisa">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <img src="/medias/Design sans titre.png" alt="Logo" className="ces-logo" width="60" height="60" />

            <div className="ces-investor">Pack BRISA</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">BRISA</div>
              <div className="section">3333</div>
              <div className="section">0000</div>
              <div className="section">0000</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">EXP. </span>
              <span className="ces-end-date">ESENCIAL</span>
            </div>
            <div className="ces-card-holder">El basico de lo basico </div>
            <div className="ces-master">
             <div className="ces-flip-arrow">➜</div>
          </div>
        </div>
        <div className="ces-back ces-back-brisa">
          <h3 className="ces-back-title">Detalles de tu Pack</h3>
            <div className="ces-strip-black"></div>
            
            <div className="ces-terms">
              <ul className="ces-back-list bronze">
                <li>Visibilidad: 8 publicaciones destacadas</li>
                <li>12 stories cautivadoras</li>
                <li>Producción de 2 reels únicos</li>
                <li>20€ en publicidad para impulsar tu marca</li>
                <li>Mini informe mensual con resultados clave</li>
                <li>Sorpresa especial de bienvenida</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième carte : Impulso (Argentée) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-impulso">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <img src="/medias/Design sans titre.png" alt="Logo" className="ces-logo" width="60" height="60" />
            <div className="ces-investor">PACK IMPULSO</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">IMPLS</div>
              <div className="section">4444</div>
              <div className="section">0000</div>
              <div className="section">4444</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">EXP. </span>
              <span className="ces-end-date">BOOST</span>
            </div>
            <div className="ces-card-holder">IMPULSO CREATIVO</div>
            <div className="ces-master">
  <div className="ces-flip-arrow">➜</div>
</div>
          </div>
          <div className="ces-back ces-back-impulso">
            <h3 className="ces-back-title">Detalles de tu Pack</h3>
            <div className="ces-strip-black"></div>
            
           <div className="ces-terms">
               <ul className="ces-back-list silver">
  <li>Visibilidad: 12 publicaciones premium</li>
  <li>20 stories dinámicas</li>
  <li>Producción de 4 reels creativos</li>
  <li>50€ en publicidad para tu crecimiento</li>
  <li>Informe mensual detallado y consejos</li>
  <li>Tutorial de grabación para mejorar tu contenido</li>
</ul>
            </div>
          </div>
        </div>
      </div>

      {/* Troisième carte : Accelerador (Gold) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-accelerador">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <img src="/medias/Design sans titre.png" alt="Logo" className="ces-logo" width="60" height="60" />
            <div className="ces-investor">PACK ACCELERADOR</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">ACLRD</div>
              <div className="section">8888</div>
              <div className="section">1098</div>
              <div className="section">7654</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">EXP. </span>
              <span className="ces-end-date">CONQUISTA</span>
            </div>
            <div className="ces-card-holder">VELOCIDAD Y RESULTADOS</div>
            <div className="ces-master">
  <div className="ces-flip-arrow">➜</div>
</div>
          </div>
          <div className="ces-back ces-back-accelerador">
            <h3 className="ces-back-title">Detalles de tu Pack</h3>
            <div className="ces-strip-black"></div>
            
            <div className="ces-terms">
              <ul className="ces-back-list gold">
  <li>Visibilidad: 20 publicaciones impactantes</li>
  <li>40 stories profesionales</li>
  <li>6 reels de alto rendimiento</li>
  <li>150€ en publicidad estratégica</li>
  <li>Estadísticas avanzadas y seguimiento constante</li>
  <li>Asesoría personalizada para potenciar tu marca</li>
</ul>

            </div>
          </div>
        </div>
      </div>

      {/* Quatrième carte : Elite (Black Infinite) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-elite">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <img src="/medias/Design sans titre.png" alt="Logo" className="ces-logo" width="60" height="60" />
            <div className="ces-investor">PACK ELITE</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">ELITE</div>
              <div className="section">9999</div>
              <div className="section">3579</div>
              <div className="section">4680</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">EXP. </span>
              <span className="ces-end-date">SUPREMACÍA</span>
            </div>
            <div className="ces-card-holder">SOLO PARA LA ÉLITE</div>
            <div className="ces-master">
  <div className="ces-flip-arrow">➜</div>
</div>
          </div>
          <div className="ces-back ces-back-elite">
            <h3 className="ces-back-title">Detalles de tu Pack</h3>
            <div className="ces-strip-black"></div>
          
            <div className="ces-terms">
             <ul className="ces-back-list elite">
  <li>Visibilidad: 28 publicaciones exclusivas</li>
  <li>60 stories de máxima calidad</li>
  <li>8 reels únicos e inolvidables</li>
  <li>300€ en publicidad premium para tu marca</li>
  <li>Informe completo con KPIs detallados</li>
  <li>Cena exclusiva de networking y contactos clave</li>
</ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
