import React from 'react';
import './style.css';

const AgendamentoOnline = () => {
  return (
    <div className="page-container">
      <div className="form-wrapper">
        <h2 className="page-title">Agendamento Online</h2>
        <p className="page-subtitle">Preencha os dados abaixo para solicitar sua consulta.</p>
        
        <form className="health-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Nome Completo</label>
            <input type="text" placeholder="Digite seu nome" required />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Especialidade</label>
              <select required>
                <option value="">Selecione...</option>
                <option value="cardiologia">Cardiologia</option>
                <option value="dermatologia">Dermatologia</option>
                <option value="ortopedia">Ortopedia</option>
                <option value="pediatria">Pediatria</option>
              </select>
            </div>
            
            <div className="input-group">
              <label>Data Preferencial</label>
              <input type="date" required />
            </div>
          </div>

          <button type="submit" className="btn-primary full-width">Solicitar Agendamento</button>
        </form>
      </div>
    </div>
  );
};

export default AgendamentoOnline;