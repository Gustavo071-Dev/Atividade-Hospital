import React from 'react';
import './style.css';

export default function Blog() {
  // Lista de artigos reais populada para o portal do hospital
  const postagens = [
    {
      id: 1,
      titulo: "Alimentação Saudável e Imunidade: O que colocar no prato?",
      resumo: "Descubra quais superalimentos ajudam a fortalecer o sistema imunológico e prevenir doenças sazonais de forma natural.",
      categoria: "Nutrição",
      data: "12 Jun 2026",
      icone: "🍎"
    },
    {
      id: 2,
      titulo: "Check-up Médico: A importância dos exames preventivos anuais",
      resumo: "Entenda quais exames não podem faltar na sua rotina de cuidados de acordo com a sua faixa etária e histórico familiar.",
      categoria: "Prevenção",
      data: "08 Jun 2026",
      icone: "🩺"
    },
    {
      id: 3,
      titulo: "Novembro Azul e a saúde do homem: Desmistificando o exame",
      resumo: "Médico urologista do nosso corpo clínico explica como o diagnóstico precoce aumenta em até 90% as chances de cura.",
      categoria: "Urologia",
      data: "28 Mai 2026",
      icone: "👨"
    }
  ];

  return (
    <div className="blog-container">
      {/* 📰 CABEÇALHO DO BLOG */}
      <div className="blog-header">
        <h1>Blog &amp; Novidades</h1>
        <p>Fique por dentro de dicas de saúde, artigos de especialistas e bastidores do nosso hospital.</p>
      </div>

      {/* 🗂 LAYOUT EM DUAS COLUNAS */}
      <div className="blog-layout">
        
        {/* COLUNA DOS ARTIGOS */}
        <div className="blog-grid">
          {postagens.map((post) => (
            <article key={post.id} className="blog-card">
              {/* Capa simulada estilizada com gradiente e emoji */}
              <div className={`card-image-cover cover-cat-${post.categoria.toLowerCase()}`}>
                <span className="cover-icon">{post.icone}</span>
              </div>
              
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-category">{post.categoria}</span>
                  <span className="card-date">{post.data}</span>
                </div>
                
                <h2 className="card-title">{post.titulo}</h2>
                <p className="card-summary">{post.resumo}</p>
                
                <a href={`#post-${post.id}`} className="card-link">
                  Ler artigo completo →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 🔍 BARRA LATERAL (SIDEBAR) */}
        <aside className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Buscar no Blog</h3>
            <div className="search-box">
              <input type="text" placeholder="Digite uma palavra-chave..." />
              <button>🔍</button>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3>Categorias</h3>
            <ul className="sidebar-categories">
              <li><a href="#nutricao">Nutrição <span>(1)</span></a></li>
              <li><a href="#prevencao">Prevenção <span>(1)</span></a></li>
              <li><a href="#urologia">Urologia <span>(1)</span></a></li>
              <li><a href="#pediatria">Pediatria <span>(0)</span></a></li>
              <li><a href="#cardiologia">Cardiologia <span>(0)</span></a></li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}