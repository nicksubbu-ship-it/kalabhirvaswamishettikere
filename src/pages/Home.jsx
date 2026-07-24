import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import GallerySection from '../components/GallerySection';
import UploadSection from '../components/UploadSection';
import TimingsSection from '../components/TimingsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <GallerySection />
      <UploadSection />
      <TimingsSection />
    </>
  );
}
