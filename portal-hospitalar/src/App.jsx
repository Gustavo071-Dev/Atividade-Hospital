import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação dos Componentes Globais
import Header from './components/Header/index';
import Footer from './components/Footer/index';

// IMPORTAÇÃO DE TODAS AS PÁGINAS DO PORTAL

// 👤 Páginas do Integrante A - ATIVAS
import Home from './page/Home/index';
import QuemSomos from './page/QuemSomos/index';
import Blog from './page/Blog/index';

// 👤 Páginas do Integrante B - AGORA ATIVAS (Respeitando a acentuação das suas pastas)
import Servicos from './page/Serviços/index';
import CorpoClinico from './page/CorpoClínico/index';
import Ouvidoria from './page/Ouvidoria/index';

// 👤 Suas Páginas (Integrante C) - AGORA ATIVAS! 🚀
import Contato from './page/Contato/index';
import AgendamentoOnline from './page/AgendamentoOnline/index'; // <-- Nome ajustado para bater com a nossa pasta
import TrabalheConosco from './page/TrabalheConosco/index';

export default function App() {
  return (
    <Router>
      {/* O Header fica ativo no topo de todas as páginas */}
      <Header />

      {/* Área dinâmica onde as páginas vão alternar */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          {/* Rotas do Integrante A - ATIVAS */}
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/blog" element={<Blog />} />

          {/* Rotas do Integrante B - AGORA ATIVAS */}
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/corpo-clinico" element={<CorpoClinico />} />
          <Route path="/ouvidoria" element={<Ouvidoria />} />

          {/* Suas Rotas (Integrante C) - AGORA ATIVAS! 🚀 */}
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamento" element={<AgendamentoOnline />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        </Routes>
      </main>

      {/* O Footer fica ativo no rodapé de todas as páginas */}
      <Footer />
    </Router>
  );
}