'use client';

import React from 'react';
import {motion, useMotionValue, useSpring, type PanInfo} from 'framer-motion';
import Image from 'next/image';
import Button from '../Button';
import useWindowWidth from '@/hooks/useWindowWidth';
import testimonialsData from '@/data/testimonials';

const INITIAL_CARD = 1;
const DRAG_THRESHOLD = 150;
const INITIAL_POSITION =
  Math.trunc(testimonialsData.length / 2) - (testimonialsData.length % 2 === 0 ? 0.5 : 0);

export default function Carousel() {
  const windowWidth = useWindowWidth();
  const [itemOffset, setItemOffset] = React.useState<number>(0);
  const [active, setActive] = React.useState<number>(INITIAL_CARD);
  const cardRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = React.useRef<HTMLUListElement | null>(null);
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const handleResize = React.useCallback(() => {
    if (cardRefs.current[0] === null) return;
    const cardElement = cardRefs.current[0];
    const cardStyles = window.getComputedStyle(cardElement);
    const cardMarginX =
      Number.parseFloat(cardStyles.marginLeft) + Number.parseFloat(cardStyles.marginRight);
    setItemOffset(cardElement.offsetWidth + cardMarginX);
  }, []);

  React.useEffect(() => {
    const initialOffset = INITIAL_POSITION * itemOffset;
    offsetX.set(initialOffset - active * itemOffset);
  }, [active, itemOffset, offsetX]);

  React.useEffect(() => handleResize(), [windowWidth, handleResize]);

  function handleDrag(_: MouseEvent, {offset: {x: dragOffset}}: PanInfo) {
    // Stop sliding animation on drag end.
    animatedX.stop();

    // Current offset of carousel.
    const currentOffset = offsetX.get();

    const isDraggingPrev = dragOffset > 0;
    const isDraggingNext = dragOffset < 0;

    const canScrollPrev = active > 0;
    const canScrollNext = active < testimonialsData.length - 1;

    /*
    Snap back to current item if:
      - Drag offset is less than threshold.
      - Item is at bounds of carousel and user is trying to drag further.
    */
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && isDraggingPrev) ||
      (!canScrollNext && isDraggingNext)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    // Running sum of offset to snap to.
    let totalOffset = 0;

    // Update active index to item being dragged to.
    if (isDraggingPrev) {
      for (let i = active; i >= 0; i--) {
        const item = cardRefs.current[i];
        if (item === null) continue;

        if (dragOffset > totalOffset + itemOffset && i > 1) {
          totalOffset += itemOffset;
          continue;
        }

        setActive(i - 1);
        break;
      }
    } else if (isDraggingNext) {
      for (let i = active; i < cardRefs.current.length; i++) {
        const item = cardRefs.current[i];
        if (item === null) continue;

        if (dragOffset < totalOffset + -itemOffset && i < cardRefs.current.length - 2) {
          totalOffset -= itemOffset;
          continue;
        }

        setActive(i + 1);
        break;
      }
    }
  }

  return (
    <div className="mb-[2.625rem] flex flex-col items-center lg:mb-[11.25rem]">
      <h2 className="mb-16 text-[2rem] font-extrabold leading-[1.40625] -tracking-[0.01885em] text-[#242D52]">
        What they&apos;ve said
      </h2>
      <motion.ul
        className="mb-[1.625rem] flex cursor-grab overflow-hidden"
        ref={containerRef}
        style={{
          x: animatedX,
        }}
        drag="x"
        dragConstraints={{
          left: -INITIAL_POSITION * itemOffset,
          right: INITIAL_POSITION * itemOffset,
        }}
        onDragEnd={handleDrag}
      >
        {testimonialsData.map((item, i) => (
          <li
            key={item.name}
            className={`mx-[0.9375rem] min-w-[341px] flex-col items-center lg:min-w-[540px] ${testimonialsData[active].name !== item.name ? 'flex' : 'flex'}`}
            ref={el => (cardRefs.current[i] = el)}
          >
            <Image src={item.avatar} alt="" width={72} height={72} className="z-10" />
            <div className="-mt-9 flex w-full flex-col items-center gap-y-5 bg-[#FAFAFA] pt-[3.75rem]">
              <span className="select-none text-base font-bold leading-[1.4375] -tracking-[0.018125em]">
                {item.name}
              </span>
              <span className="max-w-[36ch] select-none px-6 pb-[2.625rem] text-center text-[0.875rem] font-normal leading-[1.857] tracking-normal opacity-50 lg:max-w-[47ch]">
                {item.comment}
              </span>
            </div>
          </li>
        ))}
      </motion.ul>
      <div className="mb-12 flex gap-x-[0.3125rem]">
        {testimonialsData.map((item, i) => (
          <button
            key={item.name}
            className={`h-[0.4375rem] w-[0.4375rem] rounded-full border-[1px] border-[#F3603C] ${testimonialsData[active].name === item.name ? 'bg-[#F3603C]' : 'bg-white'}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <Button>Get Started</Button>
    </div>
  );
}
