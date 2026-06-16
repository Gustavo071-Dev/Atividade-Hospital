import React from 'react';
import './style.css';

export default function QuemSomos() {
  return (
    <div className="about-container">
      <h1 className="about-title">Quem Somos</h1>
      
      {/* 📖 SEÇÃO HISTÓRIA */}
      <section className="history-section">
        <h2>Nossa História</h2>
        <p>
          Fundado em 1998, o Nosso Hospital nasceu com o propósito de transformar a saúde em nossa região. O que começou como uma pequena clínica de retaguarda, hoje se consolidou como um dos principais complexos hospitalares do país, referência em atendimentos de alta complexidade e procedimentos cirúrgicos avançados.
        </p>
        <p>
          Ao longo de quase três décadas, expandimos nossa estrutura física, investimos massivamente na aquisição de robótica médica e na digitalização de processos. No entanto, o nosso maior orgulho continua sendo a preservação da essência que nos deu origem: o olhar atento, empático e o acolhimento singular dedicado a cada paciente que cruza nossas portas.
        </p>
      </section>

      {/* 📊 SEÇÃO DE NÚMEROS (NOVA!) */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">+25</span>
            <span className="stat-label">Anos de História</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">+150k</span>
            <span className="stat-label">Atendimentos/Ano</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">350</span>
            <span className="stat-label">Leitos Ativos</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">98%</span>
            <span className="stat-label">Satisfação Geral</span>
          </div>
        </div>
      </section>

      {/* 🎯 SEÇÃO MISSÃO, VISÃO E VALORES */}
      <section className="mvv-grid">
        <div className="mvv-card card-missao">
          <h3>Missão</h3>
          <p>Prestar assistência à saúde com excelência, segurança e foco no paciente, gerando valor compartilhado por meio do conhecimento e do desenvolvimento humano.</p>
        </div>
        
        <div className="mvv-card card-visao">
          <h3>Visão</h3>
          <p>Ser reconhecido nacionalmente como o ecossistema de saúde mais confiável, inovador e eficiente, liderando as melhores práticas de medicina humanizada até 2030.</p>
        </div>
        
        <div className="mvv-card card-valores">
          <h3>Valores</h3>
          <ul>
            <li><strong>Vida em Primeiro Lugar:</strong> Cuidado incondicional.</li>
            <li><strong>Ética e Transparência:</strong> Relações baseadas na verdade.</li>
            <li><strong>Inovação:</strong> Busca contínua pela evolução científica.</li>
            <li><strong>Humanização:</strong> Empatia no olhar e acolhimento no gesto.</li>
          </ul>
        </div>
      </section>

      {/* 🤝 SEÇÃO DE COMPROMISSO (NOVA!) */}
      <section className="commitment-section">
        <h2>O Compromisso com a Humanização</h2>
        <p>
          Entendemos que tratar da saúde vai muito além de prescrever medicamentos ou realizar cirurgias com sucesso. Significa ouvir as angústias de quem cuida e de quem é cuidado. É por isso que investimos constantemente em programas de apoio psicológico, hotelaria hospitalar acolhedora e comitês de bioética dedicados a garantir a dignidade e o bem-estar integral em todas as etapas da jornada do paciente.
        </p>
      </section>
    </div>
  );
}