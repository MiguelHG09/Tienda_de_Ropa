import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (Math.abs(prevScrollPos.current - currentScrollPos) < 10) return;

      const isVisible = prevScrollPos.current > currentScrollPos || currentScrollPos < 50;
      setVisible(isVisible);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const getCartCount = () => {
      const storedCart = localStorage.getItem('velora_cart');
      const cart = storedCart ? JSON.parse(storedCart) : [];
      return Array.isArray(cart) ? cart.reduce((sum, item: any) => sum + (item.quantity || 0), 0) : 0;
    };

    const updateCount = () => {
      setCartCount(getCartCount());
    };

    updateCount();

    const handleCartUpdated = () => updateCount();

    window.addEventListener('cart-updated', handleCartUpdated);
    window.addEventListener('storage', handleCartUpdated);

    return () => {
      window.removeEventListener('cart-updated', handleCartUpdated);
      window.removeEventListener('storage', handleCartUpdated);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg position-sticky top-0 z-index-3 shadow custom-navbar-scroll ${
        visible ? 'navbar-visible' : 'navbar-hidden'
      }`}
      style={{ backgroundColor: '#4A5D23', color: '#E8E4D9' }}
    >
      <style>{`
        /* Transición suave para ocultar/mostrar el navbar */
        .custom-navbar-scroll {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar-visible {
          transform: translateY(0);
        }
        .navbar-hidden {
          transform: translateY(-100%);
        }

        /* Estructura original */
        .navbar-custom-container { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 0.65rem 1rem; }
        .navbar-brand { display: flex; align-items: center; gap: 0.75rem; }
        .logo-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: #E8E4D9;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          position: relative;
          transition: color 0.25s ease, transform 0.25s ease;
          background: transparent;
          display: inline-block;
        }
        .logo-text:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }
        .logo-text::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 3px;
          background: #ffffff;
          transition: width 0.25s ease;
        }
        .logo-text:hover::after {
          width: 100%;
        }
        .nav-menu { display: flex; gap: 1.5rem; align-items: center; margin: 0; padding: 0; list-style: none; }
        
        /* Enlaces en MAYÚSCULAS y NEGRITA (700) */
        .nav-menu li { position: relative; }
        
        .nav-link-custom {
          color: #E8E4D9  !important;
          font-weight: 700; 
          font-size: 1.05rem;
          letter-spacing: 0.08em;
          text-transform: uppercase; 
          padding: 0.6rem 0;
          text-decoration: none !important;
          display: inline-block;
          position: relative;
          transition: color 0.25s ease;
        }
        
        .nav-link-custom:hover {
          color: #FFFFFF !important;
          opacity: 1;
        }

        /* Línea inferior blanca animada */
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #FFFFFF !important;
          transition: width 0.25s ease-in-out;
          z-index: 10;
        }
        
        .nav-menu li:hover .nav-link-custom::after {
          width: 100%;
        }

        /* Iconos configurados más grandes */
        .icons-group { display: flex; gap: 0.7rem; align-items: center; }
        
        .icon-btn { width: 44px; height: 44px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; background: transparent; border: none; cursor: pointer; transition: background .2s ease; }
        .icon-btn:hover { background: rgba(255, 255, 255, 0.15); }
        
        .icon-svg { width: 24px; height: 24px; stroke: #E8E4D9 ; fill: none; transition: stroke 0.2s ease, fill 0.2s ease; }
        .icon-btn:hover .icon-svg { stroke: #FFFFFF; }
        
        .icon-svg-fill { fill: #E8E4D9 ; stroke: none !important; }
        .icon-btn:hover .icon-svg-fill { fill: #FFFFFF; }
        
        .cart-badge { position: relative; }
        .cart-badge::after { content: attr(data-count); position: absolute; right: -4px; top: -4px; background: #283618; color: white; border-radius: 12px; padding: 2px 6px; font-size: 11px; font-weight: 700; }
        
        @media (max-width: 767px) {
          .nav-menu { display: none; }
        }
      `}</style>

      <div className="container navbar-custom-container">
        <a className="navbar-brand ms-0" href="/">
          <span className="logo-text">Velora</span>
        </a>

        <ul className="nav-menu">
          <li>
            <a className="nav-link-custom" href="/">Inicio</a>
          </li>
          <li>
            <a className="nav-link-custom" href="/catalogo">Catalogo</a>
          </li>
          <li>
            <a className="nav-link-custom" href="/catalogo?filtro=Hombre">Hombre</a>
          </li>
          <li>
            <a className="nav-link-custom" href="/catalogo?filtro=Mujer">Mujer</a>
          </li>
          <li>
            <a className="nav-link-custom" href="/catalogo?filtro=Accesorios">Accesorios</a>
          </li>

        </ul>

        <div className="icons-group">
          <button className="icon-btn" aria-label="Buscar">
            <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21l-4.35-4.35" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
              <circle cx="11" cy="11" r="6" strokeWidth="1.8"></circle>
            </svg>
          </button>

          <a href="/carrito" className="icon-btn cart-badge" data-count={cartCount} aria-label="Carrito" style={{ textDecoration: 'none' }}>
            <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6h15l-1.5 9h-12z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <circle className="icon-svg-fill" cx="10" cy="20" r="1"></circle>
              <circle className="icon-svg-fill" cx="18" cy="20" r="1"></circle>
            </svg>
          </a>

          <button className="icon-btn" aria-label="Usuario">
            <svg className="icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20a8 8 0 0 1 16 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;