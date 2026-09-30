import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  to?: string;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  to,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30",
    secondary:
      "border-2 border-black bg-white text-black hover:bg-black hover:text-white",
    dark:
      "bg-black text-white shadow-lg hover:bg-orange-500",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;