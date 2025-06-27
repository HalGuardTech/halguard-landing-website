import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const TeamPage = () => {
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

  const executives = [
    {
      name: "Shramish Kafle",
      role: "Founder & CEO",
      image: "images/profile-shramish.jpeg",
      bio: `With over five years of hands-on experience in software development, artificial intelligence, machine learning, and DevOps, Shramish leads the company with a deep technical foundation and a forward-thinking vision. His work spans building scalable software systems to pioneering AI-driven solutions. Passionate about AI security, Shramish is dedicated to developing cutting-edge products that ensure safe and responsible AI deployment. He is also actively engaged in research on modern generative algorithms, continuously exploring the future of intelligent systems. As CEO, he combines strategic leadership with technical excellence to drive innovation and build a company rooted in curiosity, impact, and trust.`,
      linkedin: "www.linkedin.com/in/shramish-kafle-759571198"
    },
  ];

  const team = [
    {
      name: "Thomas Wagner",
      role: "Chief Security Analyst",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Anna Müller",
      role: "Legal Compliance Officer",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Michael Weber",
      role: "Head of Product",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      name: "Julia Fischer",
      role: "Senior AI Researcher",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h1>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the experts behind HalGuard's innovative security solutions. Our team combines deep expertise 
            in AI, cybersecurity, and synthetic media detection.
          </p>
        </AnimatedSection>
      {/* 
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{executive.name}</h3>
                    <p className="text-blue-800 font-medium mb-4">{executive.role}</p>
                    <p className="text-gray-600 mb-6">{executive.bio}</p>
                    <div className="flex space-x-4">
                      <a 
                        href={executive.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={`mailto:${executive.name.toLowerCase().replace(' ', '.')}@halguard.com`}
                        className="text-gray-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Team Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={0.2 + (index * 0.1)}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-800">{member.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
*/}
        <AnimatedSection delay={0.6} className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Join Our Team</h2>
              <p className="text-blue-100 mb-8">
                We're always looking for talented individuals who are passionate about security and innovation.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                View Open Positions
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Join our team"
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

export default TeamPage;
