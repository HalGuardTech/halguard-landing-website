import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../../components/ContactSection';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <ContactSection />
    </motion.div>
  );
};

export default ContactPage;