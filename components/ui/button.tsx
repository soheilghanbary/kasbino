import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import styles from "~/styles/ui/button.module.css";

import { cn } from "~/lib/utils";

export const buttonVariants = cva(styles.btn, {
  variants: {
    variant: {
      primary: styles.primary,
      default: styles.default,
      secondary: styles.secondary,
      outline: styles.outline,
      ghost: styles.ghost,
      danger: styles.danger,
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    },
    rounded: {
      full: styles.roundedFull,
    },
    fullWidth: {
      default: "",
      true: styles.fullWidth
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    fullWidth: "default"
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, rounded, fullWidth, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
