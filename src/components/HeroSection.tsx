import { ArrowRight, Shield, Video, FileText } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/95 to-gray-900/95"></div>
      </div>
      
      {/* Animated circuit board pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm13.312 0l8.485 8.485-1.414 1.414-7.9-7.9h.828zm-9.9 0l7.9 7.9-1.415 1.415-7.9-7.9h1.414zm6.486 0l4.95 4.95-1.414 1.414-3.536-3.536L26.8 0h3.535zm-14.14 0l7.07 7.07-1.414 1.415-5.657-5.657L19.8 0h2.828zM36.91 0L44.8 7.89l-1.415 1.415-7.9-7.9h1.414zm-12.017 0l7.071 7.071-1.414 1.414L26.8 4.737 29.8 0h-4.9zm6.372 0l4.95 4.95-1.414 1.414-3.536-3.536L29.8 0h1.414zm-4.95 0l7.071 7.071-1.414 1.414L26.8 3.414 28.8 0h-2.828zm4.95 0l4.95 4.95-1.414 1.414-3.536-3.536L34.8 0h-4.9zM13.858 0L0 13.858l1.414 1.414L15.272 0h-1.414zm5.657 0L2.929 16.586 4.343 18l12.728-12.728h-2.828zM3.415 0L0 3.414l1.414 1.414L4.828 0H3.415zM56.585 0L60 3.414 58.586 4.828 55.172 0h1.413zM4.828 0L0 4.828l1.414 1.414L6.242 0h-1.414zm5.657 0L0 10.485l1.414 1.414L11.9 0h-1.414zm45.657 0L60 9.899 58.586 11.313 48.1 0h8.042zm-39.9 0L0 16.142l1.414 1.414L17.557 0h-1.414zM56.585 0L60 3.414 58.586 4.828 55.172 0h1.413zm-5.657 0L60 9.899 58.586 11.313 48.1 0h2.828zm-5.657 0l8.485 8.485-1.414 1.414-7.071-7.071L42.8 0h2.828zm-5.657 0L48.1 6.485 46.686 7.9l-7.9-7.9h1.414zM20.243 0L0 20.243l1.414 1.414L21.657 0h-1.414zM0 0h60v60H0V0z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mt-48 md:mt-20">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t('hero.welcome')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">HalGuard</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HashLink 
                smooth
                to="/#products" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {t('hero.exploreProducts')}
                <ArrowRight className="h-5 w-5" />
              </HashLink>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HashLink 
                smooth
                to="/#contact" 
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
              >
                {t('hero.contactUs')}
              </HashLink>
            </motion.div>
          </motion.div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t('product.voiceShield'),
                description: t('product.voiceShield.full'),
                icon: <Shield className="w-16 h-16 text-blue-400" />,
                delay: 0.6,
                gradient: 'from-blue-400/20 to-blue-600/20'
              },
              {
                title: t('product.deepShield'),
                description: t('product.deepShield.full'),
                icon: <Video className="w-16 h-16 text-purple-400" />,
                delay: 0.7,
                gradient: 'from-purple-400/20 to-purple-600/20'
              },
              {
                title: t('product.textShield'),
                description: t('product.textShield.full'),
                icon: <FileText className="w-16 h-16 text-emerald-400" />,
                delay: 0.8,
                gradient: 'from-emerald-400/20 to-emerald-600/20'
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${product.gradient} backdrop-blur-sm p-10 rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: product.delay, ease: "easeOut" }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  borderColor: "rgba(255, 255, 255, 0.4)"
                }}
              >
                <motion.div 
                  className="mb-8 transform transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {product.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">{product.title}</h3>
                <p className="text-blue-100 leading-relaxed">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;