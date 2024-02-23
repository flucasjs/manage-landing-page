import React from 'react';
import aboutData from '@/data/about';

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:px-32 xl:px-48 2xl:px-[10rem] 3xl:px-[18rem]">
      <div className="mx-auto lg:mx-0 mb-[3.375rem] flex max-w-[45ch] flex-col items-center px-4">
        <h2 className="mb-[0.8125rem] lg:mb-6 xl:mb-7 text-center lg:text-left text-[1.875rem] lg:text-[2.5rem] font-bold leading-[1.5] lg:leading-[1.1] lg:-tracking-[0.01775em] -tracking-[0.022em] text-[#242D52]">
          What’s different about Manage?
        </h2>
        <p className="font-normal leading-[2] tracking-normal text-[#242D52] text-[0.875rem] lg:text-base lg:leading-[1.625] opacity-50">
          Manage provides all the functionality your team needs, without the complexity. Our
          software is tailor-made for modern digital product teams.
        </p>
      </div>
      <div className="mb-16 grid grid-cols-[1fr_minmax(0,_45ch)_1fr] gap-y-12 gap-x-4">
        {aboutData.map((item, i) => (
            <div
              key={item.title}
              className="relative col-span-2 col-start-2 grid grid-cols-subgrid gap-y-3 lg:gap-y-4 md:items-start"
            >
                <div className="absolute -z-[50] col-start-1 col-span-2 row-start-1 row-span-1 h-full w-full rounded-l-full bg-[#FFF0EC] lg:hidden" />
                <h3 className="mr-0 flex w-full gap-x-3 rounded-l-full text-base font-bold -tracking-[0.01825] lg:leading-[1.4375] whitespace-nowrap">
                  <span className="rounded-full bg-[#F3603C] px-6 py-2 text-white 2xl:absolute 2xl:right-full 2xl:mr-7">0{i + 1}</span>
                  <span className="py-2 text-[#242D52] ">{item.title}</span>
                </h3>
                <p className="col-start-1 max-w-[45ch] text-left text-[0.875rem] lg:text-base lg:leading-[1.625] font-normal leading-[2] tracking-normal text-[#242D52] opacity-50 md:mx-0">
                  {item.body}
                </p>
              </div>
        ))}
      </div>
    </div>
  );
}
