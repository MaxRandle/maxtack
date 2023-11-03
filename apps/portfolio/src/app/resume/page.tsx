import { twMerge } from "tailwind-merge";

import { ROUTE_MAP, SRC_ASSET_MAP } from "@/config";
import { Container, Link, Section } from "ui";
import { MdxRemoteContentRsc } from "@/components/misc/MdxRemoteContentRsc";
import { readMdxFile } from "@/utils/files";
import path from "path";

export default async function Page() {
  const pageRootClasses = ["min-h-screen overflow-hidden"];

  const { source } = await readMdxFile(
    path.join(process.cwd(), SRC_ASSET_MAP.mdx.resume)
  );

  return (
    <main className={twMerge(pageRootClasses, "print:font-resume")}>
      <Section>
        <Container>
          <Link className="print:hidden" href={ROUTE_MAP.about.root}>
            {`Back to `}
            <code className="rounded-md bg-base-300 p-1 dark:bg-base-1300">
              about
            </code>
          </Link>
          {/* mdx content can be rendered directly once remark-gfm gets fixed. */}
          <MdxRemoteContentRsc source={source} />
        </Container>
      </Section>
    </main>
  );
}
