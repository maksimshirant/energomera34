import { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactModal = lazy(() => import('@/components/ContactModal'));
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const Price = lazy(() => import('@/pages/Price'));
const Contacts = lazy(() => import('@/pages/Contacts'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Consent = lazy(() => import('@/pages/Consent'));

const APP_TEXT = {
  loadingLabel: 'Загрузка страницы',
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Header onOpenModal={openModal} />
        <div className="flex-1">
          <Suspense fallback={<div aria-label={APP_TEXT.loadingLabel} className="min-h-[40vh]" />}>
            <Routes>
              <Route path="/" element={<Home onOpenModal={openModal} />} />
              <Route path="/about" element={<About onOpenModal={openModal} />} />
              <Route path="/services" element={<Services onOpenModal={openModal} />} />
              <Route path="/services/:slug" element={<ServiceDetail onOpenModal={openModal} />} />
              <Route path="/price" element={<Price onOpenModal={openModal} />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/consent" element={<Consent />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
        {isModalOpen ? (
          <Suspense fallback={null}>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
          </Suspense>
        ) : null}
      </div>
    </Router>
  );
}

export default App;
