import s from "./s.module.css";
import cn from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  variant?: "primary" | "secondary" | "outlined",
  size?: "small" | "medium" | "large",
  disabled?: boolean
}

export function MyButton({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        s.button,
        s[variant],
        s[size],
        {
          [s.disabled]: disabled,
        },
        className,
      )}
      {...props}

      disabled={disabled}
    >
      {children}
    </button>
  );
}
