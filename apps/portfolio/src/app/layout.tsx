"use client";

import "@/styles/portfolio-theme.scss";
import { atom } from "jotai";

// export const metadata = {
//   title: "Max Randle",
//   description: "Max Randle's portfolio website.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// atoms ----------------------------------------------------------------------

export const ShouldAnimateLogoAtom = atom<boolean>(true);
