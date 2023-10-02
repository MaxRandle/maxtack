"use client";

import { Container, Nav, NavLink } from "ui";
import { ROUTE_MAP } from "@/config";
import { BrandLogoIcon } from "@/components/brand/BrandLogoIcon";
import { usePathname } from "next/navigation";

const navigations = [
  {
    id: "1",
    url: ROUTE_MAP.about.root,
    content: <BrandLogoIcon className="shrink-0" />,
  },
  {
    id: "2",
    url: ROUTE_MAP.about.root,
    content: "About",
  },
  {
    id: "3",
    url: ROUTE_MAP.blogPosts.slug("accessible-colours"),
    content: "Blog",
  },
];

export const AppNavHeader = () => {
  const pathname = usePathname();

  return (
    <Nav>
      <Container className="flex items-center justify-between gap-6 sm:justify-start sm:gap-20">
        {navigations.map(({ url, content, id }) => (
          <NavLink isActive={pathname === url} key={id} href={url}>
            {content}
          </NavLink>
        ))}
      </Container>
    </Nav>
  );
};
