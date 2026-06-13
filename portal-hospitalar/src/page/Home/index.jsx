import React from 'react';
import './style.css'; // <-- ADICIONE ISSO

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Cuidando da sua Saúde com Excelência...</h1>
        <p className="hero-text">No Nosso Hospital, combinamos tecnologia...</p>
        <div>
          <button className="btn-primary">Agendar Consulta</button>
          <button className="btn-secondary">Conhecer Especialidades</button>
        </div>
      </section>
      {/* Aplique o mesmo padrão de className nas seções de baixo */}
    </div>
  );
}