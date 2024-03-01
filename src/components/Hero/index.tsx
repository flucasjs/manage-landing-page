import React from 'react';
import Illustration from './Illustration';
import Button from '../Button';

export default function Hero() {
  return (
    <div className="mb-24 lg:mb-[8.25rem] flex flex-col items-center px-2 lg:flex-row lg:justify-between lg:px-32 lg:pt-16 xl:max-w-full xl:px-48 2xl:mx-auto 2xl:px-[10rem] 3xl:px-[18rem]">
      <div className="lg:order-1 flex max-w-[500px] flex-1 justify-end 3xl:max-w-full -z-50">
        <Illustration />
      </div>
      <div className="mx-auto flex max-w-[40ch] flex-1 flex-col items-center text-center text-[#242D52] lg:mx-0 lg:items-start lg:text-start xl:max-w-[45ch] 2xl:shrink-0">
        <h1 className="mb-3 text-[2.5rem] font-bold leading-[1.25] -tracking-[0.025em] lg:mb-4 lg:leading-[1.14] lg:-tracking-[0.01em] xl:mb-8 xl:text-[3.5rem]">
          Brings everyone together to build better products.
        </h1>
        <p className="mb-9 max-w-[30ch] text-base font-light leading-[1.1685] tracking-normal opacity-50 lg:mb-10 lg:leading-[1.625] xl:mb-14 xl:max-w-[32ch]">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the
          larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
