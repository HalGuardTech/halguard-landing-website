import { Shield, Sparkles, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-blue-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:translate-y-[-8px]">
            <div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t('about.mission.title')}</h3>
            <p className="text-gray-600 text-center">
              {t('about.mission.desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:translate-y-[-8px]">
            <div className="w-14 h-14 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t('about.technology.title')}</h3>
            <p className="text-gray-600 text-center">
              {t('about.technology.desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md transition-transform duration-300 hover:translate-y-[-8px]">
            <div className="w-14 h-14 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{t('about.focus.title')}</h3>
            <p className="text-gray-600 text-center">
              {t('about.focus.desc')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.protecting')}</h3>
            <p className="text-gray-700 mb-6">
              {t('about.protecting.desc')}
            </p>
            <p className="text-gray-700 mb-6">
              {t('about.suite')}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-700">{t('about.compliance')}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-700">{t('about.security')}</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-gray-700">{t('about.integration')}</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Team working on security solutions" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;