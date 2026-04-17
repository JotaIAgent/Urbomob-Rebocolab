import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProdutosPage } from './pages/ProdutosPage';
import { SobrePage } from './pages/SobrePage';
import { ContatoPage } from './pages/ContatoPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Se mudou de rota e tem uma categoria na query, não joga pro topo imediatamente.
    // Deixa o ProductCatalog lidar com o scroll.
    if (pathname === '/produtos' && search.includes('categoria=')) {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/produto/:slug" element={<ProductDetailPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
