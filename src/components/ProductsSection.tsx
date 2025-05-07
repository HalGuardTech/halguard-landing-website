import { Link } from 'react-router-dom';
import { Mic, Video, FileText, ArrowUpRight } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      id: 'voiceshield',
      title: 'HalGuard VoiceShield',
      subtitle: 'Real-time voice clone detection & protection',
      icon: <Mic className="w-10 h-10 text-blue-800" />,
      description: 'Advanced AI-powered voice authentication system protecting against synthetic voice fraud through real-time analysis and detection. Specializing in CEO fraud prevention, secure KYC verification, and wire transfer protection.',
      features: [
        'Live call monitoring',
        'Voice clone detection',
        'Fraud pattern analysis',
        'Compliance reporting (GDPR, BaFin, FINRA)',
      ],
      image: '/images/voiceshield.png',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'deepshield',
      title: 'HalGuard DeepShield',
      subtitle: 'Real-time deepfake video detection & protection',
      icon: <Video className="w-10 h-10 text-teal-700" />,
      description: 'Comprehensive deepfake detection platform providing real-time video analysis and protection across multiple use cases. Features advanced facial analysis, motion pattern detection, and sophisticated artifact recognition for synthetic content identification.',
      features: [
        'Advanced facial analysis',
        'Motion pattern detection',
        'Artifact recognition',
        'Forensic analysis tools',
      ],
      image: '/images/deepshield.png',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 'textshield',
      title: 'HalGuard TextShield',
      subtitle: 'AI-generated text detection & phishing prevention',
      icon: <FileText className="w-10 h-10 text-purple-700" />,
      description: 'Enterprise-grade AI text analysis platform protecting against synthetic content threats across multiple channels. Featuring advanced language pattern analysis, context-aware detection, and real-time monitoring for email security, chat protection, and document verification.',
      features: [
        'Language pattern analysis',
        'Context-aware detection',
        'Real-time email monitoring',
        'Phishing attack prevention',
      ],
      image: '/images/textshield.png',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get comprehensive protection against synthetic media attacks with our suite of products.
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 ml-3">{product.title}</h3>
                </div>
                <p className="text-lg font-medium text-blue-800 mb-4">{product.subtitle}</p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-blue-700 to-teal-600 rounded-full flex items-center justify-center mr-2 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 text-blue-800 font-medium hover:text-blue-900 transition-colors duration-200"
                >
                  Learn more about {product.title.split(' ')[1]}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className={`rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative h-80">
                  <div className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-10`}></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started with HalGuard</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Ready to protect your organization from synthetic media attacks? Try our demos by clicking below.
          </p>
          <Link 
            to="/contact"
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2"
          >
            Request a Demo
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;