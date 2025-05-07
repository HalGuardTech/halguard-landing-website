import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const FaqPage = () => {
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

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is synthetic media?",
          a: "Synthetic media refers to artificially generated or manipulated content, including deepfake videos, AI-generated text, and cloned voices. These can be created using artificial intelligence and machine learning technologies."
        },
        {
          q: "How does HalGuard protect against synthetic media threats?",
          a: "HalGuard uses advanced AI algorithms to detect and prevent synthetic media attacks across multiple channels. Our solutions include voice authentication, deepfake video detection, and AI-generated text identification."
        }
      ]
    },
    {
      category: "Products & Services",
      questions: [
        {
          q: "Which HalGuard product should I choose?",
          a: "The choice depends on your specific security needs. VoiceShield protects against voice fraud, DeepShield handles video verification, and TextShield prevents AI-generated text attacks. Contact us for a personalized recommendation."
        },
        {
          q: "Can HalGuard integrate with existing security systems?",
          a: "Yes, HalGuard products are designed to integrate seamlessly with existing security infrastructure through our comprehensive API services."
        }
      ]
    },
    {
      category: "Technical",
      questions: [
        {
          q: "What is the accuracy rate of HalGuard's detection?",
          a: "Our detection systems achieve industry-leading accuracy rates through continuous learning and adaptation. Specific rates vary by product and use case."
        },
        {
          q: "How quickly can HalGuard detect synthetic media?",
          a: "HalGuard provides real-time detection capabilities, with response times typically under 100ms for most applications."
        }
      ]
    },
    {
      category: "Security & Compliance",
      questions: [
        {
          q: "Is HalGuard GDPR compliant?",
          a: "Yes, HalGuard is fully compliant with GDPR and other major regulatory frameworks, including BaFin and FINRA requirements."
        },
        {
          q: "How does HalGuard handle data privacy?",
          a: "We maintain strict data privacy standards, with all analysis performed in secure environments and data handled according to relevant privacy regulations."
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about HalGuard's synthetic media protection solutions.
          </p>
        </AnimatedSection>

        <div className="space-y-12">
          {faqs.map((section, index) => (
            <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <div className="space-y-6">
                    {section.questions.map((faq, i) => (
                      <div key={i} className="border-b border-gray-200 last:border-b-0 pb-6 last:pb-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6} className="mt-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for more information about our products and services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-800 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default FaqPage;