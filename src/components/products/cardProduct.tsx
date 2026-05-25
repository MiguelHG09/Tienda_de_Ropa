interface Props {
  id: string;
  thumb_src: string;
  thumb_alt: string;
  title: string;
  price: string;
  raw_price: number;
}

export default function CardProduct({
  id,
  thumb_src,
  thumb_alt,
  title,
  price,
  raw_price
}: Props) {
  return (
    <div className="card card-product border mb-5 shadow-sm border-radius-lg" style={{ backgroundColor: '#ffffff', borderColor: '#E8E4D9' }}>
      
      {/* 1. IMAGEN CLICKEABLE */}
      <a href={`/catalogo/${id}`} className="d-block height-350 text-center text-decoration-none">
        <img 
          className="w-100 h-100 p-4 rounded-top" 
          style={{objectFit: "contain"}} 
          src={thumb_src} 
          alt={thumb_alt} 
        />
      </a>
      
      <div className="card-body text-center p-4">
        {/* 2. TÍTULO CLICKEABLE */}
        <a href={`/catalogo/${id}`} className="text-decoration-none">
          <h4 className="font-weight-bold mb-2" style={{ color: '#2C3E20' }}>{title}</h4>
        </a>
        
        <h4 className="mb-0 text-lg mt-1 mb-3" style={{ color: '#4A5D23' }}>{price}</h4>

        <div className="d-flex justify-content-center gap-2 mt-3">
          <a 
            href={`/catalogo/${id}`} 
            className="btn btn-sm mb-0"
            style={{ backgroundColor: 'transparent', color: '#4A5D23', border: '1px solid #4A5D23' }}
          >
            Ver Detalles
          </a>
          <button
            className="btn btn-sm mb-0 add-to-cart-btn"
            style={{ backgroundColor: '#B56576', color: 'white', border: '1px solid #B56576' }}
            data-id={id}
            data-title={title}
            data-price={raw_price}
            data-img={thumb_src}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}