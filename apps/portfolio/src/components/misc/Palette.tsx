import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "ui";

type PaletteProps = React.ComponentPropsWithoutRef<"div">;
export const Palette: React.FC<PaletteProps> = ({ className, ...props }) => {
  const shadeKeys = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
    "1100",
    "1200",
    "1300",
  ] as const;

  const hueKeys = [
    // "pearl",
    "periwinkle",
    "warning",
    "emerald",
    "sky",
    "deep-red",
  ] as const;

  const colors = {
    grey: {
      "100": "bg-base-100",
      "200": "bg-base-200",
      "300": "bg-base-300",
      "400": "bg-base-400",
      "500": "bg-base-500",
      "600": "bg-base-600",
      "700": "bg-base-700",
      "800": "bg-base-800",
      "900": "bg-base-900",
      "1000": "bg-base-1000",
      "1100": "bg-base-1100",
      "1200": "bg-base-1200",
      "1300": "bg-base-1300",
    },
    pearl: {
      "100": "bg-pearl-100",
      "200": "bg-pearl-200",
      "300": "bg-pearl-300",
      "400": "bg-pearl-400",
      "500": "bg-pearl-500",
      "600": "bg-pearl-600",
      "700": "bg-pearl-700",
      "800": "bg-pearl-800",
      "900": "bg-pearl-900",
      "1000": "bg-pearl-1000",
      "1100": "bg-pearl-1100",
      "1200": "bg-pearl-1200",
      "1300": "bg-pearl-1300",
    },
    warning: {
      "100": "bg-warning-100",
      "200": "bg-warning-200",
      "300": "bg-warning-300",
      "400": "bg-warning-400",
      "500": "bg-warning-500",
      "600": "bg-warning-600",
      "700": "bg-warning-700",
      "800": "bg-warning-800",
      "900": "bg-warning-900",
      "1000": "bg-warning-1000",
      "1100": "bg-warning-1100",
      "1200": "bg-warning-1200",
      "1300": "bg-warning-1300",
    },
    periwinkle: {
      "100": "bg-primary-100",
      "200": "bg-primary-200",
      "300": "bg-primary-300",
      "400": "bg-primary-400",
      "500": "bg-primary-500",
      "600": "bg-primary-600",
      "700": "bg-primary-700",
      "800": "bg-primary-800",
      "900": "bg-primary-900",
      "1000": "bg-primary-1000",
      "1100": "bg-primary-1100",
      "1200": "bg-primary-1200",
      "1300": "bg-primary-1300",
    },
    emerald: {
      "100": "bg-success-100",
      "200": "bg-success-200",
      "300": "bg-success-300",
      "400": "bg-success-400",
      "500": "bg-success-500",
      "600": "bg-success-600",
      "700": "bg-success-700",
      "800": "bg-success-800",
      "900": "bg-success-900",
      "1000": "bg-success-1000",
      "1100": "bg-success-1100",
      "1200": "bg-success-1200",
      "1300": "bg-success-1300",
    },
    sky: {
      "100": "bg-info-100",
      "200": "bg-info-200",
      "300": "bg-info-300",
      "400": "bg-info-400",
      "500": "bg-info-500",
      "600": "bg-info-600",
      "700": "bg-info-700",
      "800": "bg-info-800",
      "900": "bg-info-900",
      "1000": "bg-info-1000",
      "1100": "bg-info-1100",
      "1200": "bg-info-1200",
      "1300": "bg-info-1300",
    },
    "deep-red": {
      "100": "bg-danger-100",
      "200": "bg-danger-200",
      "300": "bg-danger-300",
      "400": "bg-danger-400",
      "500": "bg-danger-500",
      "600": "bg-danger-600",
      "700": "bg-danger-700",
      "800": "bg-danger-800",
      "900": "bg-danger-900",
      "1000": "bg-danger-1000",
      "1100": "bg-danger-1100",
      "1200": "bg-danger-1200",
      "1300": "bg-danger-1300",
    },
  };

  const classes = "grid grid-cols-6 gap-2 justify-center max-w-2xl mx-auto";

  return (
    <div className={twMerge(classes, className)} {...props}>
      <div />
      {hueKeys.map((hue) => (
        <div key={hue} className="flex h-10 items-center justify-evenly">
          <Typography color="weak">{hue}</Typography>
        </div>
      ))}
      {shadeKeys.map((shade) => (
        <Fragment key={shade}>
          <div
            key={shade}
            className="flex h-10 items-center justify-evenly rounded-md border border-base-300 dark:border-base-1200"
          >
            <Typography color="weak">{shade}</Typography>
          </div>

          {hueKeys.map((hue) => (
            <Fragment key={`${hue}-${shade}`}>
              <div
                className={`flex h-10 items-center justify-evenly rounded-md ${colors[hue][shade]}`}
              >
                <p className="text-white">Aa</p>
                <p className="text-black">Aa</p>
              </div>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  );
};
