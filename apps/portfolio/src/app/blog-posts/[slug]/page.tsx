import { getProjectFromSlug } from "@/utils/files";
import { ROUTE_MAP } from "@/config";
import { GithubRepositoryChip } from "@/components/misc/GithubRepositoryChip";
import { Container, Heading, Link, Section, Typography } from "ui";
import { MDXRemote } from "next-mdx-remote";
import { Embed } from "@/components/misc/Embed";

type Params = {
  slug: string;
};

export function generateStaticParams(): Params[] {
  return [
    {
      slug: "intuitive-colors",
    },
  ];
}

export default async function Page({ params }: { params: Params }) {
  console.log(params);
  const { slug } = params;

  const { frontMatter, source } = await getProjectFromSlug(slug);
  const { title, summary, repo } = frontMatter;

  return (
    <main className="min-h-screen overflow-hidden">
      <Section>
        <Container>
          <Link href={`${ROUTE_MAP.about.root}#projects`}>
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
          {repo ? <GithubRepositoryChip className="mt-12" repo={repo} /> : null}
        </Container>
      </Section>

      <Section>
        <Container>
          <MDXRemote components={{ Embed: Embed as never }} {...source} />
        </Container>
      </Section>
    </main>
  );
}
