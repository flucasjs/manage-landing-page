import React from 'react';

export default function Button({children}: React.PropsWithChildren) {
  return (
    <button
      type="button"
      className="whitespace-nowrap rounded-[22px] bg-[#F3603C] px-8 py-[0.8125rem] text-[0.8125rem] font-bold leading-[1.4615] tracking-normal text-[#FCF6F5] shadow-[0_15px_15px_-15px_rgba(255,159,142,1)] hover:bg-[#F98F75] hover:text-[#FCF6F5]"
    >
      {children}
    </button>
  );
}
