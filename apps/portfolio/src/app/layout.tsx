import "@/styles/globals.scss";

export const metadata = {
  title: "Max Randle",
  description: "Max Randle's portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // :root {
        //   --bg: var(--color-base-100);
        //   --color: var(--color-base-1300);
        //   @include dark {
        //     --bg: var(--color-base-1300);
        //     --color: var(--color-base-100);
        //   }
        // }

        // body {
        //   background: var(--bg);
        //   color: var(--color);
        // }

        className="bg-base-100 text-base-1300 dark:bg-base-1300 dark:text-base-100"
      >
        {children}
      </body>
    </html>
  );
}
