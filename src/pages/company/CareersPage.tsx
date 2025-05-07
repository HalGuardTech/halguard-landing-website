import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const CareersPage = () => {
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

  const openings = [
    {
      id: 'cbo',
      title: 'Chief Business Officer',
      department: 'Executive',
      location: 'Frankenthal, Germany',
      type: 'Full-time'
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Attractive salary package with equity options"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      title: "Professional Development",
      description: "Continuous learning and career growth opportunities"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Careers at HalGuard</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join our mission to protect organizations from synthetic media threats. We're looking for 
            passionate individuals who want to make a difference in cybersecurity.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {openings.map((job, index) => (
              <Link 
                key={index}
                to={`/careers/${job.id}`}
                className="block p-6 hover:bg-gray-50 transition-colors duration-200 border-b last:border-b-0 border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-blue-800" />
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Don't see the right role?</h2>
              <p className="text-blue-100 mb-8">
                We're always interested in meeting talented individuals. Send us your resume and let's start a conversation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Careers at HalGuard"
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

export default CareersPage;