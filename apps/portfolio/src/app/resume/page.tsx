"use client";

import { twMerge } from "tailwind-merge";

import MDXResume from "@/content/mdx/resume.mdx";
import { ROUTE_MAP } from "@/config";
import { Container, Link, Section } from "ui";

export default function Page() {
  const pageRootClasses = ["min-h-screen overflow-hidden"];

  return (
    <main className={twMerge(pageRootClasses, "print:font-resume")}>
      <Section>
        <Container>
          <Link className="print:hidden" href={ROUTE_MAP.about.root}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              {ROUTE_MAP.about.root}
            </code>
          </Link>
          <MDXResume />
        </Container>
      </Section>
    </main>
  );
}
