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
            <svg className="ces-logo" width="40" height="40" viewBox="0 0 17.5 16.2" fill="white">
              <path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" />
            </svg>
            <div className="ces-investor">Pack BRISA</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">5453</div>
              <div className="section">2000</div>
              <div className="section">0000</div>
              <div className="section">0000</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">exp. end:</span>
              <span className="ces-end-date">11/22</span>
            </div>
            <div className="ces-card-holder">mr Filip Vitas</div>
            <div className="ces-master">
              <div className="ces-circle ces-master-red"></div>
              <div className="ces-circle ces-master-yellow"></div>
            </div>
          </div>
          <div className="ces-back ces-back-brisa">
            <div className="ces-strip-black"></div>
            
            <div className="ces-terms">
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
        </div>
      </div>

      {/* Deuxième carte : Impulso (Argentée) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-impulso">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <svg className="ces-logo" width="40" height="40" viewBox="0 0 17.5 16.2" fill="white">
              <path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" />
            </svg>
            <div className="ces-investor">PACK IMPULSO</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">1111</div>
              <div className="section">2222</div>
              <div className="section">3333</div>
              <div className="section">4444</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">exp. end:</span>
              <span className="ces-end-date">01/25</span>
            </div>
            <div className="ces-card-holder">ms Anna</div>
            <div className="ces-master">
              <div className="ces-circle ces-master-red"></div>
              <div className="ces-circle ces-master-yellow"></div>
            </div>
          </div>
          <div className="ces-back ces-back-impulso">
            <div className="ces-strip-black"></div>
            
           <div className="ces-terms">
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
        </div>
      </div>

      {/* Troisième carte : Accelerador (Gold) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-accelerador">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <svg className="ces-logo" width="40" height="40" viewBox="0 0 17.5 16.2" fill="white">
              <path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" />
            </svg>
            <div className="ces-investor">PACK ACCELERADOR</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">9876</div>
              <div className="section">5432</div>
              <div className="section">1098</div>
              <div className="section">7654</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">exp. end:</span>
              <span className="ces-end-date">07/24</span>
            </div>
            <div className="ces-card-holder">dr John Doe</div>
            <div className="ces-master">
              <div className="ces-circle ces-master-red"></div>
              <div className="ces-circle ces-master-yellow"></div>
            </div>
          </div>
          <div className="ces-back ces-back-accelerador">
            <div className="ces-strip-black"></div>
            
            <div className="ces-terms">
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
        </div>
      </div>

      {/* Quatrième carte : Elite (Black Infinite) */}
      <div className="ces-card">
        <div className="ces-flip">
          <div className="ces-front ces-front-elite">
            <div className="ces-strip-bottom"></div>
            <div className="ces-strip-top"></div>
            <svg className="ces-logo" width="40" height="40" viewBox="0 0 17.5 16.2" fill="white">
              <path d="M3.2 0l5.4 5.6L14.3 0l3.2 3v9L13 16.2V7.8l-4.4 4.1L4.5 8v8.2L0 12V3l3.2-3z" />
            </svg>
            <div className="ces-investor">PACK ELITE</div>
            <div className="ces-chip">
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-line"></div>
              <div className="ces-chip-main"></div>
            </div>
            <div className="ces-card-number">
              <div className="section">1357</div>
              <div className="section">2468</div>
              <div className="section">3579</div>
              <div className="section">4680</div>
            </div>
            <div className="ces-end">
              <span className="ces-end-text">exp. end:</span>
              <span className="ces-end-date">12/23</span>
            </div>
            <div className="ces-card-holder">ms Eve</div>
            <div className="ces-master">
              <div className="ces-circle ces-master-red"></div>
              <div className="ces-circle ces-master-yellow"></div>
            </div>
          </div>
          <div className="ces-back ces-back-elite">
            <div className="ces-strip-black"></div>
          
            <div className="ces-terms">
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
      </div>
    </div>
  );
}
