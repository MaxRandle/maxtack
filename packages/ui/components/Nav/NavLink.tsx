import { type VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";

const NavLinkVariants = cva(
  [
    "focus-visible:ring-active",
    "rounded-lg p-2 text-lg sm:text-xl leading-loose",
    "text-base-600 hover:text-white",
  ],
  {
    variants: {
      /**
       * @summary boolean indicating whether the NavLink is active
       */
      isActive: {
        true: "text-white",
        false: "",
      },
    },
  }
);

type NavLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof NavLinkVariants>;

export const NavLink: React.FC<NavLinkProps> = ({
  className,
  isActive,
  ...props
}) => {
  const classes = NavLinkVariants({ isActive });
  return <NextLink className={twMerge(classes, className)} {...props} />;
};
