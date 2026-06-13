import React from 'react';
import './style.css'; // <-- ADICIONE ISSO

export default function QuemSomos() {
  return (
    <div className="about-container">
      <h1 className="about-title">Quem Somos</h1>
      <section className="history-section">
        <h2>Nossa História</h2>
        <p>Fundado em 1998...</p>
      </section>
      <section className="mvv-grid">
        <div className="mvv-card card-missao">
          <h3>Missão</h3>
          <p>Prestar assistência...</p>
        </div>
        {/* Faça o mesmo para Visão (card-visao) e Valores (card-valores) */}
      </section>
    </div>
  );
}