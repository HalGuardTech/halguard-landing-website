import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Code, Terminal, Database, Lock, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ApiServicesPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    out: { 
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const apis = [
    {
      title: "Voice Analysis API Services",
      description: "Real-time voice authentication and synthetic voice detection",
      icon: <Terminal className="w-6 h-6" />,
      features: [
        "Voice fingerprint analysis",
        "Synthetic voice detection",
        "Emotion and stress analysis",
        "Language and accent verification"
      ]
    },
    {
      title: "Video Verification API Services",
      description: "Deepfake detection and video content verification",
      icon: <Database className="w-6 h-6" />,
      features: [
        "Facial manipulation detection",
        "Motion analysis",
        "Digital artifact detection",
        "Video metadata verification"
      ]
    },
    {
      title: "Text Analysis API Services",
      description: "AI-generated text detection and content verification",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Language pattern analysis",
        "Context verification",
        "Source attribution",
        "Sentiment analysis"
      ]
    }
  ];

  return (
    <motion.div
      className="pt-24 bg-gray-50 min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="container mx-auto px-4 md:px-8 py-10">
        <Link 
          to="/"
          className="flex items-center text-blue-800 font-medium mb-8 hover:text-blue-900 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to home
        </Link>

        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-blue-800" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">API Services</h1>
          <p className="text-xl text-blue-800 mb-8">Integrate HalGuard's protection into your applications</p>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Access HalGuard's powerful synthetic media detection capabilities through our comprehensive 
            API suite. Built for developers, our APIs provide enterprise-grade security with simple integration.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {apis.map((api, index) => (
            <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    {api.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{api.title}</h2>
                  <p className="text-gray-600 mb-6">{api.description}</p>
                  <ul className="space-y-3">
                    {api.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-800 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-20">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">API Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex items-start">
                  <Lock className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
                    <p className="text-gray-600">Enterprise-grade security with authentication and encryption</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast</h3>
                    <p className="text-gray-600">Low-latency responses for real-time applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Terminal className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer-Friendly</h3>
                    <p className="text-gray-600">Comprehensive documentation and SDKs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable</h3>
                    <p className="text-gray-600">Built to handle enterprise-level workloads</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6} className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Get API Access</h2>
              <p className="text-blue-100 mb-8">
                Ready to integrate HalGuard's protection into your application? Contact our team to get API access and documentation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="API Services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default ApiServicesPage;