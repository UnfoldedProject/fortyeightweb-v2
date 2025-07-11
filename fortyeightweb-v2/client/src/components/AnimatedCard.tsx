import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { HTMLAttributes } from "react";

interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedCard({ 
  children, 
  className = "",
  delay = 0,
  ...props 
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className={className} {...props}>
        {children}
      </Card>
    </motion.div>
  );
}