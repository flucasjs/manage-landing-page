import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Background from '@/components/Background';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <Background />
      <Header />
      <Hero />
    </div>
  );
}
