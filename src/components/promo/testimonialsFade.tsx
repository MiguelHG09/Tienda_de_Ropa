"use client";

import { useState, useEffect, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  highlight: string;
  initials: string;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    id: 0,
    name: "Alexa Liras",
    role: "Diseñadora · Tegucigalpa",
    rating: 4,
    text: "La calidad de la tela superó todas mis expectativas. El blazer llegó perfectamente empacado y el corte es exactamente lo que buscaba para mis reuniones de trabajo.",
    highlight: "Velour se convirtió en mi marca favorita desde el primer pedido.",
    initials: "AL",
    avatarBg: "#606C38",
  },
  {
    id: 1,
    name: "Laurent Perrier",
    role: "Arquitecto · San Pedro Sula",
    rating: 5,
    text: "Nunca pensé encontrar prendas con esta combinación de estilo y comodidad. El pantalón slim es mi favorito, lo uso en cualquier ocasión sin sentir que sacrifico nada.",
    highlight: "Lo uso en cualquier ocasión sin sacrificar comodidad.",
    initials: "LP",
    avatarBg: "#BC6C25",
  },
  {
    id: 2,
    name: "Michael Levi",
    role: "Fotógrafo · La Ceiba",
    rating: 4,
    text: "El servicio al cliente fue excepcional. Tuve una duda sobre la talla y me respondieron en minutos. La blusa de lino quedó perfecta, la recomiendo sin dudarlo.",
    highlight: "La blusa de lino quedó perfecta.",
    initials: "ML",
    avatarBg: "#283618",
  },
  {
    id: 3,
    name: "Sofía Cruz",
    role: "Consultora · Tegucigalpa",
    rating: 5,
    text: "Cada pedido llega con detalle y la selección de colores es impecable. Me encanta cómo complementan mi estilo sin perder comodidad.",
    highlight: "La selección de colores es impecable.",
    initials: "SC",
    avatarBg: "#8E4A1A",
  },
  {
    id: 4,
    name: "Daniela Ortiz",
    role: "Estilista · San Pedro Sula",
    rating: 5,
    text: "La calidad y el acabado de cada prenda me sorprenden. Es el sitio perfecto para encontrar piezas versátiles y modernas.",
    highlight: "Es el sitio perfecto para piezas versátiles.",
    initials: "DO",
    avatarBg: "#B54727",
  },
  {
    id: 5,
    name: "Carlos Mejía",
    role: "Publicista · Comayagua",
    rating: 4,
    text: "El proceso de compra fue muy claro y rápido. La atención fue amable y el producto llegó antes de lo esperado.",
    highlight: "Llegó antes de lo esperado.",
    initials: "CM",
    avatarBg: "#4A5F2A",
  },
];

