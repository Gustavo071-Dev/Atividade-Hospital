import React from 'react';
import './style.css'; // <-- ADICIONE ISSO NO TOPO

export default function Blog() {
  const postagens = [ /* seus posts aqui */ ];

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog &amp; Novidades</h1>
        <p>Fique por dentro de dicas de saúde...</p>
      </div>

      <div className="blog-grid">
        {postagens.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="card-image-placeholder">[Imagem do Post]</div>
            
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
    </div>
  );
}