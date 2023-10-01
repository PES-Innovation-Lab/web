import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const ref = useRef(null);
  let [screenDim, setScreenDim] = useState({
    x: 0,
    y: 0,
  });

  const moveFGTextPercX = useMotionValue(0);
  const moveBGTextPercX = useMotionValue(0);

  const transformedFGX = useSpring(moveFGTextPercX, {
    stiffness: 100,
    damping: 50,
  });
  const transformedBGX = useSpring(moveBGTextPercX, {
    stiffness: 100,
    damping: 40,
  });

  const fgTransform = useMotionTemplate`translate(${transformedFGX}%, 0)`;
  const bgTransform = useMotionTemplate`translate(${transformedBGX}%, 0)`;

  const handleMouseMove = (e) => {
    // e.pageX
    const moveX = (e.pageX / screenDim.x) * 66;
    console.log(moveX);
    moveFGTextPercX.set(-moveX);
    moveBGTextPercX.set(-moveX);
  };

  useEffect(() => {
    if (ref.current != null) {
      // console.log(window.innerWidth, window.innerHeight);
      setScreenDim({
        x: window.innerWidth,
        y: window.innerHeight,
      });
    }
  }, [ref.current]);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-2 justify-center items-center h-full p-4">
        {/* LOGO */}
        <div className="relative h-48 w-48 sm:h-60 sm:w-60 left-2">
          <Image
            src="/images/mlab/mlab_logo.png"
            layout="fill"
            objectFit="cover"
            className="border"
          />
        </div>
        {/* TITLE */}
        <h1
          className="font-bold text-lab-green text-center w-full overflow-hidden relative -rotate-6 pt-8"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          ref={ref}
        >
          <motion.div
            className="absolute top-4 md:-top-16 left-0 flex gap-32 text-step-11 text-lab-sec z-0"
            style={{
              transform: bgTransform,
            }}
          >
            <p className="flex-shrink-0">Research.</p>
            <p className="flex-shrink-0">Knowledge.</p>
            <p className="flex-shrink-0">Innovation.</p>
          </motion.div>
          <motion.div
            className="text-step-9 flex relative z-10 w-[300vw]"
            style={{
              transform: fgTransform,
            }}
          >
            <p className="w-[100vw] flex-shrink-0">PES Innovation Lab</p>
            <p className="w-[100vw] flex-shrink-0">PES Innovation Lab</p>
            <p className="w-[100vw] flex-shrink-0">PES Innovation Lab</p>
          </motion.div>
        </h1>
        {/* DESC */}
        <p className="text-step-2 max-w-3xl text-center mt-8 font-martian-mono pt-16">
          We are a student community dedicated to cultivating the spirit of
          research and innovation in budding engineers.
        </p>
      </div>
    </div>
  );
}
