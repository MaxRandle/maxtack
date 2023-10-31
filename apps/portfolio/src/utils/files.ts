import { SRC_ASSET_MAP } from "@/config";
import fs, { promises } from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote/dist/types";
import path from "path";

const getMdxFileNamesFromFolder = (folderPath: string): string[] => {
  const absoluteFolderPath = path.join(process.cwd(), folderPath);
  return fs
    .readdirSync(absoluteFolderPath)
    .filter((path) => /\.mdx?$/.test(path));
};

const getSlugsFromMdxFileNames = (fileNames: string[]): string[] => {
  return fileNames.map((filePath) => filePath.replace(/\.mdx?$/, ""));
};

const getMdxFilePathFromSlug = (slug: string, folderPath: string): string => {
  const filePaths = getMdxFileNamesFromFolder(folderPath);
  const filePath = filePaths.find((path) => path.includes(slug));

  if (!filePath) {
    throw new Error(`No MD or MDX file found for slug ${slug}`);
  }

  return path.join(folderPath, filePath);
};

export const readMdxFile = async <TFrontMatter extends Record<string, any>>(
  filePath: string
) => {
  const fileContent = await promises.readFile(filePath);
  const { content, data } = matter(fileContent);

  return { source: content, frontMatter: data as TFrontMatter };
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

export const getProjectSlugs = (): string[] => {
  const projectFileNames = getMdxFileNamesFromFolder(
    SRC_ASSET_MAP.mdx.projects.folder
  );
  return getSlugsFromMdxFileNames(projectFileNames);
};

export const getBlogPostSlugs = (): string[] => {
  const blogPostFileNames = getMdxFileNamesFromFolder(
    SRC_ASSET_MAP.mdx.blogPosts.folder
  );
  return getSlugsFromMdxFileNames(blogPostFileNames);
};

export const getProjectFromSlug = async (slug: string) => {
  const filePath = getMdxFilePathFromSlug(
    slug,
    SRC_ASSET_MAP.mdx.projects.folder
  );

  const { source, frontMatter } =
    await readMdxFile<ProjectFrontMatter>(filePath);
  return { source, frontMatter: { ...frontMatter, slug } };
};

export const getBlogPostFromSlug = async (slug: string) => {
  const filePath = getMdxFilePathFromSlug(
    slug,
    SRC_ASSET_MAP.mdx.blogPosts.folder
  );

  const { source, frontMatter } =
    await readMdxFile<BlogPostFrontMatter>(filePath);
  return { source, frontMatter: { ...frontMatter, slug } };
};
