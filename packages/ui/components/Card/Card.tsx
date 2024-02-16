import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";
import React from "react";

const CardVariants = cva(["rounded-lg overflow-hidden"], {
  variants: {
    /**
     * @summary Specifies the background color of the card.
     * @default "surface"
     */
    palette: {
      base: [
        "border",
        "bg-base-100 border-base-300",
        "custom-dark:bg-base-1300 custom-dark:border-base-1000",
      ],
      surface: [
        "border",
        "bg-base-200 border-base-400",
        "custom-dark:bg-base-1200 custom-dark:border-base-1000",
      ],
      gradient: [
        "bg-gradient-rad-2",
        "from-primary-800 custom-dark:from-primary-600 to-transparent",
      ],
    },
    /**
     * @summary Specifies the elevation of the card.
     * @default "low"
     */
    elevation: {
      flat: "",
      low: "shadow-md custom-dark:shadow-glow-sm",
      high: "shadow-lg custom-dark:shadow-glow-md",
    },
  },
  defaultVariants: {
    palette: "surface",
    elevation: "low",
  },
});

export type CardProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof CardVariants>;

export const Card = React.forwardRef<React.ElementRef<"div">, CardProps>(
  ({ className, palette, elevation, ...props }, ref) => {
    const classes = CardVariants({ palette, elevation });

    return <div ref={ref} className={twMerge(classes, className)} {...props} />;
  }
);

Card.displayName = "Card";

export type CardLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof CardVariants>;

export const CardLink = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  CardLinkProps
>(({ className, palette, elevation, ...props }, ref) => {
  const focusClasses = [
    "transition-colors",
    "focus:ring-active",
    "hover:bg-base-300 hover:border-base-500",
    "custom-dark:hover:bg-base-1100 custom-dark:hover:border-base-900",
  ];

  const classes = CardVariants({ palette, elevation });

  return (
    <NextLink
      ref={ref}
      className={twMerge(focusClasses, classes, className)}
      {...props}
    />
  );
});

CardLink.displayName = "CardLink";
