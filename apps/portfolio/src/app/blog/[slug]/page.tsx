import { getBlogPostFromSlug, getBlogPostSlugs } from "@/utils/files";
import { ROUTE_MAP } from "@/config";
import { Container, Link, Section } from "ui";
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

  const { source } = await getBlogPostFromSlug(slug);

  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-black">
      <Section>
        <Container>
          <Link href={`${ROUTE_MAP.blogPosts.root}`}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              blog
            </code>
          </Link>
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
