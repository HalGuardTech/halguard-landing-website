import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ImprintPage from './pages/ImprintPage';
import VoiceShieldPage from './pages/products/VoiceShieldPage';
import DeepShieldPage from './pages/products/DeepShieldPage';
import TextShieldPage from './pages/products/TextShieldPage';
import ApiServicesPage from './pages/products/ApiServicesPage';
import AboutUsPage from './pages/company/AboutUsPage';
import TeamPage from './pages/company/TeamPage';
import CareersPage from './pages/company/CareersPage';
import JobPostingPage from './pages/company/JobPostingPage';
import ContactPage from './pages/company/ContactPage';
import UseCasesPage from './pages/resources/UseCasesPage';
import FaqPage from './pages/resources/FaqPage';
import CookiePolicyPage from './pages/legal/CookiePolicyPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:blogId" element={<BlogPage />} />
                
                {/* Legal Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/imprint" element={<ImprintPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                
                {/* Product Pages */}
                <Route path="/products/voiceshield" element={<VoiceShieldPage />} />
                <Route path="/products/deepshield" element={<DeepShieldPage />} />
                <Route path="/products/textshield" element={<TextShieldPage />} />
                <Route path="/products/api-services" element={<ApiServicesPage />} />
                
                {/* Company Pages */}
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/careers/:jobId" element={<JobPostingPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Resource Pages */}
                <Route path="/use-cases" element={<UseCasesPage />} />
                <Route path="/faq" element={<FaqPage />} />
                
                {/* Redirect all other paths to home */}
                <Route path="*" element={<HomePage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;