import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Background from '@/components/Background';
import About from '@/components/About';
import Carousel from '@/components/Carousel';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <Background />
      <Header />
      <Hero />
      <About />
      <Carousel />
      <CTA />
      <Footer />
    </div>
  );
}
