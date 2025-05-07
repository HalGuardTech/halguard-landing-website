import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Shield, Video, FileText } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const UseCasesPage = () => {
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

  const useCases = [
    {
      category: "Financial Services",
      icon: <Shield className="w-8 h-8" />,
      cases: [
        {
          title: "Wire Transfer Protection",
          description: "Prevent fraudulent wire transfers initiated through synthetic voice calls.",
          product: "VoiceShield",
          link: "/products/voiceshield"
        },
        {
          title: "Video KYC Verification",
          description: "Ensure authentic video verification during customer onboarding.",
          product: "DeepShield",
          link: "/products/deepshield"
        }
      ]
    },
    {
      category: "Enterprise Security",
      icon: <Video className="w-8 h-8" />,
      cases: [
        {
          title: "Executive Communication Protection",
          description: "Verify authenticity of executive video communications.",
          product: "DeepShield",
          link: "/products/deepshield"
        },
        {
          title: "Email Security",
          description: "Detect and prevent AI-generated phishing attempts.",
          product: "TextShield",
          link: "/products/textshield"
        }
      ]
    },
    {
      category: "Government & Defense",
      icon: <FileText className="w-8 h-8" />,
      cases: [
        {
          title: "Intelligence Verification",
          description: "Authenticate intelligence communications and prevent disinformation.",
          product: "TextShield",
          link: "/products/textshield"
        },
        {
          title: "Secure Communications",
          description: "Ensure authentic voice and video communications.",
          product: "VoiceShield & DeepShield",
          link: "/products/voiceshield"
        }
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Use Cases</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover how organizations across different industries use HalGuard to protect against synthetic media threats.
          </p>
        </AnimatedSection>

        <div className="space-y-16">
          {useCases.map((category, index) => (
            <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="text-blue-800">{category.icon}</div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.cases.map((useCase, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                        <p className="text-gray-600 mb-4">{useCase.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-800 font-medium">{useCase.product}</span>
                          <Link
                            to={useCase.link}
                            className="text-blue-800 hover:text-blue-900 transition-colors duration-200"
                          >
                            Learn more →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default UseCasesPage;