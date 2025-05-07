import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const productLinks = [
    { name: 'VoiceShield', path: '/products/voiceshield' },
    { name: 'DeepShield', path: '/products/deepshield' },
    { name: 'TextShield', path: '/products/textshield' },
    { name: 'API Services', path: '/products/api-services' }
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'FAQ', path: '/faq' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Imprint', path: '/imprint' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, path: 'https://facebook.com' },
    { icon: <Twitter className="w-5 h-5" />, path: 'https://twitter.com' },
    { icon: <Linkedin className="w-5 h-5" />, path: 'https://linkedin.com' },
    { icon: <Instagram className="w-5 h-5" />, path: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-2xl text-white">HalGuard</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              AI-native security platform defending organizations against synthetic media attacks including voice cloning, deepfake videos, and generative phishing content.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={`Follow us on ${link.path.split('.com')[0].split('https://')[1]}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-4">
              {productLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {resourceLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} HalGuard GmbH. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors duration-200">Datenschutz</Link>
              <Link to="/imprint" className="hover:text-white transition-colors duration-200">Impressum</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors duration-200">AGB</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors duration-200">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;