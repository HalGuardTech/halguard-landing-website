import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const CookiePolicyPage = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
            <p className="text-sm text-gray-500">Last updated: May 10, 2025</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how HalGuard GmbH ("we", "us", or "our") uses cookies and similar 
              technologies to recognize you when you visit our website. It explains what these technologies 
              are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. What are cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit 
              a website. Cookies are widely used by website owners in order to make their websites work, or 
              to work more efficiently, as well as to provide reporting information.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Why do we use cookies?</h2>
            <p>We use cookies for several reasons:</p>
            <ul className="list-disc pl-6 mt-4 mb-6">
              <li>To enable certain functions of the website</li>
              <li>To provide analytics</li>
              <li>To store your preferences</li>
              <li>To enable ad delivery and behavioral targeting</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Types of cookies we use</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. 
              They are usually only set in response to actions made by you which amount to a request for services, 
              such as setting your privacy preferences, logging in, or filling in forms.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Performance Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the 
              performance of our site. They help us to know which pages are the most and least popular and 
              see how visitors move around the site.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may 
              be set by us or by third party providers whose services we have added to our pages.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Targeting Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those 
              companies to build a profile of your interests and show you relevant adverts on other sites.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. How to control cookies</h2>
            <p>
              You can set or amend your web browser controls to accept or refuse cookies. If you choose to 
              reject cookies, you may still use our website though your access to some functionality and 
              areas of our website may be restricted.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Specific cookie types</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full mt-4 mb-6">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">_ga</td>
                    <td className="px-6 py-4">Google Analytics tracking</td>
                    <td className="px-6 py-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">_session</td>
                    <td className="px-6 py-4">Session management</td>
                    <td className="px-6 py-4">Session</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">preferences</td>
                    <td className="px-6 py-4">User preferences</td>
                    <td className="px-6 py-4">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Updates to this policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to 
              the cookies we use or for other operational, legal, or regulatory reasons. Please therefore 
              revisit this Cookie Policy regularly to stay informed about our use of cookies and related 
              technologies.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at:
            </p>
            <p className="mt-4">
              HalGuard GmbH<br />
              Nurnberger Straße 52<br />
              67227 Frankenthal<br />
              Germany<br />
              Email: privacy@halguard.com
            </p>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default CookiePolicyPage;