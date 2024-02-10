"use client";

import { PUBLIC_ASSET_MAP } from "@/config";

import { motion, stagger, useAnimate } from "framer-motion";

import { Container, Figure, Heading, Section } from "ui";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useShouldAnimateLogoAtom } from "@/store/atoms";

export function HeroSection() {
  const CONTENT = {
    hero: {
      heading: "Max Randle",
      body: "Software Engineer",
      media: PUBLIC_ASSET_MAP.media.maxProfilePicture,
    },
  };

  const [shouldAnimate, setShouldAnimate] = useShouldAnimateLogoAtom();

  const [sectionScope, animate] = useAnimate();
  const [svgScope, _1] = useAnimate();
  const [rightPathScope, _2] = useAnimate();
  const [leftPathScope, _3] = useAnimate();
  const [containerScope, _4] = useAnimate();

  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const handleAnimation = async () => {
      if (isAnimating) {
        return;
      }

      const animation = animate([
        [
          [leftPathScope.current, rightPathScope.current],
          { opacity: [0, 1] },
          { duration: 0 },
        ],
        [
          [leftPathScope.current, rightPathScope.current],
          { pathLength: [0, 1] },
          { duration: 2, ease: "linear" },
        ],
        [
          [leftPathScope.current, rightPathScope.current],
          { fillOpacity: [0, 1] },
          { at: "<", duration: 2, ease: "circIn" },
        ],
        [
          leftPathScope.current,
          { x: [-24, 0] },
          { at: "<", duration: 2, ease: [0.72, 0.01, 0.98, 0.79] },
        ],
        [
          rightPathScope.current,
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
          [leftPathScope.current, rightPathScope.current],
          { fillOpacity: 0.075 },
          { at: "-1", duration: 2.5, ease: "easeOut" },
        ],
        [
          leftPathScope.current,
          { x: -72 },
          { at: "-1.5", duration: 1.5, ease: [0.64, 0, 0.36, 1] },
        ],
        [
          rightPathScope.current,
          { x: 72 },
          { at: "<", duration: 1.5, ease: [0.64, 0, 0.36, 1] },
        ],
        [
          "#hero-container > *",
          { opacity: [0, 1], y: [8, 0] },
          {
            duration: 0.6,
            ease: "easeOut",
            delay: stagger(0.15),
          },
        ],
      ]);
      if (!shouldAnimate) {
        animation.complete();
      }

      setIsAnimating(true);
      await animation;
      setIsAnimating(false);
      setShouldAnimate?.(false);
    };

    handleAnimation();
  }, [
    animate,
    containerScope,
    isAnimating,
    leftPathScope,
    rightPathScope,
    setShouldAnimate,
    shouldAnimate,
    svgScope,
  ]);

  return (
    <Section ref={sectionScope} className="relative" spacing={"lg"}>
      <Container
        id="hero-container"
        ref={containerScope}
        className={twMerge([
          "flex flex-col items-center gap-4 text-center",
          "sm:grid sm:grid-cols-[auto_auto] sm:gap-6 sm:gap-y-1 sm:text-left",
        ])}
      >
        <Figure
          id="hero-figure"
          className="row-span-2 aspect-square h-48 w-48 rounded-full opacity-0 sm:mx-0 sm:justify-self-end"
          src={CONTENT.hero.media}
          alt="me"
          width={160}
          height={160}
          priority
        />
        <Heading id="hero-heading" className="opacity-0 sm:self-end" level="h1">
          {CONTENT.hero.heading}
        </Heading>
        <Heading
          id="hero-subheading"
          className="opacity-0 sm:self-start"
          level="h3"
          palette="weaker"
        >
          {CONTENT.hero.body}
        </Heading>
      </Container>

      <div className="absolute w-full inset-center">
        <motion.svg
          ref={svgScope}
          className={"h-60 w-full sm:h-80"}
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
        >
          <motion.path
            ref={leftPathScope}
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
            ref={rightPathScope}
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
      </div>
    </Section>
  );
}
