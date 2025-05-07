import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfServicePage = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
            <p>Last updated: May 10, 2025</p>
            
            <h2>1. Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the HalGuard website and services ("Services"), so please read them carefully before using the Services.
            </p>
            <p>
              By using our Services, you agree to be bound by these Terms. If you don't agree to these Terms, you may not use the Services.
            </p>
            
            <h2>2. Using Our Services</h2>
            <p>
              You must follow any policies made available to you within the Services. You may use our Services only as permitted by law. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
            </p>
            
            <h2>3. Your HalGuard Account</h2>
            <p>
              You may need a HalGuard account in order to use some of our Services. You are responsible for maintaining the security of your account and password. HalGuard cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
            </p>
            
            <h2>4. Privacy</h2>
            <p>
              HalGuard's Privacy Policy explains how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that HalGuard can use such data in accordance with our privacy policies.
            </p>
            
            <h2>5. Intellectual Property Rights</h2>
            <p>
              The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by HalGuard, its licensors, or other providers of such material and are protected by German and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            
            <h2>6. Prohibited Uses</h2>
            <p>
              You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
            </p>
            <ul>
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To send, knowingly receive, upload, download, use, or re-use any material that does not comply with these Terms.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            </ul>
            
            <h2>7. Changes to the Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Services thereafter.
            </p>
            
            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your access to all or part of the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <h2>9. Limitation of Liability</h2>
            <p>
              In no event will HalGuard, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Services, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms and any dispute or claim arising out of, or related to, them, their subject matter or their formation shall be governed by and construed in accordance with the laws of Germany, without giving effect to any choice or conflict of law provision or rule.
            </p>
            
            <h2>11. Contact Information</h2>
            <p>
              Questions or comments about the Services or these Terms may be directed to our support team at support@halguard.com.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default TermsOfServicePage;