// "use client";

import { FiChevronRight } from "react-icons/fi";
import { PUBLIC_ASSET_MAP, ROUTE_MAP } from "@/config";
import {
  ProjectFrontMatter,
  getProjectFromSlug,
  getProjectSlugs,
} from "@/utils/files";
import {
  Avatar,
  Badge,
  CardContent,
  CardLink,
  Container,
  Heading,
  Section,
  Typography,
} from "ui";

export async function ProjectsSection() {
  const CONTENT = {
    heading: "My Projects",
  };

  const projectsFrontMatter = (
    await Promise.all(getProjectSlugs().map(getProjectFromSlug))
  ).map((project) => project.frontMatter);

  return (
    <Section id="projects" spacing={"lg"}>
      <Container>
        <Heading level={"h2"}>{CONTENT.heading}</Heading>
        <ul className="mt-20 space-y-4">
          {projectsFrontMatter.map(
            ({ slug, summary, tags, thumbnail, title }) => (
              <li key={slug}>
                <CardLink
                  href={ROUTE_MAP.projects.slug(slug)}
                  className="flex items-center justify-between"
                >
                  <CardContent>
                    <div className="flex gap-4">
                      {!!thumbnail ? (
                        <Avatar
                          src={PUBLIC_ASSET_MAP.media.projects.thumbnails.fileName(
                            thumbnail
                          )}
                          fallback={title}
                        />
                      ) : null}
                      <div>
                        <Heading level={"h2"}>{title}</Heading>
                        <Typography level={"body"} palette="weaker">
                          {summary}
                        </Typography>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardContent className="hidden pl-0 sm:block">
                    <FiChevronRight size={32} />
                  </CardContent>
                </CardLink>
              </li>
            )
          )}
        </ul>
      </Container>
    </Section>
  );
}
