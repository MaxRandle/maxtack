import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const SectionVariants = cva("", {
  variants: {
    /**
     * @summary determines the vertical separation between two adjacent sections
     */
    spacing: {
      md: "my-20 sm:my-36 py-20 sm:py-36",
      lg: "my-32 sm:my-60 py-32 sm:py-60",
    },
    /**
     * @summary specifies the background color
     */
    palette: {
      transparent: ["py-0 sm:py-0"],
      surface: ["my-0 sm:my-0", "bg-base-300 custom-dark:bg-base-1200"],
      primary: [
        "my-0 sm:my-0",
        "bg-primary-900 custom-dark:bg-primary-1100",
        "dark",
      ],
    },
  },
  defaultVariants: {
    palette: "transparent",
    spacing: "md",
  },
});

export type SectionProps = React.ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof SectionVariants>;

export const Section = React.forwardRef<
  React.ElementRef<"section">,
  SectionProps
>(({ className, palette, spacing, ...props }, ref) => {
  const classes = SectionVariants({ spacing, palette });

  return (
    <section ref={ref} className={twMerge(classes, className)} {...props} />
  );
});

Section.displayName = "Section";
