import React, { useState, useEffect } from 'react';

interface Product {
  id: string;
  thumb_src: string;
  thumb_alt: string;
  title: string;
  price: number;
}

interface Props {
  products: Product[];
}

export default function FeaturedProductsGallery({ products }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  // Auto-rotate cada 15 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[currentIndex];

  const handleAddToCart = () => {
    const product = {
      id: currentProduct.id,
      title: currentProduct.title,
      price: currentProduct.price,
      img: currentProduct.thumb_src,
      quantity: 1
    };

    // Leer carrito existente
    let cart = JSON.parse(localStorage.getItem('velora_cart') || '[]');

    // Verificar si ya existe
    const existingProduct = cart.find((item: any) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push(product);
    }

    // Guardar
    localStorage.setItem('velora_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated'));

    // Feedback visual
    setFeedback('¡Agregado al carrito!');
    setTimeout(() => setFeedback(null), 2000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '1.5rem'
        }}
      >
        {/* Contenedor de imagen */}
        <div
          style={{
            position: 'relative',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f8f8'
          }}
        >
          {/* Transición suave entre productos */}
          <img
            src={currentProduct.thumb_src}
            alt={currentProduct.thumb_alt}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              padding: '20px',
              opacity: 1,
              transition: 'opacity 0.5s ease-in-out'
            }}
          />

          {/* Badges con números de producto */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}
          >
            {products.map((_, index) => (
              <div
                key={index}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? '#4A5D23' : '#ccc',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          onClick={goToPrevious}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4A5D23';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = 'black';
          }}
        >
          ❮
        </button>

        <button
          onClick={goToNext}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            zIndex: 10,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#4A5D23';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.color = 'black';
          }}
        >
          ❯
        </button>
      </div>

      {/* Información del producto */}
      <div style={{ textAlign: 'center' }}>
        <a
          href={`/catalogo/${currentProduct.id}`}
          style={{
            textDecoration: 'none',
            color: '#2C3E20'
          }}
        >
          <h3 style={{ margin: '1rem 0 0.5rem', fontWeight: 'bold' }}>
            {currentProduct.title}
          </h3>
        </a>

        <h4 style={{ color: '#4A5D23', fontSize: '1.5rem', margin: '0.5rem 0 1.5rem' }}>
          L. {currentProduct.price.toFixed(2)}
        </h4>

        {/* Botones de acción */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a
            href={`/catalogo/${currentProduct.id}`}
            style={{
              flex: 1,
              padding: '12px 20px',
              border: '1px solid #4A5D23',
              backgroundColor: 'transparent',
              color: '#4A5D23',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Ver Detalles
          </a>

          <button
            onClick={handleAddToCart}
            style={{
              flex: 1,
              padding: '12px 20px',
              backgroundColor: feedback ? '#4A5D23' : '#D2691E',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '1rem'
            }}
            onMouseEnter={(e) => {
              if (!feedback) {
                e.currentTarget.style.opacity = '0.9';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {feedback ? feedback : 'Agregar 🛒'}
          </button>
        </div>

        {/* Indicador de posición */}
        <p
          style={{
            color: '#999',
            fontSize: '0.9rem',
            marginTop: '1rem'
          }}
        >
          {currentIndex + 1} de {products.length}
        </p>
      </div>
    </div>
  );
}
