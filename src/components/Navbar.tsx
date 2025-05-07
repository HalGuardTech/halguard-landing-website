import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `transition-colors duration-200 ${
    isScrolled || !isHomePage ? 'text-gray-800 hover:text-blue-800' : 'text-white hover:text-blue-100'
  }`;

  const navLinks = [
    { name: t('nav.about'), path: isHomePage ? '/#about' : '/about', isHashLink: isHomePage },
    { name: t('nav.products'), path: isHomePage ? '/#products' : '/products', isHashLink: isHomePage },
    { name: t('nav.features'), path: isHomePage ? '/#features' : '/features', isHashLink: isHomePage },
    { name: t('nav.blog'), path: '/blog', isHashLink: false },
    { name: t('nav.contact'), path: isHomePage ? '/#contact' : '/contact', isHashLink: isHomePage },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Shield className={`h-8 w-8 ${isScrolled || !isHomePage ? 'text-blue-800' : 'text-white'} transition-colors duration-300`} />
            </motion.div>
            <motion.span 
              className={`font-bold text-xl ${isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'} transition-colors duration-300`}
              whileHover={{ 
                color: isScrolled || !isHomePage ? "#1E40AF" : "#E0F2FE",
                transition: { duration: 0.2 }
              }}
            >
              HalGuard
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isHashLink ? (
                <HashLink 
                  key={link.name}
                  smooth 
                  to={link.path} 
                  className={`${linkClasses} font-medium`}
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`${linkClasses} font-medium`}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md transition-colors duration-200 shadow-md"
              >
                {t('nav.getStarted')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Nav Toggle */}
          <motion.button 
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'} />
            )}
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white mt-4 rounded-lg shadow-xl py-4 px-2 absolute left-4 right-4"
            >
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  link.isHashLink ? (
                    <HashLink
                      key={link.name}
                      smooth
                      to={link.path}
                      className="text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </HashLink>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                <div className="px-4 py-2">
                  <LanguageSwitcher />
                </div>
                <Link
                  to="/contact"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md text-center transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.getStarted')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;