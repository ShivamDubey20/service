import { type VariantProps, cva } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import { Icon } from "basehub/react-icon";

export const $button = cva(
  "gap-1 font-normal shrink-0 rounded-full ring-control focus-visible:ring-2 outline-hidden outline-0 transition-all duration-300",
  {
    variants: {
      intent: {
        primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 border-transparent",
        secondary:
          "bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 border-transparent",
        tertiary:
          "bg-transparent border-2 border-gradient-to-r from-orange-400 to-red-400 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-950/20 dark:hover:to-red-950/20 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transform hover:scale-105",
        outline: "bg-surface-secondary text-text-primary border-border border dark:bg-dark-surface-secondary dark:text-dark-text-primary dark:border-dark-border hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary",
        ghost: "bg-transparent text-text-primary dark:text-dark-text-primary hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary",
      },
      disabled: {
        true: "opacity-30 cursor-not-allowed transform-none",
      },
      onlyButton: {
        true: "rounded-xs",
      },
      iconSide: {
        left: "flex-row-reverse pl-3",
        right: "flex-row pr-3",
      },
      unstyled: {
        true: "px-0 py-0 bg-transparent border-none hover:bg-transparent hover:border-none dark:hover:bg-transparent dark:hover:border-none dark:bg-transparent dark:border-none",
      },
      size: {
        sm: "inline-flex items-center justify-center px-3 text-sm h-8",
        md: "inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5",
        lg: "inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10",
        xl: "inline-flex items-center justify-center h-12 px-6 text-base md:text-lg md:h-14",
      },
    },
  },
);

type ButtonProps<C extends keyof React.JSX.IntrinsicElements> = VariantProps<typeof $button> &
  React.JSX.IntrinsicElements[C] & {
    icon?: React.ReactNode;
    unstyled?: boolean;
  };

export const Button = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"button">) => {
  return (
    <button
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              unstyled,
              className,
              size,
            }
          : { className },
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon ? <span>{typeof icon === "string" ? <Icon content={icon} /> : icon}</span> : null}
    </button>
  );
};

export const ButtonLink = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"a"> & LinkProps) => {
  return (
    <Link
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              className,
              unstyled,
              size,
            }
          : { className },
      )}
      {...props}
    >
      {children}
      {icon ? <span>{icon}</span> : null}
    </Link>
  );
};
