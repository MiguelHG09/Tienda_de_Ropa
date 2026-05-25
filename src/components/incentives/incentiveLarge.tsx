interface Props {
  // order: string;
}

const cards = [
  {
    id: 0,
    badge: "Rápido",
    title: "Envío express",
    shortDesc: "Recibe tu pedido en tiempo récord, donde estés.",
    detail: {
      label: "Logística",
      title: "Envío express a todo el país",
      text: "Procesamos tu pedido en menos de 2 horas hábiles. Con nuestros socios de entrega, llega a tu puerta en 24–48 h. Seguimiento en tiempo real incluido.",
      tag: "Gratis en compras +$500",
    },
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.6 19.8C9.6 20.7941 8.79412 21.6 7.8 21.6C6.80588 21.6 6 20.7941 6 19.8C6 18.8059 6.80588 18 7.8 18C8.79412 18 9.6 18.8059 9.6 19.8Z" fill="white"/>
        <path d="M18.0004 19.8C18.0004 20.7941 17.1945 21.6 16.2004 21.6C15.2063 21.6 14.4004 20.7941 14.4004 19.8C14.4004 18.8059 15.2063 18 16.2004 18C17.1945 18 18.0004 18.8059 18.0004 19.8Z" fill="#F9FAFB"/>
        <path d="M3.60039 4.80005C2.93765 4.80005 2.40039 5.33731 2.40039 6.00005V18C2.40039 18.6628 2.93765 19.2 3.60039 19.2H4.8604C5.13836 17.8307 6.34901 16.8 7.80039 16.8C9.25177 16.8 10.4624 17.8307 10.7404 19.2H12.0004C12.6631 19.2 13.2004 18.6628 13.2004 18V6.00005C13.2004 5.33731 12.6631 4.80005 12.0004 4.80005H3.60039Z" fill="#F9FAFB"/>
        <path d="M16.7996 8.40002C16.1368 8.40002 15.5996 8.93729 15.5996 9.60002V16.86C15.7935 16.8207 15.9942 16.8 16.1996 16.8C17.651 16.8 18.8617 17.8307 19.1396 19.2H20.3996C21.0624 19.2 21.5996 18.6628 21.5996 18V12C21.5996 11.6818 21.4731 11.3765 21.2481 11.1515L18.8481 8.75149C18.6231 8.52646 18.3178 8.40002 17.9996 8.40002H16.7996Z" fill="#F9FAFB"/>
      </svg>
    ),
    iconTerra: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.6 19.8C9.6 20.7941 8.79412 21.6 7.8 21.6C6.80588 21.6 6 20.7941 6 19.8C6 18.8059 6.80588 18 7.8 18C8.79412 18 9.6 18.8059 9.6 19.8Z" fill="#BC6C25"/>
        <path d="M18.0004 19.8C18.0004 20.7941 17.1945 21.6 16.2004 21.6C15.2063 21.6 14.4004 20.7941 14.4004 19.8C14.4004 18.8059 15.2063 18 16.2004 18C17.1945 18 18.0004 18.8059 18.0004 19.8Z" fill="#BC6C25"/>
        <path d="M3.60039 4.80005C2.93765 4.80005 2.40039 5.33731 2.40039 6.00005V18C2.40039 18.6628 2.93765 19.2 3.60039 19.2H4.8604C5.13836 17.8307 6.34901 16.8 7.80039 16.8C9.25177 16.8 10.4624 17.8307 10.7404 19.2H12.0004C12.6631 19.2 13.2004 18.6628 13.2004 18V6.00005C13.2004 5.33731 12.6631 4.80005 12.0004 4.80005H3.60039Z" fill="#BC6C25"/>
        <path d="M16.7996 8.40002C16.1368 8.40002 15.5996 8.93729 15.5996 9.60002V16.86C15.7935 16.8207 15.9942 16.8 16.1996 16.8C17.651 16.8 18.8617 17.8307 19.1396 19.2H20.3996C21.0624 19.2 21.5996 18.6628 21.5996 18V12C21.5996 11.6818 21.4731 11.3765 21.2481 11.1515L18.8481 8.75149C18.6231 8.52646 18.3178 8.40002 17.9996 8.40002H16.7996Z" fill="#BC6C25"/>
      </svg>
    ),
  },
  {
    id: 1,
    badge: "Sin costo",
    title: "Cambios gratuitos",
    shortDesc: "Sin preguntas, sin costos. Tu satisfacción, primero.",
    detail: {
      label: "Flexibilidad",
      title: "Cambios sin costo ni complicaciones",
      text: "Tienes 30 días para cambiar tu producto. Solo contáctanos y nosotros coordinamos la recolección. Sin formularios confusos ni cargos ocultos.",
      tag: "30 días para cambiar",
    },
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.13359 2.40002C5.79633 2.40002 6.33359 2.93729 6.33359 3.60002V6.12152C7.8577 4.56589 9.98222 3.60002 12.3336 3.60002C15.9929 3.60002 19.1028 5.93921 20.2553 9.20012C20.4762 9.82499 20.1487 10.5106 19.5238 10.7314C18.8989 10.9523 18.2134 10.6248 17.9924 9.99992C17.1683 7.66792 14.9442 6.00002 12.3336 6.00002C10.3717 6.00002 8.62804 6.94205 7.53281 8.40002H11.1336C11.7963 8.40002 12.3336 8.93729 12.3336 9.60002C12.3336 10.2628 11.7963 10.8 11.1336 10.8H5.13359C4.47086 10.8 3.93359 10.2628 3.93359 9.60002V3.60002C3.93359 2.93729 4.47086 2.40002 5.13359 2.40002ZM5.1434 13.2687C5.76825 13.0477 6.45383 13.3752 6.67469 14.0002C7.49894 16.3321 9.72303 18 12.3336 18C14.2955 18 16.0392 17.058 17.1343 15.6H13.5336C12.8708 15.6 12.3336 15.0628 12.3336 14.4C12.3336 13.7373 12.8708 13.2 13.5336 13.2H19.5336C19.8518 13.2 20.1571 13.3265 20.3821 13.5515C20.6071 13.7765 20.7336 14.0818 20.7336 14.4V20.4C20.7336 21.0628 20.1964 21.6 19.5336 21.6C18.8708 21.6 18.3336 21.0628 18.3336 20.4V17.8785C16.8095 19.4341 14.685 20.4 12.3336 20.4C8.6743 20.4 5.56445 18.0609 4.41188 14.7999C4.19102 14.175 4.51853 13.4895 5.1434 13.2687Z" fill="white"/>
      </svg>
    ),
    iconTerra: (
      <svg width="26" height="26" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.13359 2.40002C5.79633 2.40002 6.33359 2.93729 6.33359 3.60002V6.12152C7.8577 4.56589 9.98222 3.60002 12.3336 3.60002C15.9929 3.60002 19.1028 5.93921 20.2553 9.20012C20.4762 9.82499 20.1487 10.5106 19.5238 10.7314C18.8989 10.9523 18.2134 10.6248 17.9924 9.99992C17.1683 7.66792 14.9442 6.00002 12.3336 6.00002C10.3717 6.00002 8.62804 6.94205 7.53281 8.40002H11.1336C11.7963 8.40002 12.3336 8.93729 12.3336 9.60002C12.3336 10.2628 11.7963 10.8 11.1336 10.8H5.13359C4.47086 10.8 3.93359 10.2628 3.93359 9.60002V3.60002C3.93359 2.93729 4.47086 2.40002 5.13359 2.40002ZM5.1434 13.2687C5.76825 13.0477 6.45383 13.3752 6.67469 14.0002C7.49894 16.3321 9.72303 18 12.3336 18C14.2955 18 16.0392 17.058 17.1343 15.6H13.5336C12.8708 15.6 12.3336 15.0628 12.3336 14.4C12.3336 13.7373 12.8708 13.2 13.5336 13.2H19.5336C19.8518 13.2 20.1571 13.3265 20.3821 13.5515C20.6071 13.7765 20.7336 14.0818 20.7336 14.4V20.4C20.7336 21.0628 20.1964 21.6 19.5336 21.6C18.8708 21.6 18.3336 21.0628 18.3336 20.4V17.8785C16.8095 19.4341 14.685 20.4 12.3336 20.4C8.6743 20.4 5.56445 18.0609 4.41188 14.7999C4.19102 14.175 4.51853 13.4895 5.1434 13.2687Z" fill="#BC6C25"/>
      </svg>
    ),
  },
  {
    id: 2,
    badge: "Garantizado",
    title: "Garantía extendida",
    shortDesc: "Protección adicional para que compres con tranquilidad.",
    detail: {
      label: "Protección",
      title: "Garantía extendida hasta 2 años",
      text: "Además de la garantía del fabricante, te ofrecemos cobertura adicional por defectos de fabricación. Solo registra tu producto y queda protegido automáticamente.",
      tag: "Hasta 2 años de cobertura",
    },
    icon: (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.26574 5.99871C6.87565 5.94973 10.1647 4.57242 12.6664 2.33337C15.168 4.57242 18.4571 5.94973 22.0671 5.99871C22.1981 6.77964 22.2664 7.58187 22.2664 8.40006C22.2664 14.6699 18.2594 20.0038 12.6664 21.9807C7.07348 20.0038 3.06641 14.6699 3.06641 8.40006C3.06641 7.58187 3.13464 6.77964 3.26574 5.99871ZM17.1149 10.4486C17.5835 9.97992 17.5835 9.22013 17.1149 8.75149C16.6463 8.28287 15.8865 8.28287 15.4179 8.75149L11.4664 12.703L9.91494 11.1515C9.4463 10.6829 8.68651 10.6829 8.21787 11.1515C7.74925 11.6201 7.74925 12.3799 8.21787 12.8485L10.6179 15.2485C11.0865 15.7171 11.8463 15.7171 12.3149 15.2485L17.1149 10.4486Z" fill="white"/>
      </svg>
    ),
    iconTerra: (
      <svg width="26" height="26" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.26574 5.99871C6.87565 5.94973 10.1647 4.57242 12.6664 2.33337C15.168 4.57242 18.4571 5.94973 22.0671 5.99871C22.1981 6.77964 22.2664 7.58187 22.2664 8.40006C22.2664 14.6699 18.2594 20.0038 12.6664 21.9807C7.07348 20.0038 3.06641 14.6699 3.06641 8.40006C3.06641 7.58187 3.13464 6.77964 3.26574 5.99871ZM17.1149 10.4486C17.5835 9.97992 17.5835 9.22013 17.1149 8.75149C16.6463 8.28287 15.8865 8.28287 15.4179 8.75149L11.4664 12.703L9.91494 11.1515C9.4463 10.6829 8.68651 10.6829 8.21787 11.1515C7.74925 11.6201 7.74925 12.3799 8.21787 12.8485L10.6179 15.2485C11.0865 15.7171 11.8463 15.7171 12.3149 15.2485L17.1149 10.4486Z" fill="#BC6C25"/>
      </svg>
    ),
  },
];

