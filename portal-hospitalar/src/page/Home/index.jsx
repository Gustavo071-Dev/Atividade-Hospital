import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importe o hook de navegação
import './style.css';

export default function Home() {
  const navigate = useNavigate(); // 2. Inicialize a função de navegação

  return (
    <div className="home-container">
      {/* 🚀 SEÇÃO PRINCIPAL (HERO) */}
      <section className="hero-section">
        <h1 className="hero-title">Cuidando da sua Saúde com Excelência</h1>
        <p className="hero-text">
          No Nosso Hospital, combinamos tecnologia de ponta, corpo clínico altamente qualificado e um atendimento humanizado para oferecer o melhor cuidado a você e sua família.
        </p>
        <div className="hero-buttons">
          {/* 3. Adicionado o evento onClick direcionando para a rota correta do App.jsx */}
          <button 
            className="btn-primary" 
            onClick={() => navigate('/agendamento')}
          >
            Agendar Consulta
          </button>
          
          {/* Opcional: Direcionar o segundo botão para a rota de serviços se quiser */}
          <button 
            className="btn-secondary"
            onClick={() => navigate('/servicos')}
          >
            Conhecer Especialidades
          </button>
        </div>
      </section>

      {/* 🏥 SEÇÃO DE DIFERENCIAIS (FEATURES) */}
      <section className="features-section">
        <h2 className="features-title">Por que escolher o Nosso Hospital?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🚨 Emergência 24h</h3>
            <p>Pronto-socorro completo e preparado para atendimentos de alta complexidade a qualquer hora do dia ou da noite.</p>
          </div>
          <div className="feature-card">
            <h3>🔬 Tecnologia de Ponta</h3>
            <p>Centro de diagnóstico por imagem moderno e laboratórios integrados para exames rápidos e precisos.</p>
          </div>
          <div className="feature-card">
            <h3>👨‍⚕️ Corpo Clínico</h3>
            <p>Médicos especialistas renomados e equipes multidisciplinares focadas no seu bem-estar completo.</p>
          </div>
          <div className="feature-card">
            <h3>Hospital Dia</h3>
            <p>Estrutura planejada para procedimentos cirúrgicos de pequeno e médio porte com internação de curta duração.</p>
          </div>
        </div>
      </section>

      {/* 🕒 SEÇÃO DE HORÁRIOS E INFORMAÇÕES */}
      <section className="info-section">
        <div className="info-content">
          <div className="info-text">
            <h2>Horários de Atendimento</h2>
            <p>Fique atento aos horários diferenciados de funcionamento dos nossos setores:</p>
            <ul>
              <li><strong>Pronto-Atendimento / Emergência:</strong> 24 horas / 7 dias por semana</li>
              <li><strong>Ambulatório e Consultas:</strong> Segunda a Sexta, das 07h às 21h | Sábado, das 08h às 13h</li>
              <li><strong>Visitas Internação:</strong> Diariamente, das 14h às 16h e das 19h às 20h</li>
              <li><strong>Coleta de Exames:</strong> Segunda a Sábado, das 06h às 12h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ❓ SEÇÃO DE PERGUNTAS FREQUENTES (FAQ) */}
      <section className="faq-section">
        <h2 className="faq-title">Dúvidas Frequentes</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h4>Quais convênios são aceitos?</h4>
            <p>Atendemos aos principais planos de saúde do mercado, além de consultas particulares. Entre em contato com a nossa central para verificar a cobertura do seu plano específico.</p>
          </div>
          <div className="faq-item">
            <h4>Como faço para cancelar ou remarcar uma consulta?</h4>
            <p>Você pode realizar alterações na sua agenda com até 24 hours de antecedência através do nosso portal de Agendamento Online ou ligando diretamente para o nosso suporte.</p>
          </div>
          <div className="faq-item">
            <h4>Onde posso retirar os resultados dos meus exames?</h4>
            <p>Para sua maior comodidade, todos os laudos e resultados de exames podem ser acessados e baixados diretamente aqui no nosso portal na área do paciente.</p>
          </div>
        </div>
      </section>
    </div>
  );
}