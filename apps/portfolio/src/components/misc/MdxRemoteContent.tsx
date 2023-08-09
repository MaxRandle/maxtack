"use client";

import { MDXRemote } from "next-mdx-remote";
import React from "react";
import "highlight.js/styles/atom-one-dark.css";
import { Embed } from "@/components/misc/Embed";
import { Palette } from "./Palette";

export const MdxRemoteContent: React.FC<
  React.ComponentProps<typeof MDXRemote>
> = ({ ...props }) => {
  // TODO find out why MDXRemote doesn't like my components :(
  return (
    <MDXRemote
      components={{ Embed: Embed as never, Palette: Palette as never }}
      {...props}
    />
  );
};
