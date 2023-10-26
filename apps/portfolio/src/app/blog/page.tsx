import { AppNavHeader } from "@/components/composite/AppNavHeader";
import { ROUTE_MAP } from "@/config";

import { getBlogPostSlugs, getBlogPostFromSlug } from "@/utils/files";
import { Container, Heading, Link, Section, Typography } from "ui";

export default async function Page() {
  const blogPostsFrontMatter = (
    await Promise.all(getBlogPostSlugs().map(getBlogPostFromSlug))
  ).map((blogPost) => blogPost.frontMatter);

  const CONTENT = {
    heading: "My Blog",
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <AppNavHeader />
      <Section id="blog-posts">
        <Container>
          <Heading className="mt-20" level={"h2"}>
            {CONTENT.heading}
          </Heading>
          <ul className="mt-20 space-y-8">
            {blogPostsFrontMatter.map(({ slug, summary, tags, title }) => (
              <li key={slug}>
                <Link href={ROUTE_MAP.blogPosts.slug(slug)}>
                  <Typography palette={"primary"} level={"subheading"}>
                    {title}
                  </Typography>
                </Link>
                <Typography>{summary}</Typography>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </main>
  );
}
