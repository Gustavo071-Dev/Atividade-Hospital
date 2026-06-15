import React from 'react';
import './style.css';
import '../AgendamentoOnline/style.css'; 

const Contato = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-info">
          <h2>Fale Conosco</h2>
          <p>Estamos prontos para atender você. Entre em contato pelos canais abaixo ou nos faça uma visita.</p>
          
          <div className="info-block">
            <h3>📍 Endereço</h3>
            <p>Av. da Saúde, 1234 - Bairro Médico<br/>Cidade - Estado, 00000-000</p>
          </div>
          
          <div className="info-block">
            <h3>📞 Telefones</h3>
            <p>Recepção: (00) 1234-5678<br/>Emergência: (00) 9876-5432</p>
          </div>
          
          <div className="map-placeholder">
            <span>[ Mapa Interativo Aqui ]</span>
          </div>
        </div>

        <div className="contact-form-section form-wrapper">
          <form className="health-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Nome</label>
              <input type="text" placeholder="Seu nome" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Seu email" required />
            </div>
            <div className="input-group">
              <label>Mensagem</label>
              <textarea rows="5" placeholder="Como podemos ajudar?" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Enviar Mensagem</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contato;