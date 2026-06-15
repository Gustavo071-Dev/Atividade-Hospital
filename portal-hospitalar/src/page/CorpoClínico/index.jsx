import React, { useState } from 'react';
import './style.css'; // Conectando com o style.css da mesma pasta

// 📸 Importando as imagens diretamente da pasta assets com a extensão .png
import fotoLuizGustavo from '../../assets/guga.png';
import fotoItaloSilva from '../../assets/italo.png';
import fotoAnderson from '../../assets/anderson.png';

const medicosData = [
  {
    id: 1,
    nome: "Dr. Luiz Gustavo",
    especialidade: "Cardiologia",
    crm: "CRM/SP 123456",
    imagem: fotoLuizGustavo,
    diasAtendimento: "Segunda, Quarta e Sexta",
    formacao: "Graduação e Residência pela UFBA"
  },
  {
    id: 2,
    nome: "Dr. Italo Silva",
    especialidade: "Pediatria",
    crm: "CRM/SP 654321",
    imagem: fotoItaloSilva,
    diasAtendimento: "Terça e Quinta",
    formacao: "Especialista em Neonatologia pela UNIFACS"
  },
  {
    id: 3,
    nome: "Dr. Anderson",
    especialidade: "Ortopedia",
    crm: "CRM/SP 789012",
    imagem: fotoAnderson,
    diasAtendimento: "Segunda a Quinta",
    formacao: "Membro da Sociedade Brasileira de Ortopedia (SBOT)"
  }
];

const checklistEspecialidades = ["Todos", "Cardiologia", "Pediatria", "Ortopedia"];

export default function CorpoClinico() {
  const [busca, setBusca] = useState("");
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState("Todos");

  const medicosFiltrados = medicosData.filter(medico => {
    const atendeBusca = medico.nome.toLowerCase().includes(busca.toLowerCase());
    const atendeEspecialidade = specialtyCheck(medico.especialidade);
    return atendeBusca && atendeEspecialidade;
  });

  function specialtyCheck(esp) {
    return especialidadeSelecionada === "Todos" || esp === especialidadeSelecionada;
  }

  return (
    <div className="corpo-clinico-container">
      <section className="clinica-header-section">
        <h1 className="clinica-title">Nosso Corpo Clínico</h1>
        <p className="clinica-text">Conheça nossos profissionais altamente qualificados prontos para cuidar de você.</p>
      </section>

      <section className="filter-section">
        <div className="search-group">
          <label className="filter-label">Buscar Médico</label>
          <input
            type="text"
            className="filter-input"
            placeholder="Digite o nome do profissional..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="tags-group">
          <label className="filter-label">Filtrar por Especialidade</label>
          <div className="tags-list">
            {checklistEspecialidades.map(esp => (
              <button
                key={esp}
                onClick={() => setEspecialidadeSelecionada(esp)}
                className={`tag-button ${especialidadeSelecionada === esp ? 'tag-active' : ''}`}
              >
                {esp}
              </button>
            ))}
          </div>
        </div>
      </section>

      {medicosFiltrados.length > 0 ? (
        <section className="medicos-grid-section">
          {medicosFiltrados.map(medico => (
            <div key={medico.id} className="medico-item-card">
              <div className="medico-image-wrapper">
                <img src={medico.imagem} alt={medico.nome} className="medico-img" />
                <span className="medico-tag-badge">{medico.especialidade}</span>
              </div>

              <div className="medico-details-box">
                <h3 className="medico-card-name">{medico.nome}</h3>
                <p className="medico-card-crm">{medico.crm}</p>
                
                <div className="medico-card-divider">
                  <span className="medico-card-subtitle">Formação Principal:</span>
                  <p className="medico-card-text">{medico.formacao}</p>
                </div>

                <div className="medico-card-footer">
                  <div className="medico-schedule-box">
                    <span className="schedule-title">Atendimento</span>
                    <p className="schedule-days">{medico.diasAtendimento}</p>
                  </div>
                  <button className="btn-primary">Agendar</button> 
                </div>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="empty-results-box">
          <p className="empty-text">Nenhum profissional encontrado.</p>
          <button className="btn-secondary" onClick={() => { setBusca(""); setEspecialidadeSelecionada("Todos"); }}>
            Limpar Filtros
          </button>
        </div>
      )}
    </div>
  );
}