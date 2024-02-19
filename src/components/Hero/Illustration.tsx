import React from 'react';
import Image from 'next/image';
import intro from '@/assets/svg/illustration-intro.svg';

export default function Illustration() {
  return <Image src={intro} alt="" priority />;
}
