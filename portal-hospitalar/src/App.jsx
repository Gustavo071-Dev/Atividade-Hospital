import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação dos Componentes Globais (Ativados para o seu teste!)
import Header from './components/Header/index';
import Footer from './components/Footer/index';

// IMPORTAÇÃO DE TODAS AS 9 PÁGINAS DO PORTAL

// 👤 Suas Páginas (Integrante A) - ATIVAS
import Home from './page/Home/index';
import QuemSomos from './page/QuemSomos/index';
import Blog from './page/Blog/index';

// 👤 Páginas do Integrante B - COMENTADO (Ative quando seu colega terminar)
// import Servicos from './page/Servicos/index';
// import CorpoClinico from './page/CorpoClinico/index';
// import Ouvidoria from './page/Ouvidoria/index';

// 👤 Páginas do Integrante C - COMENTADO (Ative quando seu colega terminar)
// import Contato from './page/Contato/index';
// import Agendamento from './page/Agendamento/index';
// import TrabalheConosco from './page/TrabalheConosco/index';

export default function App() {
  return (
    <Router>
      {/* O Header fica ativo no topo de todas as páginas */}
      <Header />

      {/* Área dinâmica onde as suas páginas vão alternar */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Suas Rotas (Integrante A) - ATIVAS */}
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/blog" element={<Blog />} />

          {/* COMENTADO: Rotas do Integrante B
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/corpo-clinico" element={<CorpoClinico />} />
          <Route path="/ouvidoria" element={<Ouvidoria />} />
          */}

          {/* COMENTADO: Rotas do Integrante C
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          */}
        </Routes>
      </main>

      {/* O Footer fica ativo no rodapé de todas as páginas */}
      <Footer />
    </Router>
  );
}