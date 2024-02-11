import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const PageVariants = cva(["min-h-svh"], { variants: {} });

export type PageProps = React.ComponentPropsWithoutRef<"main"> &
  VariantProps<typeof PageVariants>;

export const Page = React.forwardRef<React.ElementRef<"main">, PageProps>(
  ({ className, ...props }, ref) => {
    const classes = PageVariants({});

    return (
      <main ref={ref} className={twMerge(classes, className)} {...props} />
    );
  }
);

Page.displayName = "Page";
