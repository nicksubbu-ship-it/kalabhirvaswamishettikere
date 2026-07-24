import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title text-gradient">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
      </div>
      
      <div className="scroll-indicator">
        <p>{t('hero.scroll')}</p>
        <ChevronDown className="bounce" />
      </div>
    </section>
  );
}
