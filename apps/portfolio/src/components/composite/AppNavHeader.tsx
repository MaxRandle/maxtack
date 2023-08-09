"use client";

import { Container, Nav, NavLink } from "ui";
import { ROUTE_MAP } from "@/config";
import { BrandLogoIcon } from "@/components/brand/BrandLogoIcon";
import { usePathname } from "next/navigation";

const navigations = [
  {
    url: ROUTE_MAP.intro.root,
    content: <BrandLogoIcon className="shrink-0" />,
  },
  { url: ROUTE_MAP.about.root, content: "About" },
  { url: ROUTE_MAP.blogPosts.slug("intuitive-colours"), content: "Blog" },
];

export const AppNavHeader = () => {
  const pathname = usePathname();

  return (
    <Nav>
      <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
        {navigations.map(({ url, content }) => (
          <NavLink isActive={pathname === url} key={url} href={url}>
            {content}
          </NavLink>
        ))}
      </Container>
    </Nav>
  );
};
