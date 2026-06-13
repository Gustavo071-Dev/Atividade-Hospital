import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação dos Componentes Globais (A cargo do restante do trio)
// COMENTADO:
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// IMPORTAÇÃO DE TODAS AS 9 PÁGINAS DO PORTAL

// 👤 Suas Páginas (Integrante A) - ATIVAS
import Home from './page/Home/index';
import QuemSomos from './page/QuemSomos/index';
import Blog from './page/Blog/index';

// 👤 Páginas do Integrante B - COMENTADO
// import Servicos from './page/Servicos/index';
// import CorpoClinico from './page/CorpoClinico/index';
// import Ouvidoria from './page/Ouvidoria/index';

// 👤 Páginas do Integrante C - COMENTADO
// import Contato from './page/Contato/index';
// import Agendamento from './page/Agendamento/index';
// import TrabalheConosco from './page/TrabalheConosco/index';

export default function App() {
  return (
    <Router>
      {/* COMENTADO: O Navbar precisa ser comentado aqui dentro do HTML/JSX também */}
      {/* <Navbar /> */}

      {/* Área dinâmica onde as páginas vão alternar dependendo da URL */}
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

      {/* COMENTADO: O Footer também precisa ser comentado aqui dentro */}
      {/* <Footer /> */}
    </Router>
  );
}