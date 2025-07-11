import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInSection({ 
  children, 
  className = "",
  delay = 0 
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}