"use client";

import { Container, LinkStyleButton, Nav, NavLink } from "ui";
import { ROUTE_MAP } from "@/config";
import { BrandLogoIcon } from "@/components/brand/BrandLogoIcon";
import { usePathname } from "next/navigation";
import { useShouldAnimateLogoAtom } from "@/store/atoms";

const navigations = [
  {
    id: "1",
    url: ROUTE_MAP.about.root,
    content: "About",
  },
  {
    id: "2",
    url: ROUTE_MAP.blogPosts.root,
    content: "Blog",
  },
];

export const AppNavHeader = () => {
  const pathname = usePathname();
  const [_, setShouldAnimate] = useShouldAnimateLogoAtom();

  return (
    <Nav>
      <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
        <LinkStyleButton
          className="shrink-0 p-2 border border-transparent"
          onClick={() => setShouldAnimate(true)}
        >
          <BrandLogoIcon size={28} />
        </LinkStyleButton>
        {navigations.map(({ url, content, id }) => (
          <NavLink isActive={pathname === url} key={id} href={url}>
            {content}
          </NavLink>
        ))}
      </Container>
    </Nav>
  );
};
