import { HTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant: "warning" | "success" | "info" | "error" | "";
}

const ErrorMessage = ({
  children,
  className,
  variant,
  ...rest
}: ErrorMessageProps) => {
  const getVariant = (variant: string) => {
    switch (variant) {
      case "warning":
        return "alert-warning";
      case "success":
        return "alert-success";
      case "info":
        return "alert-info";
      case "error":
        return "alert-error";
      default:
        return "alert-success";
    }
  };

  return (
    <span
      role="alert"
      {...rest}
      className={cn(
        "text-xs alert py-0 rounded-md mt-1",
        className,
        getVariant(variant)
      )}
    >
      {children}
    </span>
  );
};

export default ErrorMessage;
