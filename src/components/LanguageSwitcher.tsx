import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1.5 text-sm font-medium rounded-l-md border-r ${
          language === 'en'
            ? 'bg-cyan-800 text-white border-cyan-700'
            : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('de')}
        className={`px-2.5 py-1.5 text-sm font-medium rounded-r-md ${
          language === 'de'
            ? 'bg-cyan-800 text-white'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;