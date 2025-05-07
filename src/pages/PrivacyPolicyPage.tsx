import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicyPage = () => {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

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
        
        <AnimatedSection className="bg-white rounded-xl shadow-md p-8 md:p-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
            <p>Last updated: May 10, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              HalGuard GmbH ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2>2. Important Information and Who We Are</h2>
            <p>
              <strong>Purpose of this privacy policy:</strong> This privacy policy aims to give you information on how HalGuard GmbH collects and processes your personal data through your use of this website, including any data you may provide through this website when you sign up to our newsletter, purchase a product or service, or take part in a survey.
            </p>
            <p>
              <strong>Controller:</strong> HalGuard GmbH is the controller and responsible for your personal data. We have appointed a data protection officer (DPO) who is responsible for overseeing questions in relation to this privacy policy.
            </p>
            <p>
              <strong>Contact details:</strong> If you have any questions about this privacy policy or our privacy practices, please contact our DPO at:
            </p>
            <p>
              HalGuard GmbH<br />
              Attn: Data Protection Officer<br />
              Nurnberger Straße 52<br />
              67227 Frankenthal<br />
              Germany<br />
              Email: privacy@halguard.com
            </p>
            
            <h2>3. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
            
            <h2>4. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2>5. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            
            <h2>6. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2>7. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access to your personal data, request correction of your personal data, request erasure of your personal data, object to processing of your personal data, request restriction of processing your personal data, request transfer of your personal data, and right to withdraw consent.
            </p>
            
            <h2>8. Changes to the Privacy Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact our DPO at privacy@halguard.com.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;