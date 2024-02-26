import React from "react";
import Button from "../Button";

export default function CTA() {
  return (
    <div className="relative w-full">
      <div className="w-full h-full absolute bg-[url('/bg-mobile-pattern.svg')] bg-left bg-no-repeat md:hidden"/>
      <div className="w-full h-full absolute bg-[url('/bg-tablet-pattern.svg')] bg-[4%_10%] bg-no-repeat hidden lg:block opacity-10"/>
      <div className="w-full h-full absolute bg-[url('/bg-tablet-pattern.svg')] bg-[155%_115%] bg-no-repeat hidden lg:block opacity-10"/>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F3603C] py-[5.6875rem] lg:py-[3.875rem] lg:px-[10.3125rem] xl:py-[4.875rem]">
        <h2 className="text-white text-[2.5rem] mb-[1.8125rem] lg:mb-0 leading-[1.25] lg:leading-[1.1] -tracking-[0.025em] lg:-tracking-[0.01775em] max-w-[12ch] lg:max-w-[25ch] lg:text-left text-center font-bold z-[10]">Simplify how your team works today.</h2>
        <Button className="bg-white text-[#F3603C] hover:text-opacity-50 hover:text-[#F3603C] hover:bg-white shadow-[0_15px_15px_-10px_rgba(219,89,67,1)] z-[10]">Get Started</Button>
      </div>
    </div>
  )
}