import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function OptimizedBackground() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay background animation to improve initial load
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Optimized gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Reduced floating elements for better performance */}
      {isVisible && (
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}