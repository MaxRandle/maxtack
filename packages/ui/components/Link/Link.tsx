import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const LinkVariants = cva([
  "text-primary-700 custom-dark:text-primary-500",
  "font-bold tracking-wide",
]);

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  VariantProps<typeof LinkVariants>;

export const Link: React.FC<LinkProps> = ({ className, ...props }) => {
  const classes = LinkVariants({});

  return <NextLink className={twMerge(classes, className)} {...props} />;
};

export type ExternalLinkProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof LinkVariants>;

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  className,
  ...props
}) => {
  const classes = LinkVariants({});

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(classes, className)}
      {...props}
    />
  );
};

export type LinkStyleButtonProps = React.ComponentPropsWithoutRef<"button">;

export const LinkStyleButton: React.FC<LinkStyleButtonProps> = ({
  className,
  ...props
}) => {
  const classes = LinkVariants({});

  return (
    <button
      className={twMerge("focus:ring-active rounded-md", classes, className)}
      {...props}
    />
  );
};
