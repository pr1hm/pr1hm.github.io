import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingNavbar } from './components/hirael/Hero';
import { Contact } from './components/hirael/Contact';
import { Home } from './pages/Home';
import { BlogList } from './pages/BlogList';
import { BlogPostPage } from './pages/BlogPostPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[hsl(var(--bg))] text-[hsl(var(--text))] antialiased selection:bg-sky-500/20 selection:text-sky-300">
      {/* On non-home routes, render the floating navbar and contact footer */}
      {!isHome && <FloatingNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!isHome && <Contact />}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