export default function IncentiveLarge({}: Props) {
  return (
    <>
      <style>{`
        .incentive-card-inner {
          position: relative;
          cursor: pointer;
          border-radius: 20px;
          border: 1.5px solid #7a8a47;
          background: #e8eedd;
          padding: 1.25rem;
          overflow: hidden;

          transition:
            transform .35s ease,
            box-shadow .35s ease,
            background .35s ease;
        }

        .incentive-card-inner:hover {
          transform: scale(1.03);
          box-shadow: 0 18px 40px rgba(0,0,0,.10);
          background: #edf2e5;
        }

        .incentive-card-inner summary {
          list-style: none;
          cursor: default;
        }

        .incentive-card-inner summary::-webkit-details-marker {
          display: none;
        }

        .incentive-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;

          height: 4px;
          background: #BC6C25;
        }

        .incentive-badge {
          position: absolute;
          top: 14px;
          right: 14px;

          background: #FEFAE0;
          color: #BC6C25;

          font-size: 11px;
          font-weight: 700;

          text-transform: uppercase;
          letter-spacing: .08em;

          padding: 5px 14px;

          border-radius: 999px;
          border: 1px solid #d9b88e;
        }

        .incentive-icon-wrap {
          width: 56px;
          height: 56px;

          border-radius: 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 1.25rem;

          transition: transform .3s ease;
        }

        .incentive-card-inner:hover .incentive-icon-wrap {
          transform: scale(1.08);
        }

        .incentive-expand-panel {
          display: block;

          opacity: 1;

          max-height: none;

          overflow: visible;

          background: rgba(255,255,255,.45);

          border: 1px solid #d9dfca;

          border-radius: 16px;

          margin-top: 1rem;

          padding: 1.25rem;
        }

        .incentive-expand-panel h6 {
          margin: 0 0 .75rem;
          color: #283618;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .incentive-expand-panel p {
          margin: 0 0 1rem;
          line-height: 1.8;
          color: #4a5a2a;
        }

        .incentive-expand-tag {
          display: inline-block;

          background: transparent;

          color: #606C38;

          font-size: 14px;

          font-weight: 500;

          padding: 8px 16px;

          border-radius: 999px;

          border: 1px solid #7a8a47;
        }
      `}</style>

      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 10,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#BC6C25",
            }}
          />

          <span
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#BC6C25",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            NUESTROS BENEFICIOS
          </span>
        </div>

        <h2 style={{ color: "#283618" }}>
          Lo que tenemos para ofrecerte
        </h2>

        <p
          className="pe-md-12 me-lg-12"
          style={{
            color: "#4a5a2a",
            marginBottom: "2rem",
          }}
        >
          Cada compra viene acompañada de servicios pensados para que tu experiencia sea tan cálida y confiable como el producto en tus manos.
        </p>

        <div className="row mt-5">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`col-12 col-md-4 ${
                i === 1 ? "my-3 my-md-0" : ""
              }`}
            >
              <details
                open
                className="incentive-card-inner mb-4"
              >
                <summary>
                  <div className="incentive-bar" />

                  <span className="incentive-badge">
                    {card.badge}
                  </span>

                  <div
                    className="incentive-icon-wrap"
                    style={{ background: "#BC6C25" }}
                  >
                    {card.icon}
                  </div>

                  <h5
                    style={{
                      color: "#283618",
                      marginBottom: 6,
                    }}
                  >
                    {card.title}
                  </h5>

                  <p
                    style={{
                      color: "#4a5a2a",
                      fontSize: 14,
                    }}
                  >
                    {card.shortDesc}
                  </p>
                </summary>

                <div className="incentive-expand-panel">
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      marginBottom: ".5rem",
                      color: "#BC6C25",
                    }}
                  >
                    {card.detail.label}
                  </p>

                  <h6>{card.detail.title}</h6>

                  <p>{card.detail.text}</p>

                  <span className="incentive-expand-tag">
                    {card.detail.tag}
                  </span>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}