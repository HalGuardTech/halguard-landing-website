import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import BlogSection from '../components/BlogSection';
import FeatureSection from '../components/FeatureSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
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
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeatureSection />
      <BlogSection />
      <ContactSection />
    </motion.div>
  );
};

export default HomePage;