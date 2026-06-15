import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Coluna 1: Sobre */}
        <div className="footer-section">
          <h3>Nosso Hospital</h3>
          <p>Excelência médica, tecnologia de ponta e cuidado humanizado ao seu dispor 24 horas por dia.</p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/servicos">Nossos Serviços</Link></li>
            <li><Link to="/corpo-clinico">Corpo Clínico</Link></li>
            <li><Link to="/blog">Blog &amp; Novidades</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato Rápido */}
        <div className="footer-section">
          <h3>Atendimento</h3>
          <p>📞 Emergência: (11) 4002-8922</p>
          <p>📧 contato@nossohospital.com.br</p>
          <p>📍 Av. da Saúde, 123 - Centro</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nosso Hospital. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}