const faqs = [
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Aceptamos pagos con tarjeta de crédito, débito y transferencia bancaria. La confirmación por transferencia puede tomar entre 1 y 3 días hábiles. Actualmente no contamos con pago contra entrega.",
  },
  {
    question: "¿Cuáles son sus políticas de cambio?",
    answer: "Puedes solicitar cambios dentro de los primeros 7 días posteriores a recibir tu pedido. La prenda debe conservar etiquetas y estar en perfecto estado.",
  },
  {
    question: "¿Cuánto tardará en llegar mi pedido y cómo puedo rastrearlo?",
    answer: "Los envíos estándar toman de 2 a 5 días hábiles. Una vez que tu orden sea procesada, recibirás un correo electrónico con un enlace de seguimiento para que conozcas la ubicación de tu paquete en tiempo real.",
  },
  {
    question: "¿Qué hago si una prenda no me queda o llega dañada?",
    answer: "No te preocupes, la satisfacción es nuestra prioridad. Cuentas con un plazo de hasta 30 días tras recibir tu compra para gestionar un cambio de talla o reportar cualquier inconveniente escribiendo a nuestro canal de soporte.",
  },
    {
    question: "¿Puedo solicitar la devolución de mi pedido?",
    answer: "Sí. Si tu pedido llegó incorrecto o con algún defecto puedes solicitar devolución. Nuestro equipo te ayudará durante todo el proceso.",
  },

];

export default function IncentiveCols() {
  return (
    <section style={{ background: "#FEFAE0", padding: "4rem 0 7.5rem" }}>
      <style>{`
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.1rem 1.25rem;
          margin: 0;
          font-size: 19px;
          font-weight: 500;
          color: #283618;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-item summary .question-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
          line-height: 1.4;
        }

        .faq-item summary .toggle-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 1;
          border: 0.5px solid rgba(188,108,37,0.35);
          background: #FEFAE0;
          color: #BC6C25;
          transition: background 0.3s, color 0.3s, transform 0.35s;
        }

        .faq-item[open] .toggle-icon {
          background: #BC6C25;
          color: #FEFAE0;
          transform: rotate(45deg);
        }

        .faq-answer {
          padding: 0.9rem 1.25rem 1.1rem;
          font-size: 17px;
          color: #4a4a3a;
          line-height: 1.75;
          border-top: 0.5px solid rgba(96,108,56,0.15);
          margin: 0;
        }
      `}</style>

      <p style={{ fontSize: 20, letterSpacing: "0.18em", color: "#BC6C25", fontWeight: 500, textAlign: "center", marginBottom: 8 }}>
        SOPORTE
      </p>
      <h2 style={{ fontFamily: "sans-serif", fontSize: 30, color: "#283618", fontWeight: 400, textAlign: "center", marginBottom: 10 }}>
        PREGUNTAS FRECUENTES
      </h2>
      <p style={{ fontSize: 18, color: "#606C38", maxWidth: 480, margin: "0 auto 2.5rem", textAlign: "center", lineHeight: 1.6 }}>
        Todo lo que necesitas saber sobre compras, envíos, pagos y devoluciones.
      </p>

      <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="faq-item"
            style={{
              background: "#fff",
              border: "0.5px solid rgba(96,108,56,0.25)",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 0 0 transparent",
              transition: "border-color 0.3s, box-shadow 0.3s",
            }}
          >
            <summary>
              <span className="question-text">
                <span
                  style={{
                    display: "inline-block",
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    background: "#BC6C25",
                    marginRight: 8,
                    verticalAlign: "middle",
                    position: "relative",
                    top: -1,
                  }}
                  aria-hidden="true"
                />
                {faq.question}
              </span>
              <span className="toggle-icon" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="faq-answer">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
