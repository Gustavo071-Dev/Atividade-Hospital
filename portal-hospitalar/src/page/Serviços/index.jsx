import React, { useState } from 'react';
import './style.css'; // Conectando com o style.css da mesma pasta

const servicosData = [
  {
    id: "ps",
    titulo: "Pronto Socorro 24h",
    descricao: "Atendimento de urgência e emergência adulto e infantil com equipe de prontidão constante.",
    detalhes: "Equipado com salas de trauma, consultórios modernos e triagem rápida baseada em gravidade.",
    infra: "Leitos de observação monitorados e suporte rápido."
  },
  {
    id: "uti",
    titulo: "Unidade de Terapia Intensiva (UTI)",
    descricao: "Suporte avançado de vida e monitoramento crítico contínuo para pacientes em estado complexo.",
    detalhes: "Tecnologia de ponta para ventilação mecânica e monitoramento cardíaco ininterrupto por especialistas.",
    infra: "Equipe especializada e acompanhamento multidisciplinar."
  },
  {
    id: "img",
    titulo: "Diagnóstico por Imagem",
    descricao: "Rapidez e alta definição em exames laboratoriais e exames de imagem complexos.",
    detalhes: "Equipamentos modernos para Ressonância Magnética, Tomografia Computadorizada e Ultrassom.",
    infra: "Resultados online rápidos integrados diretamente à sua ficha médica."
  }
];

export default function Servicos() {
  const [servicoAtivo, setServicoAtivo] = useState(null);

  return (
    <div className="servicos-container">
      <section className="servicos-header-section">
        <h1 className="servicos-title">Nossos Serviços e Setores</h1>
        <p className="servicos-text">Uma infraestrutura completa projetada para oferecer segurança técnica e cuidado integral.</p>
      </section>

      <section className="servicos-grid-section">
        {servicosData.map((servico) => (
          <div key={servico.id} className="servico-item-card">
            <div className="servico-main-content">
              <div className="servico-avatar-icon">🏥</div>
              <h3 className="servico-card-title">{servico.titulo}</h3>
              <p className="servico-card-text">{servico.descricao}</p>
            </div>

            <div className="servico-accordion-footer">
              <button
                onClick={() => setServicoAtivo(servicoAtivo === servico.id ? null : servico.id)}
                className="accordion-toggle-link"
              >
                {servicoAtivo === servico.id ? "Ocultar Detalhes ▲" : "Ver Detalhes do Setor ▼"}
              </button>

              {servicoAtivo === servico.id && (
                <div className="servico-dropdown-box">
                  <strong className="dropdown-subtitle">Infraestrutura:</strong>
                  <p className="dropdown-text">{servico.detalhes}</p>
                  <strong className="dropdown-subtitle">Diferencial:</strong>
                  <p className="dropdown-text differential-style">{servico.infra}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="cta-banner-section">
        <div className="cta-left-box">
          <h2 className="cta-title">Precisa de exames ou cirurgias?</h2>
          <p className="cta-text">Nossa central de atendimento simplifica agendamentos e liberações com convênios.</p>
        </div>
        <div className="cta-right-box">
          <button className="btn-primary">Central de Exames</button>
          <button className="btn-secondary">Falar com Atendimento</button>
        </div>
      </section>
    </div>
  );
}