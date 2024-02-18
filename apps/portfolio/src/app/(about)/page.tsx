import { Page } from "ui";

import { ROUTE_MAP } from "@/config";

import { FaChevronRight } from "react-icons/fa6";

import { HeroSection } from "./HeroSection";
import { WorkSection } from "./WorkSection";
import { StackSection } from "./StackSection";
import { ToolsSection } from "./ToolsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ButtonStyleLink, Container, Divider } from "ui";

export default async function AboutPage() {
  return (
    <Page>
      <HeroSection />

      <Container className="flex w-full items-center">
        <Divider className="grow" />
        <ButtonStyleLink
          className="inline-flex items-center gap-2"
          intent={"secondary"}
          href={ROUTE_MAP.resume.root}
        >
          {`résumé`}
          <FaChevronRight size={14} />
        </ButtonStyleLink>
        <Divider className="grow" />
      </Container>

      <WorkSection />

      <StackSection />

      <ToolsSection />

      <ProjectsSection />
    </Page>
  );
}
