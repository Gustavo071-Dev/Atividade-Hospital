import React, { useState } from 'react';
import './style.css'; // Conectando com o style.css da mesma pasta

const faqData = [
  {
    id: 1,
    pergunta: "Como solicito cópia do prontuário médico?",
    resposta: "A solicitação pode ser feita pelo formulário de Ouvidoria abaixo. O prazo para a disponibilização é de até 5 dias úteis."
  },
  {
    id: 2,
    pergunta: "Quais os horários de visita das internações?",
    resposta: "As visitas em enfermarias gerais ocorrem diariamente das 10h às 21h, limitadas a dois visitantes simultâneos."
  }
];

export default function Ouvidoria() {
  const [faqAberto, setFaqAberto] = useState(null);
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: '', email: '', telefone: '',
    tipoManifestacao: 'Elogio', mensagem: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormEnviado(true);
  };

  return (
    <div className="ouvidoria-container">
      <section className="ouvidoria-header-section">
        <h1 className="ouvidoria-title">Ouvidoria & SAC</h1>
        <p className="ouvidoria-text">Canal seguro para registro de dúvidas frequentes, sugestões, elogios ou reclamações.</p>
      </section>

      <section className="faq-box-container">
        <h2 className="section-title">Perguntas Frequentes (FAQ)</h2>
        <div className="faq-wrapper">
          {faqData.map((faq) => (
            <div key={faq.id} className="faq-row-item">
              <button 
                onClick={() => setFaqAberto(faqAberto === faq.id ? null : faq.id)}
                className="faq-toggle-button"
              >
                <span>{faq.pergunta}</span>
                <span>{faqAberto === faq.id ? '−' : '+'}</span>
              </button>
              {faqAberto === faq.id && <div className="faq-answer-panel"><p>{faq.resposta}</p></div>}
            </div>
          ))}
        </div>
      </section>

      <section className="form-box-container">
        <h2 className="section-title">Formulário de Ouvidoria</h2>

        {formEnviado ? (
          <div className="success-message-banner">
            <h3>Manifestação Registrada!</h3>
            <p>Retornaremos em até 48 hours úteis através do e-mail informado.</p>
            <button className="btn-primary" onClick={() => setFormEnviado(false)}>Voltar</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="ouvidoria-html-form">
            <div className="form-double-column">
              <div className="input-field-group">
                <label className="form-field-label">Nome Completo *</label>
                <input type="text" className="form-text-input" name="nome" required value={formData.nome} onChange={handleInputChange} placeholder="Ex: João da Silva" />
              </div>
              <div className="input-field-group">
                <label className="form-field-label">E-mail *</label>
                <input type="email" className="form-text-input" name="email" required value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" />
              </div>
            </div>

            <div className="form-double-column">
              <div className="input-field-group">
                <label className="form-field-label">Telefone *</label>
                <input type="tel" className="form-text-input" name="telefone" required value={formData.telefone} onChange={handleInputChange} placeholder="(11) 99999-9999" />
              </div>
              <div className="input-field-group">
                <label className="form-field-label">Tipo de Registro *</label>
                <select className="form-select-input" name="tipoManifestacao" value={formData.tipoManifestacao} onChange={handleInputChange}>
                  <option value="Elogio">Elogio</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Reclamação">Reclamação</option>
                </select>
              </div>
            </div>

            <div className="input-field-group">
              <label className="form-field-label">Sua Mensagem *</label>
              <textarea className="form-textarea-input" name="mensagem" rows="4" required value={formData.mensagem} onChange={handleInputChange} placeholder="Descreva seu caso..." />
            </div>

            <div className="form-submit-box">
              <button type="submit" className="btn-primary">Enviar Mensagem</button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}