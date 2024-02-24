import React from "react";
import Button from "../Button";
export default function CTA() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#F3603C] py-[5.6875rem] lg:py-[3.875rem] lg:px-[10.3125rem] xl:py-[4.875rem]">
      <h2 className="text-white text-[2.5rem] mb-[1.8125rem] lg:mb-0 leading-[1.25] lg:leading-[1.1] -tracking-[0.025em] lg:-tracking-[0.01775em] max-w-[12ch] lg:max-w-[25ch] lg:text-left text-center font-bold">Simplify how your team works today.</h2>
      <Button className="bg-white text-[#F3603C] hover:text-opacity-50 hover:text-[#F3603C] hover:bg-white shadow-[0_15px_15px_-10px_rgba(219,89,67,1)]">Get Started</Button>
    </div>
  )
}