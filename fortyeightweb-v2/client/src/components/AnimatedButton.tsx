import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
}

export default function AnimatedButton({ 
  children, 
  variant = "default", 
  size = "default",
  className = "",
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Button
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}