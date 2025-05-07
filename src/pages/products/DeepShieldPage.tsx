import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Video, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const DeepShieldPage = () => {
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
      title: "Advanced Facial Analysis",
      description: "Deep learning algorithms for detecting facial manipulation and inconsistencies"
    },
    {
      title: "Motion Pattern Detection",
      description: "Analysis of natural vs. synthetic movement patterns and micro-expressions"
    },
    {
      title: "Artifact Recognition",
      description: "Identification of digital artifacts common in synthetic video content"
    },
    {
      title: "Forensic Analysis Tools",
      description: "Comprehensive tools for detailed analysis and verification of video content"
    }
  ];

  const useCases = [
    {
      title: "Corporate Security",
      description: "Protect against deepfake-based corporate espionage and fraud attempts"
    },
    {
      title: "Media Verification",
      description: "Verify authenticity of video content for news and media organizations"
    },
    {
      title: "Identity Verification",
      description: "Ensure genuine video presence for remote identity verification"
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
            <Video className="w-12 h-12 text-teal-700" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">DeepShield</h1>
          <p className="text-xl text-teal-700 mb-8">Real-time deepfake video detection & protection</p>
          <div className="w-20 h-1 bg-teal-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprehensive deepfake detection platform providing real-time video analysis and protection 
            across multiple use cases. Features advanced facial analysis, motion pattern detection, and 
            sophisticated artifact recognition for synthetic content identification.
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
                      <CheckCircle className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
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
                      <ArrowRight className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
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

        <AnimatedSection delay={0.4} className="bg-gradient-to-r from-teal-700 to-teal-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to get started?</h2>
              <p className="text-teal-100 mb-8">
                Contact our team to learn more about how DeepShield can protect your organization from deepfake video threats.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-teal-700 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors duration-200"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Video Security" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-900 opacity-20"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default DeepShieldPage;