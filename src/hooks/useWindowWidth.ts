import {useEffect, useState} from 'react';

const debounce = (callback: () => void, delay: number) => {
  let timer: NodeJS.Timeout | number = 0;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
};

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = debounce(() => setWindowWidth(window.innerWidth), 250);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return windowWidth;
}
