export default function Footer() {
  return (
    <>
      <footer className="footer pt-5 pb-0" style={{ backgroundColor: '#283618', color: '#FEFAE0', fontFamily: 'Arial, sans-serif' }}>
        <div className="container">
          <div className="row gy-4 pb-4">
            <div className="col-6 col-lg-3">
              <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#FEFAE0', letterSpacing: '0.1em', fontSize: '1.00rem' }}>
                Ayuda e información
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a href="/ayuda" className="footer-link">Ayuda</a></li>
                <li><a href="/orden-de-las-vias" className="footer-link">Orden de las vías</a></li>
                <li><a href="/entrega" className="footer-link">Entrega y devoluciones</a></li>
                <li><a href="/mapa-del-sitio" className="footer-link">Mapa del sitio</a></li>
              </ul>
            </div>
            
            <div className="col-6 col-lg-3">
              <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#FEFAE0', letterSpacing: '0.1em', fontSize: '1.00rem' }}>
                Acerca de Velora
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a href="/sobre-nosotros" className="footer-link">Sobre nosotros</a></li>
                <li><a href="/carreras" className="footer-link">Carreras en Velora</a></li>
                <li><a href="/responsabilidad" className="footer-link">Responsabilidad corporativa</a></li>
                <li><a href="/inversionistas" className="footer-link">Sitio de inversores</a></li>
              </ul>
            </div>

            <div className="col-6 col-lg-3">
              <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#FEFAE0', letterSpacing: '0.1em', fontSize: '1.00rem' }}>
                Más de Velora
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li><a href="/aplicaciones" className="footer-link">Aplicaciones móviles</a></li>
                <li><a href="/vales" className="footer-link">Vales regalo</a></li>
                <li><a href="/viernes-negro" className="footer-link">Viernes Negro</a></li>
              </ul>
            </div>

            <div className="col-6 col-lg-3">
              <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#FEFAE0', letterSpacing: '0.1em', fontSize: '1.00rem' }}>
                Comprar en:
              </h6>
              <p className="mb-3 footer-text" style={{ fontSize: '1.1rem', color: '#FEFAE0' }}>
                Estás dentro 🇭🇳 <span style={{ color: '#606C38', padding: '0 5px' }}>|</span> <a href="/cambio" className="footer-link fw-bold d-inline" style={{ textDecoration: 'underline', color: '#FEFAE0' }}>CAMBIO</a>
              </p>
              <p className="mb-2" style={{ fontSize: '0.9rem', color: '#FEFAE0' }}>Algunos de nuestros sitios internacionales:</p>
              <div className="d-flex flex-wrap gap-3 align-items-center" style={{ fontSize: '1.25rem' }}>
                <span title="España" style={{ cursor: 'pointer' }}>🇪🇸</span>
                <span title="Alemania" style={{ cursor: 'pointer' }}>🇩🇪</span>
                <span title="Australia" style={{ cursor: 'pointer' }}>🇦🇺</span>
                <span title="Francia" style={{ cursor: 'pointer' }}>🇫🇷</span>
                <span title="Dinamarca" style={{ cursor: 'pointer' }}>🇩🇰</span>
                <span title="Italia" style={{ cursor: 'pointer' }}>🇮🇹</span>
                <span title="Países Bajos" style={{ cursor: 'pointer' }}>🇳🇱</span>
                <span title="Estados Unidos" style={{ cursor: 'pointer' }}>🇺🇸</span>
                <span title="Suecia" style={{ cursor: 'pointer' }}>🇸🇪</span>
              </div>
            </div>
          </div>
        </div>

        {/* Franja inferior del copyright usando el tono crema suave */}
        <div style={{ backgroundColor: '#FEFAE0', padding: '15px 0' }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <small style={{ color: '#283618', fontSize: '1.1rem', fontWeight: '700' }}>© VELORA 2026</small>
              </div>
              <div className="col-md-6">
                <ul className="nav justify-content-center justify-content-md-end gap-3 mb-0">
                  <li className="nav-item">
                    <a href="/privacidad" className="footer-sub-link">Privacidad & cookies</a>
                  </li>
                  <li className="nav-item">
                    <span style={{ color: '#606C38', fontSize: '0.9rem' }}>|</span>
                  </li>
                  <li className="nav-item">
                    <a href="/terminos" className="footer-sub-link">Términos y Condiciones</a>
                  </li>
                  <li className="nav-item">
                    <span style={{ color: '#606C38', fontSize: '0.9rem' }}>|</span>
                  </li>
                  <li className="nav-item">
                    <a href="/accesibilidad" className="footer-sub-link">Accesibilidad</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          /* Enlaces principales (Verde oliva claro que pasa a Rosa Viejo en Hover) */
          .footer-link {
            color: #FEFAE0 !important;
            text-decoration: none;
            font-size: 1.00rem;
            transition: color 0.15s ease;
          }
          .footer-link:hover {
            color: #B56576 !important;
          }
          
          /* Enlaces de la barra inferior (Gris/Verde oscuro sobre fondo Crema) */
          .footer-sub-link {
            color: #283618 !important;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
          }
          .footer-sub-link:hover {
            color: #B56576 !important;
            text-decoration: underline;
          }
        `}</style>
      </footer>
    </>
  );
}