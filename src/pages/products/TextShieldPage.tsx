import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const TextShieldPage = () => {
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
      title: "Language Pattern Analysis",
      description: "Advanced algorithms for detecting AI-generated text patterns"
    },
    {
      title: "Context-aware Detection",
      description: "Analysis of content context and consistency with known patterns"
    },
    {
      title: "Real-time Email Monitoring",
      description: "Continuous monitoring of incoming and outgoing email communications"
    },
    {
      title: "Phishing Attack Prevention",
      description: "Proactive identification and blocking of sophisticated phishing attempts"
    }
  ];

  const useCases = [
    {
      title: "Email Security",
      description: "Protect against sophisticated phishing and social engineering attacks"
    },
    {
      title: "Document Verification",
      description: "Ensure authenticity of important documents and communications"
    },
    {
      title: "Chat Protection",
      description: "Secure chat channels against synthetic text-based threats"
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
            <FileText className="w-12 h-12 text-purple-700" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">TextShield</h1>
          <p className="text-xl text-purple-700 mb-8">AI-generated text detection & phishing prevention</p>
          <div className="w-20 h-1 bg-purple-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Enterprise-grade AI text analysis platform protecting against synthetic content threats across 
            multiple channels. Featuring advanced language pattern analysis, context-aware detection, and 
            real-time monitoring for email security, chat protection, and document verification.
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
                      <CheckCircle className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
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
                      <ArrowRight className="w-6 h-6 text-purple-700 flex-shrink-0 mt-1" />
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

        <AnimatedSection delay={0.4} className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to get started?</h2>
              <p className="text-purple-100 mb-8">
                Contact our team to learn more about how TextShield can protect your organization from synthetic text threats.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-purple-700 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Text Security" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-purple-900 opacity-20"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default TextShieldPage;