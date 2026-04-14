import { Suspense, lazy } from 'react';
import { HashRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const Price = lazy(() => import('@/pages/Price'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const Consent = lazy(() => import('@/pages/Consent'));

const APP_TEXT = {
  loadingLabel: 'Загрузка страницы',
};

const appBackground = `${import.meta.env.BASE_URL}background.jpg`;

function App() {
  return (
    <Router>
      <div
        className="relative flex min-h-screen flex-col bg-slate-950 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url("${appBackground}")` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.84),rgba(248,250,252,0.72),rgba(248,250,252,0.84))]" />
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="relative flex-1">
          <Suspense fallback={<div aria-label={APP_TEXT.loadingLabel} className="min-h-[40vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/price" element={<Price />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/privacy" element={<Navigate to="/contacts" replace />} />
              <Route path="/consent" element={<Consent />} />
            </Routes>
          </Suspense>
        </div>
        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
