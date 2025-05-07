import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const ImprintPage = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Imprint (Impressum)</h1>
          
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
            <h2>Information according to § 5 TMG</h2>
            
            <p>
              HalGuard GmbH<br />
              Nurnberger Straße 52<br />
              67227 Frankenthal<br />
              Germany
            </p>
            
            <h3>Commercial Register</h3>
            <p>
              Registered in the Commercial Register.<br />
              Registration court: Amtsgericht Ludwigshafen am Rhein<br />
              Registration number: HRB 12345
            </p>
            
            <h3>VAT ID</h3>
            <p>
              Sales tax identification number according to § 27 a of the Sales Tax Law:<br />
              DE 123456789
            </p>
            
            <h2>Contact</h2>
            <p>
              Phone: +49 123 4567890<br />
              Email: info@halguard.com
            </p>
            
            <h2>Management</h2>
            <p>
              Dr. Alexander Schmidt (CEO)<br />
              Sophia Wagner (CTO)
            </p>
            
            <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
            <p>
              Dr. Alexander Schmidt<br />
              HalGuard GmbH<br />
              Nurnberger Straße 52<br />
              67227 Frankenthal<br />
              Germany
            </p>
            
            <h2>EU Dispute Resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
            </p>
            <p>
              We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
            
            <h2>Liability for Contents</h2>
            <p>
              As service providers, we are liable for own contents of these websites according to § 7, paragraph 1 German Telemedia Act (TMG). However, according to §§ 8 to 10 German Telemedia Act (TMG), we are not obligated to monitor external information transferred or stored or investigate circumstances pointing to illegal activity.
            </p>
            <p>
              Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this respect is only possible from the moment of knowledge of a specific infringement. Upon notification of such infringements, we will remove the content immediately.
            </p>
            
            <h2>Liability for Links</h2>
            <p>
              Our offer includes links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
            </p>
            <p>
              The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Upon notification of violations, we will remove such links immediately.
            </p>
            
            <h2>Copyright</h2>
            <p>
              The contents and works on these websites created by the site operators are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of these websites are only permitted for private, non-commercial use.
            </p>
            <p>
              Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon notification of violations, we will remove such content immediately.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default ImprintPage;