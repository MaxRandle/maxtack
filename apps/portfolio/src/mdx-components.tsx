import { MDXComponents } from "mdx/types";
import {
  ExternalLink,
  ExternalLinkProps,
  Heading,
  HeadingProps,
  Typography,
  TypographyProps,
} from "ui";

// This file is required to use MDX in `app` directory.
// see: https://github.com/vercel/next.js/tree/canary/examples/app-dir-mdx

export const MDXComponentsMap: MDXComponents = {
  h1: (props: HeadingProps) => (
    <Heading
      className="mt-24 text-center print:mt-0 print:text-2xl"
      level={"h1"}
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <Heading
      className="mt-16 print:mt-6 print:text-lg"
      level={"h2"}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading
      className="mt-8 print:mt-2 print:text-sm"
      level={"h3"}
      {...props}
    />
  ),
  p: (props: TypographyProps) => (
    <Typography
      className="mt-4 print:mt-2 print:text-xs"
      level={"body"}
      {...props}
    />
  ),
  a: (props: ExternalLinkProps) => (
    <ExternalLink
      className="mt-4 print:mt-2 print:text-xs print:font-normal print:text-base-900 print:dark:text-base-500"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-4  list-decimal space-y-2 print:mt-2 print:text-xs"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-4 list-disc space-y-2 print:mt-2 print:space-y-1 print:text-xs"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="ml-12 space-x-2 text-base-900 custom-dark:text-base-400 marker:text-base-900  marker:dark:text-base-500 print:ml-6"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-4 print:mt-2 print:text-xs bg-base-300 custom-dark:bg-base-1100 rounded-sm"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-base-300 custom-dark:bg-base-1000 rounded-md px-2"
      {...props}
    />
  ),
  hr: (props) => <hr className="mt-4 print:mt-2" {...props} />,
  table: (props) => (
    <table
      className="mt-4 w-full text-base-900 custom-dark:text-base-400 print:mt-2 print:text-xs"
      {...props}
    />
  ),
  thead: (props) => <thead className="text-lg" {...props} />,
  tbody: (props) => <tbody {...props} />,
  tr: (props) => <tr className="" {...props} />,
  th: (props) => <th className="pl-4 first:pl-0 print:text-xs" {...props} />,
  td: (props) => <td className="pl-4 first:pl-0" {...props} />,
};

// https://nextjs.org/docs/app/building-your-application/configuring/mdx#getting-started
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDXComponentsMap,
    ...components,
  };
}
