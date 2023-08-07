import { SRC_ASSET_MAP } from "@/config";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeHighlight from "rehype-highlight/lib";
import rehypeSlug from "rehype-slug";

const getFileNamesFromFolder = (folderPath: string): string[] => {
  const absoluteFolderPath = path.join(process.cwd(), folderPath);
  return fs
    .readdirSync(absoluteFolderPath)
    .filter((path) => /\.mdx?$/.test(path));
};

const getSlugsFromFileNames = (fileNames: string[]): string[] => {
  return fileNames.map((filePath) => filePath.replace(/\.mdx?$/, ""));
};

export const getProjectSlugs = (): string[] => {
  const projectFileNames = getFileNamesFromFolder(
    SRC_ASSET_MAP.mdx.projects.folder
  );
  return getSlugsFromFileNames(projectFileNames);
};

export const getBlogPostSlugs = (): string[] => {
  const blogPostFileNames = getFileNamesFromFolder(
    SRC_ASSET_MAP.mdx.blogPosts.folder
  );
  return getSlugsFromFileNames(blogPostFileNames);
};

export type ProjectFrontMatter = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
  repo?: string;
  thumbnail?: string;
};

export type BlogPostFrontMatter = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: string[];
};

type MdxContent<FrontMatter> = {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  frontMatter: FrontMatter;
};

export type Project = MdxContent<ProjectFrontMatter>;
export type BlogPost = MdxContent<BlogPostFrontMatter>;

/**
 * @param slug The slug of the MDX file to read
 * @param folderPath The folder path to look for the MDX file
 * @returns source: The MDX source code
 * @returns frontMatter: The front matter of the MDX file
 */
const getMdxContentFromSlug = async <T>(
  slug: string,
  folderPath: string
): Promise<MdxContent<T>> => {
  const filePaths = getFileNamesFromFolder(folderPath);
  const filePath = filePaths.find((path) => path.includes(slug));

  if (!filePath) {
    throw new Error(`No MD or MDX file found for slug ${slug}`);
  }

  const fullPath = path.join(folderPath, filePath);

  const { mdxSource, data } = await readAndSerializeMdxFile(fullPath);

  return {
    source: mdxSource,
    frontMatter: { slug, ...data } as T,
  };
};

/**
 * @param slug The slug of the project to read
 * @returns source: The MDX source code
 */
export const getProjectFromSlug = (slug: string): Promise<Project> => {
  return getMdxContentFromSlug<ProjectFrontMatter>(
    slug,
    SRC_ASSET_MAP.mdx.projects.folder
  );
};

/**
 * @param slug The slug of the blog post to read
 * @returns source: The MDX source code
 */
export const getBlogPostFromSlug = (slug: string): Promise<BlogPost> => {
  return getMdxContentFromSlug<BlogPostFrontMatter>(
    slug,
    SRC_ASSET_MAP.mdx.blogPosts.folder
  );
};

/**
 * @param filePath The path to the MDX file
 * @returns mdxSource: The MDX source code
 * @returns data: The front matter of the MDX file
 */
export const readAndSerializeMdxFile = async (filePath: string) => {
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
    scope: data,
  });

  return { mdxSource, data };
};
