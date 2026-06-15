import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          🏥 Nosso Hospital
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/quem-somos" className="nav-item">Quem Somos</Link></li>
        <li><Link to="/servicos" className="nav-item">Serviços</Link></li>
        <li><Link to="/corpo-clinico" className="nav-item">Corpo Clínico</Link></li>
        <li><Link to="/blog" className="nav-item">Blog</Link></li>
        <li><Link to="/ouvidoria" className="nav-item">Ouvidoria</Link></li>
        <li><Link to="/trabalhe-conosco" className="nav-item">Trabalhe Conosco</Link></li>
        <li><Link to="/contato" className="nav-item">Contato</Link></li>
        <li><Link to="/agendamento" className="nav-item nav-btn-agendar">Agendar Consulta</Link></li>
      </ul>
    </nav>
  );
}