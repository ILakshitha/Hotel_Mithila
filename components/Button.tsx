import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed uppercase";

  const variants = {
    primary: "bg-villa-deep text-white hover:bg-villa-deep/90 hover:scale-105 shadow-lg",
    secondary: "bg-white text-villa-deep hover:bg-gray-50 shadow-md",
    lime: "bg-villa-ocean text-white hover:bg-villa-ocean/90 hover:scale-105 shadow-md",
    outline: "border-2 border-villa-deep text-villa-deep hover:bg-villa-deep hover:text-white",
    ghost: "text-villa-deep hover:bg-villa-ocean/10",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;