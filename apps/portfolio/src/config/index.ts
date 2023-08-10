export type GetLeafNodeUnion<T> = T extends Record<string, any>
  ? GetLeafNodeUnion<T[keyof T]>
  : T;

export const ROUTE_MAP = {
  intro: { root: "/" },
  about: { root: "/about" },
  playground: { root: "/playground" },
  resume: { root: "/resume" },
  projects: {
    slug: (slug: string) => `/projects/${slug}`,
  },
  blogPosts: {
    slug: (slug: string) => `/blog/${slug}`,
  },
} as const;

export type Route = GetLeafNodeUnion<typeof ROUTE_MAP>;

export const SRC_ASSET_MAP = {
  mdx: {
    projects: { folder: "src/content/mdx/projects" },
    blogPosts: { folder: "src/content/mdx/blog-posts" },
    resume: "src/content/mdx/resume.mdx",
  },
} as const;

export type SrcAsset = GetLeafNodeUnion<typeof SRC_ASSET_MAP>;

export const PUBLIC_ASSET_MAP = {
  documents: {
    resume: "/documents/Max Randle CV - April 2023.pdf",
  },
  media: {
    maxProfilePicture: "/media/max-crop.jpg",
    maxArtExhibit: "/media/max-art.jpg",
    projects: {
      thumbnails: {
        fileName: (fileName: string) =>
          `/media/projects/thumbnails/${fileName}`,
      },
      issInterface: "/media/projects/iss-interface.jpeg",
    },
    blogPosts: {
      lchColorSpace: "/media/blog-posts/lch-color-space.jpg",
    },
  },
} as const;

export type PublicAsset = GetLeafNodeUnion<typeof PUBLIC_ASSET_MAP>;
