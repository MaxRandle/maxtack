import React from "react";
import { twMerge } from "tailwind-merge";
import { type VariantProps, cva } from "class-variance-authority";
import NextImage, { ImageProps as NextImageProps } from "next/image";

const AvatarVariants = cva(
  [
    "text-primary-800 bg-primary-300 ring-base-200",
    "custom-dark:text-primary-500 custom-dark:bg-base-1000 custom-dark:ring-base-1200",
    "relative shrink-0 overflow-hidden inline-block rounded-full",
    "group-[]/avatar-group:first:ml-0",
  ],
  {
    variants: {
      /**
       * @summary size of the avatar
       * @default "md"
       */
      size: {
        sm: [
          "text-lg w-12 h-12",
          "group-[]/avatar-group:-ml-2",
          "group-[]/avatar-group:ring-4",
          "group-[]/avatar-container:mr-3",
        ],
        md: [
          "text-xl w-16 h-16",
          "group-[]/avatar-group:-ml-4",
          "group-[]/avatar-group:ring-4",
          "group-[]/avatar-container:mr-4",
        ],
        lg: [
          "text-2xl w-20 h-20",
          "group-[]/avatar-group:-ml-5",
          "group-[]/avatar-group:ring-4",
          "group-[]/avatar-container:mr-4",
        ],
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export type AvatarProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "children"
> & {
  /**
   * @summary text to be rendered in place of an image
   */
  fallback: string;
} & VariantProps<typeof AvatarVariants> &
  Partial<Pick<NextImageProps, "src" | "priority">>;

export const Avatar: React.FC<AvatarProps> = ({
  src,
  fallback,
  className,
  size,
  priority,
  ...props
}) => {
  const classes = AvatarVariants({ size });

  const imageSize = (size === "sm" ? 48 : size === "md" ? 64 : 80) * 2; // double for resolution

  return (
    <div className={twMerge(classes, className)} {...props}>
      {src ? (
        <NextImage
          className="aspect-square h-full w-full"
          src={src}
          alt={fallback}
          width={imageSize}
          height={imageSize}
          priority={priority}
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center rounded-full">
          {fallback}
        </span>
      )}
    </div>
  );
};
