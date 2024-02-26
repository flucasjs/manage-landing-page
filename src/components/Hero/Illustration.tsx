import React from 'react';
import Image from 'next/image';
import intro from '@/assets/illustrations/illustration-intro.svg';

export default function Illustration() {
  return <Image src={intro} alt="" priority />;
}
