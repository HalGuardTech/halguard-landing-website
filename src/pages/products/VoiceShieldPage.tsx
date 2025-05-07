import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const VoiceShieldPage = () => {
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

  const features = [
    {
      title: "Live Call Monitoring",
      description: "Real-time analysis of voice patterns and anomaly detection during calls"
    },
    {
      title: "Voice Clone Detection",
      description: "Advanced AI algorithms to identify synthetic or cloned voices"
    },
    {
      title: "Fraud Pattern Analysis",
      description: "Historical pattern matching and behavioral analysis"
    },
    {
      title: "Compliance Reporting",
      description: "Automated reporting for GDPR, BaFin, and FINRA requirements"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Protect against fraudulent wire transfers and account takeover attempts"
    },
    {
      title: "Corporate Communications",
      description: "Ensure authenticity of executive communications and internal directives"
    },
    {
      title: "Customer Service",
      description: "Verify customer identity and prevent social engineering attacks"
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
            <Shield className="w-12 h-12 text-blue-800" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">VoiceShield</h1>
          <p className="text-xl text-blue-800 mb-8">Real-time voice clone detection & protection</p>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Advanced AI-powered voice authentication system protecting against synthetic voice fraud through 
            real-time analysis and detection. Specializing in CEO fraud prevention, secure KYC verification, 
            and wire transfer protection.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases</h2>
                <div className="space-y-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="flex items-start">
                      <ArrowRight className="w-6 h-6 text-blue-800 flex-shrink-0 mt-1" />
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{useCase.title}</h3>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to get started?</h2>
              <p className="text-blue-100 mb-8">
                Contact our team to learn more about how VoiceShield can protect your organization from synthetic voice fraud.
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
                src="https://images.pexels.com/photos/3808008/pexels-photo-3808008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Voice Security" 
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

export default VoiceShieldPage;