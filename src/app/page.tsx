import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Carousel from '@/components/Carousel';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute w-[400px] md:w-[600px] lg:w-full h-full right-0 -top-[5rem] -z-[50] bg-[url('/bg-tablet-pattern.svg')] bg-no-repeat bg-[-75%_-1%] md:bg-[length:600px] md:bg-[15vw_-2%] lg:bg-[145%_-2%] 2xl:bg-[120%_-6%] 3xl:bg-[105%_-7.5%] bg-[length:500px] lg:bg-[length:700px] 2xl:bg-[length:750px] 3xl:bg-auto"/>
      <div className="absolute w-[400px] lg:w-full h-full right-0 -top-[5rem] -z-[50] bg-[url('/bg-tablet-pattern.svg')] bg-no-repeat bg-[200px_20%] lg:bg-[-120%_60%] 2xl:bg-[-60%_60%] 3xl:bg-[-45%_70%] bg-[length:400px] lg:bg-[length:700px] 2xl:bg-[length:750px] 3xl:bg-auto"/>
      <Header />
      <Hero />
      <About />
      <Carousel />
      <CTA />
      <Footer />
    </div>
  );
}
