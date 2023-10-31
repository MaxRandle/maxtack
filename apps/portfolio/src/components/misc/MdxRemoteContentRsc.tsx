import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import "highlight.js/styles/atom-one-dark.css";
import { Embed } from "@/components/misc/Embed";
import { Palette } from "./Palette";
import { MDXComponentsMap } from "@/mdx-components";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export const MdxRemoteContentRsc: React.FC<MDXRemoteProps> = ({ ...props }) => {
  return (
    <MDXRemote
      components={{ Embed, Palette, ...MDXComponentsMap }}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [[rehypeHighlight as any, {}]],
          remarkPlugins: [[remarkGfm, {}]],
        },
      }}
      {...props}
    />
  );
};
