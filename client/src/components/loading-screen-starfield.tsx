import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8;
        if (newProgress >= 100) {
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Generate random stars
  const generateStars = (count: number, size: number) => {
    return Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={`absolute rounded-full bg-white`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`,
        }}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black">
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {/* Small stars */}
        <div className="stars-small">
          {generateStars(700, 1)}
        </div>
        
        {/* Medium stars */}
        <div className="stars-medium">
          {generateStars(200, 2)}
        </div>
        
        {/* Large stars */}
        <div className="stars-large">
          {generateStars(100, 3)}
        </div>
      </div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 font-['Cinzel'] tracking-widest"
            style={{
              background: 'linear-gradient(white, #38495a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
            }}
          >
            VIVEK PILLAI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl text-gray-300 mb-8 font-['Cormorant_Garamond'] tracking-wider"
          >
            Full-Stack Developer Portfolio
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-80 mx-auto"
          >
            <div className="relative">
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </motion.div>
              </div>
              
              <div className="flex justify-between mt-2 text-sm text-gray-400">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .stars-small {
          animation: animStar 50s linear infinite;
        }
        
        .stars-medium {
          animation: animStar 100s linear infinite;
        }
        
        .stars-large {
          animation: animStar 150s linear infinite;
        }
        
        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  );
}