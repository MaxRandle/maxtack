"use client";

import { motion, useAnimate } from "framer-motion";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

type AnimatedBrandLogoProps = React.ComponentPropsWithoutRef<
  typeof motion.svg
> & {
  className?: string;
  shouldAnimate?: boolean;
  setShouldAnimate?: (arg: boolean) => void;
};

export const AnimatedBrandLogo: React.FC<AnimatedBrandLogoProps> = ({
  shouldAnimate = true,
  setShouldAnimate,
  className,
  ...props
}) => {
  const [svgScope, animate] = useAnimate();
  const [rightPathScore, _1] = useAnimate();
  const [leftPathScore, _2] = useAnimate();

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    animate([
      [
        [leftPathScore.current, rightPathScore.current],
        { opacity: [0, 1] },
        { duration: 0 },
      ],
      [
        [leftPathScore.current, rightPathScore.current],
        { pathLength: [0, 1] },
        { duration: 2, ease: "linear" },
      ],
      [
        [leftPathScore.current, rightPathScore.current],
        { fillOpacity: [0, 1] },
        { at: "<", duration: 2, ease: "circIn" },
      ],
      [
        leftPathScore.current,
        { x: [-24, 0] },
        { at: "<", duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
      ],
      [
        rightPathScore.current,
        { x: [20, 0] },
        { at: "<", duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
      ],
      [
        [svgScope.current],
        {
          y: [8, 0],
        },
        { duration: 2, ease: "easeOut" },
      ],
      [
        [leftPathScore.current, rightPathScore.current],
        { fillOpacity: 0 },
        { at: "-1", duration: 2.5, ease: "easeOut" },
      ],
      [
        leftPathScore.current,
        { x: -72 },
        { at: "-1.5", duration: 1.5, ease: [0.64, 0, 0.36, 1] },
      ],
      [
        rightPathScore.current,
        { x: 72 },
        { at: "<", duration: 1.5, ease: [0.64, 0, 0.36, 1] },
      ],
    ]);

    setShouldAnimate?.(false);
  }, [
    animate,
    leftPathScore,
    rightPathScore,
    setShouldAnimate,
    shouldAnimate,
    svgScope,
  ]);

  return (
    <motion.svg
      ref={svgScope}
      className={twMerge("w-full", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      // TODO - figure out why this can't be moved into the `animate()` sequence array.
      variants={{
        dropStart: {
          filter:
            "drop-shadow(0px 0px 96px rgba(255, 255, 255, 0.7)) drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
        },
        dropEnd: {
          filter:
            "drop-shadow(0px 0px 48px rgba(255, 255, 255, 0.4)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25)) drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))",
        },
      }}
      initial="dropStart"
      animate="dropEnd"
      transition={{
        default: { delay: 2, duration: 2, ease: "easeOut" },
      }}
      {...props}
    >
      <motion.path
        ref={leftPathScore}
        // prevents the path from being visible on load
        variants={{
          initial: {
            opacity: 0,
            pathLength: 0,
          },
        }}
        initial="initial"
        className="fill-primary-700 stroke-primary-700 stroke-[1.5] dark:fill-primary-700 dark:stroke-primary-700"
        d="m0 0 20 32L0 64h20l12-20h-8l16-24h-8L20 0H0Z"
      />
      <motion.path
        ref={rightPathScore}
        // prevents the path from being visible on load
        variants={{
          initial: {
            opacity: 0,
            pathLength: 0,
          },
        }}
        initial="initial"
        className="fill-primary-1300 stroke-primary-1300 stroke-[1.5] dark:fill-base-300 dark:stroke-base-300"
        d="M64 64 44 32 64 0H44L32 20h8L24 44h8l12 20h20Z"
      />
    </motion.svg>
  );
};
