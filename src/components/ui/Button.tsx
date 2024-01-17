// import { twMerge } from "tailwind-merge";
// import { clsx } from "clsx";
import cn from "../../utils/cn";
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

type TVariant = "solid" | "ghost" | "outline";

type TButttonOptions = {
  variant: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButttonOptions;

type TRef = HTMLButtonElement;

const Button = forwardRef<TRef, TButton>(
  ({ className, children, variant, ...rest }, ref) => {
    const getVariant = (variant: string) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };
    return (
      <button
        {...rest}
        ref={ref}
        className={cn(
          // "btn-ghost",
          // {
          //   "border-2 border-red-400": outline,
          // },
          className,
          getVariant(variant)
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
