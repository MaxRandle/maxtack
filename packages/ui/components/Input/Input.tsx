import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const InputVariants = cva(
  twMerge([
    "border appearance-none px-4 py-3 rounded-lg focus:ring-active w-full",
    "placeholder-base-700 custom-dark:placeholder-base-600",

    // base classes
    "text-base-900 bg-base-100 border-base-400",
    "custom-dark:text-base-400 custom-dark:bg-base-1200 custom-dark:border-base-1000",

    // invalid classes
    "focus:invalid:ring-danger",
    "invalid:text-danger-900 invalid:bg-danger-100 invalid:border-danger-400",
    "custom-dark:invalid:text-danger-400 custom-dark:invalid:bg-danger-1200 custom-dark:invalid:border-danger-1000",

    // disabled classes
    "disabled:opacity-60 disabled:pointer-events-none",

    "disabled:text-black disabled:bg-base-400 disabled:border-base-400",
    "disabled:custom-dark:text-white disabled:custom-dark:bg-base-1000 disabled:custom-dark:border-base-1000",

    // group classes
    "group-[]/input-group:focus:relative",
    "group-[]/input-group:rounded-none",
    "group-[]/input-group:first:ml-0",
    "group-[]/input-group:-ml-[1px]",
    "group-[]/input-group:first:rounded-l-lg",
    "group-[]/input-group:last:rounded-r-lg",
  ])
);

export type InputProps = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof InputVariants>;

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = InputVariants({});

  return <input className={twMerge(classes, className)} {...props} />;
};
