import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

const buttonClasses = cva(
  [
    "focus:ring-active",
    "font-semibold tracking-wider border rounded-full shadow-sm inline-flex items-center justify-center gap-4 transition-colors",

    "group-[]/button-group:px-4",
    "group-[]/button-group:rounded-none",
    "group-[]/button-group:shadow-none",
    "group-[]/button-group:first:rounded-l-full",
    "group-[]/button-group:last:rounded-r-full",
    "group-[]/button-group:first:pl-5",
    "group-[]/button-group:last:pr-5",
    "group-[]/button-group:hover:relative",
    "group-[]/button-group:focus-visible:relative",
  ],
  {
    variants: {
      /**
       * @summary specifies the background and text colors
       * @default "primary"
       */
      intent: {
        primary: [
          "text-white",
          "bg-primary-800 hover:bg-primary-700",
          "border-primary-800 hover:border-primary-700",
        ],
        secondary: [
          "text-base-900",
          "bg-base-100 border-base-400",
          "hover:bg-base-200 hover:border-base-500",

          "custom-dark:text-base-300",
          "custom-dark:bg-base-1200 custom-dark:border-base-1000",
          "custom-dark:hover:bg-base-1100 custom-dark:hover:border-base-800",
        ],
        destructive: [
          "text-white",
          "bg-danger-800 hover:bg-danger-700",
          "border-danger-800 hover:border-danger-700",
        ],
      },
      /**
       * @summary specifies size of the button
       * @default "md"
       */
      size: {
        md: "h-10 px-5 text-md",
        lg: "h-14 px-8 text-lg",
      },
      disabled: {
        true: [
          "opacity-60 pointer-events-none",
          "text-base-black bg-base-400 border-base-400",
          "custom-dark:text-white custom-dark:bg-base-1000 custom-dark:border-base-1000",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonClasses>;

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => {
  const classes = buttonClasses({ intent, size, disabled });

  return (
    <button
      className={twMerge(classes, className)}
      disabled={disabled}
      {...props}
    />
  );
};

export type ButtonStyleLinkProps = React.ComponentPropsWithoutRef<
  typeof NextLink
> &
  VariantProps<typeof buttonClasses>;

export const ButtonStyleLink: React.FC<ButtonStyleLinkProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => {
  const classes = buttonClasses({ intent, size, disabled });

  return <NextLink className={twMerge(classes, className)} {...props} />;
};
