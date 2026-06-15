import React from 'react';
import './style.css';
import '../AgendamentoOnline/style.css';

const TrabalheConosco = () => {
  return (
    <div className="career-page">
      <div className="career-header">
        <h2>Faça parte da nossa equipe</h2>
        <p>Buscamos profissionais apaixonados por cuidar de pessoas.</p>
      </div>

      <div className="career-content">
        <div className="jobs-list">
          <h3>Vagas Abertas</h3>
          <div className="job-card">
            <h4>Enfermeiro(a) Plantonista</h4>
            <p>Setor: UTI Adulto</p>
            <span className="job-badge">Tempo Integral</span>
          </div>
          <div className="job-card">
            <h4>Técnico em Radiologia</h4>
            <p>Setor: Imagem e Diagnóstico</p>
            <span className="job-badge">Meio Período</span>
          </div>
          <div className="job-card">
            <h4>Recepcionista Bilingue</h4>
            <p>Setor: Atendimento ao Cliente</p>
            <span className="job-badge">Tempo Integral</span>
          </div>
        </div>

        <div className="resume-form form-wrapper">
          <h3>Envie seu Currículo</h3>
          <form className="health-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Nome Completo</label>
              <input type="text" required />
            </div>
            <div className="input-group">
              <label>Área de Interesse</label>
              <select required>
                <option value="">Selecione...</option>
                <option value="medico">Corpo Clínico</option>
                <option value="enfermagem">Enfermagem</option>
                <option value="administrativo">Administrativo</option>
                <option value="apoio">Apoio/Limpeza</option>
              </select>
            </div>
            <div className="input-group file-upload">
              <label>Anexar Currículo (PDF/Word)</label>
              <input type="file" accept=".pdf,.doc,.docx" required />
            </div>
            <button type="submit" className="btn-primary full-width">Enviar Aplicação</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;