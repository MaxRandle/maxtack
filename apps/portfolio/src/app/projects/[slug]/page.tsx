import { getProjectSlugs, getProjectFromSlug } from "@/utils/files";
import { ROUTE_MAP } from "@/config";
import { GithubRepositoryChip } from "@/components/misc/GithubRepositoryChip";
import { Container, Heading, Link, Section, Typography } from "ui";
import { MdxRemoteContentRsc } from "@/components/misc/MdxRemoteContentRsc";

/**
 * true (default): Dynamic segments not included in generateStaticParams are generated on demand.
 * false: Dynamic segments not included in generateStaticParams will return a 404.
 */
export const dynamicParams = false; // true | false,

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return getProjectSlugs().map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = params;

  const { source, frontMatter } = await getProjectFromSlug(slug);

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Link href={`${ROUTE_MAP.about.root}#projects`}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              about
            </code>
          </Link>
          <Heading className="mt-12" level={"h1"}>
            {frontMatter.title}
          </Heading>
          <Typography className="mt-4" level={"subheading"} palette="weaker">
            {frontMatter.summary}
          </Typography>
          {frontMatter.repo ? (
            <GithubRepositoryChip className="mt-12" repo={frontMatter.repo} />
          ) : null}
        </Container>
      </Section>

      <Section>
        <Container>
          <MdxRemoteContentRsc source={source} />
        </Container>
      </Section>
    </main>
  );
}