const INTERVAL_MS = 15000;
const TOTAL = testimonials.length;

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            fontSize: "14px",
            color: s <= rating ? "#BC6C25" : "#D9CBA8",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsFade() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // AUTO SLIDE
  useEffect(() => {
    startAutoSlide();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // CENTRAR TARJETA ACTIVA
  useEffect(() => {
    const card = cardRefs.current[active];

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  function startAutoSlide() {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TOTAL);
      setAnimKey((k) => k + 1);
    }, INTERVAL_MS);
  }

  function handleGoTo(idx: number) {
    const next = ((idx % TOTAL) + TOTAL) % TOTAL;

    setActive(next);
    setAnimKey((k) => k + 1);

    startAutoSlide();
  }

  const featured = testimonials[active];

  return (
    <>
      <style>{`
        .ts-section {
          background: #FEFAE0;
          padding: 4rem 0;
        }

        .ts-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .ts-eyebrow {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #BC6C25;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .ts-title {
          font-family: Georgia, serif;
          font-size: 28px;
          color: #283618;
          font-weight: 400;
          margin-bottom: 10px;
        }

        .ts-sub {
          font-size: 14px;
          color: #606C38;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .ts-wrapper {
          position: relative;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto 2.5rem;

          overflow-x: auto;
          overflow-y: hidden;

          scroll-behavior: smooth;
          scrollbar-width: none;

          padding: 1rem 0;
        }

        .ts-wrapper::-webkit-scrollbar {
          display: none;
        }

        .ts-track {
          display: flex;
          gap: 24px;
          padding: 0 20px;
          width: max-content;
        }

        .ts-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 4px 14px rgba(40,54,24,0.18);
          cursor: pointer;
          display: grid;
          place-items: center;
          z-index: 5;
          transition: all 0.3s ease;
        }

        .ts-btn:hover {
          transform: translateY(-50%) scale(1.08);
        }

        .ts-btn.left {
          left: 10px;
        }

        .ts-btn.right {
          right: 10px;
        }

        .ts-card {
          flex: 0 0 300px;
          background: #fff;
          border: 1px solid rgba(96,108,56,0.15);
          border-radius: 20px;
          padding: 1.5rem;
          min-height: 250px;
          cursor: pointer;

          opacity: 0.45;
          transform: scale(0.92);

          transition:
            transform 0.5s ease,
            opacity 0.5s ease,
            box-shadow 0.5s ease,
            border-color 0.5s ease;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ts-card:hover {
          opacity: 0.75;
          transform: scale(0.96);
        }

        .ts-card.ts-active {
          opacity: 1;
          transform: scale(1);
          border-color: #606C38;
          box-shadow: 0 18px 40px rgba(40,54,24,0.14);
        }

        .ts-quote {
          font-size: 42px;
          color: #BC6C25;
          opacity: 0.3;
          font-family: Georgia, serif;
        }

        .ts-card-text {
          font-size: 13px;
          line-height: 1.7;
          color: #283618;
          margin: 12px 0;
          opacity: 0.82;

          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ts-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ts-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FEFAE0;
          font-weight: 600;
          font-size: 13px;
          flex-shrink: 0;
        }

        .ts-author-name {
          font-size: 13px;
          font-weight: 600;
          color: #283618;
          margin: 0;
        }

        .ts-author-role {
          font-size: 11px;
          color: #606C38;
          margin: 2px 0 0;
        }

        .ts-featured {
          background: #283618;
          border-radius: 18px;
          padding: 2rem 2.5rem;

          display: flex;
          align-items: center;
          gap: 2rem;

          max-width: 1120px;
          margin: 0 auto;

          transition: all 0.5s ease;
        }

        @keyframes ts-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ts-anim {
          animation: ts-up 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .ts-feat-left {
          min-width: 120px;
          text-align: center;
        }

        .ts-feat-label {
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(254,250,224,0.55);
          margin-bottom: 12px;
        }

        .ts-feat-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FEFAE0;
          font-size: 24px;
          margin: 0 auto 12px;
          border: 2px solid rgba(188,108,37,0.45);
        }

        .ts-feat-name {
          color: #FEFAE0;
          font-size: 14px;
          margin: 0;
        }

        .ts-feat-role {
          color: rgba(254,250,224,0.5);
          font-size: 11px;
          margin-top: 4px;
        }

        .ts-divider {
          width: 1px;
          align-self: stretch;
          background: rgba(254,250,224,0.15);
        }

        .ts-feat-quote {
          font-family: Georgia, serif;
          font-size: 18px;
          line-height: 1.8;
          color: #FEFAE0;
          font-style: italic;
        }

        .ts-feat-hl {
          color: #BC6C25;
        }

        .ts-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 1.5rem;
        }

        .ts-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          background: rgba(96,108,56,0.22);
          transition: all 0.3s ease;
        }

        .ts-dot.ts-active {
          width: 20px;
          background: #606C38;
        }

        .ts-progress-bar {
          height: 2px;
          background: rgba(96,108,56,0.15);
          border-radius: 999px;
          overflow: hidden;
          max-width: 1120px;
          margin: 1rem auto 0;
        }

        .ts-progress-fill {
          height: 100%;
          background: #BC6C25;
          animation: progress ${INTERVAL_MS}ms linear forwards;
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .ts-card {
            flex: 0 0 260px;
          }

          .ts-featured {
            flex-direction: column;
            padding: 1.5rem;
          }

          .ts-divider {
            width: 100%;
            height: 1px;
          }
        }
      `}</style>

      <section className="ts-section">
        <div className="container">

          <div className="ts-header">
            <p className="ts-eyebrow">Testimonios</p>
            <h3 className="ts-title">
              Lo que dicen nuestros clientes
            </h3>
            <p className="ts-sub">
              Cada prenda tiene una historia. Estas son las de quienes las viven cada día.
            </p>
          </div>

          {/* SLIDER */}
          <div className="ts-wrapper" ref={wrapperRef}>

            <button
              className="ts-btn left"
              onClick={() => handleGoTo(active - 1)}
            >
              ‹
            </button>

            <div className="ts-track">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  ref={(el) => {
                    cardRefs.current[t.id] = el;
                  }}
                  className={`ts-card ${
                    active === t.id ? "ts-active" : ""
                  }`}
                  onClick={() => handleGoTo(t.id)}
                >
                  <span className="ts-quote">"</span>

                  <StarRating rating={t.rating} />

                  <p className="ts-card-text">
                    {t.text}
                  </p>

                  <div className="ts-author">
                    <div
                      className="ts-avatar"
                      style={{ background: t.avatarBg }}
                    >
                      {t.initials}
                    </div>

                    <div>
                      <p className="ts-author-name">{t.name}</p>
                      <p className="ts-author-role">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="ts-btn right"
              onClick={() => handleGoTo(active + 1)}
            >
              ›
            </button>
          </div>

          {/* PROGRESS */}
          <div className="ts-progress-bar">
            <div
              className="ts-progress-fill"
              key={animKey}
            />
          </div>

          {/* FEATURED */}
          <div
            className="ts-featured ts-anim"
            key={`featured-${animKey}`}
          >
            <div className="ts-feat-left">
              <p className="ts-feat-label">
                Comentario actual
              </p>

              <div
                className="ts-feat-avatar"
                style={{ background: featured.avatarBg }}
              >
                {featured.initials}
              </div>

              <p className="ts-feat-name">
                {featured.name}
              </p>

              <p className="ts-feat-role">
                {featured.role}
              </p>
            </div>

            <div className="ts-divider" />

            <div style={{ flex: 1 }}>
              <StarRating rating={featured.rating} />

              <p className="ts-feat-quote">
                "{featured.text}{" "}
                <span className="ts-feat-hl">
                  {featured.highlight}
                </span>"
              </p>
            </div>
          </div>

          {/* DOTS */}
          <div className="ts-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`ts-dot ${
                  active === i ? "ts-active" : ""
                }`}
                onClick={() => handleGoTo(i)}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}