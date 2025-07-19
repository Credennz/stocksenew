import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import { MainContent } from './components/layout/MainContent';
import StrategiesPage from './pages/Strategies';
import SolutionsPage from './pages/Solutions';
import PerformancePage from './pages/Performance';
import AboutPage from './pages/About';
import { Footer } from './components/layout/Footer';
import { ModalProvider } from './context/ModalContext';
import { AdminRoutes } from './admin/routes';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || 'home';
    setCurrentPage(path);
  }, [location]);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    navigate(page === 'home' ? '/' : `/${page}`);
  };

  return (
    <ModalProvider>
      <div className="min-h-screen bg-gradient-primary text-white flex flex-col">
        <ScrollToTop />
        <Header onNavigate={handleNavigation} currentPage={currentPage} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </ModalProvider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
}

export default App;