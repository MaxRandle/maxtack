import { getBlogPostFromSlug, getBlogPostSlugs } from "@/utils/files";
import { ROUTE_MAP } from "@/config";
import { Container, Heading, Link, Section, Typography } from "ui";
import { MDXRemote } from "next-mdx-remote";
import { Embed } from "@/components/misc/Embed";
import { MdxRemoteContent } from "@/components/misc/MdxRemoteContent";

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return getBlogPostSlugs().map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const { frontMatter, source } = await getBlogPostFromSlug(slug);
  const { title, summary } = frontMatter;

  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-black">
      <Section>
        <Container>
          <Link href={`${ROUTE_MAP.about.root}`}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              {ROUTE_MAP.about.root}
            </code>
          </Link>
          <Heading className="mt-12" level={"h1"}>
            {title}
          </Heading>
          <Typography className="mt-4" level={"subheading"} palette="weaker">
            {summary}
          </Typography>
        </Container>
      </Section>

      <Section>
        <Container>
          <MdxRemoteContent {...source} />
        </Container>
      </Section>
    </main>
  );
}
