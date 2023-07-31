"use client";

import { AnimatedBrandLogo } from "@/components/brand/AnimatedBrandLogo";
import { motion } from "framer-motion";
import { ROUTE_MAP } from "@/config";
import { fadeAndRiseIn } from "@/utils/animations";
import { ButtonLink, Container, Section } from "ui";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden pb-20">
      <Section>
        <Container className="flex flex-col items-center">
          <AnimatedBrandLogo />
          <motion.div
            className="mt-20"
            variants={fadeAndRiseIn}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 3,
              duration: 1,
              ease: "easeOut",
            }}
          >
            <ButtonLink
              className="drop-shadow-glow-md shadow-lg"
              size="lg"
              intent="primary"
              href={ROUTE_MAP.about.root}
            >
              Enter
            </ButtonLink>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
