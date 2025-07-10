import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing neural networks...",
    "Booting up quantum systems...",
    "Loading cybernetic interface...",
    "Syncing with the matrix...",
    "Establishing connection...",
    "Compiling portfolio data...",
    "Optimizing user experience...",
    "Activating holographic display...",
    "Ready to launch - Welcome to the future."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-portfolio-secondary via-portfolio-neutral to-black flex items-center justify-center overflow-hidden"
      >
        {/* Advanced 3D Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-portfolio-primary/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-portfolio-accent/10 to-transparent animate-pulse delay-1000"></div>
          
          {/* Neural Network Grid */}
          <div className="grid grid-cols-12 gap-4 h-full w-full opacity-30">
            {Array.from({ length: 144 }, (_, i) => (
              <motion.div
                key={i}
                className="border border-portfolio-primary/30 rounded-sm"
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.02,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-portfolio-accent rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main loading content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo/Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-8 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-full flex items-center justify-center shadow-2xl shadow-portfolio-primary/50">
              <div className="text-3xl font-bold text-white font-['Orbitron']">VP</div>
            </div>
            <div className="absolute inset-0 border-2 border-portfolio-primary rounded-full animate-pulse"></div>
            <div className="absolute inset-2 border border-portfolio-accent rounded-full animate-ping"></div>
          </motion.div>

          {/* Loading text */}
          <motion.h1
            className="text-4xl font-bold text-white mb-2 font-['Orbitron'] bg-gradient-to-r from-portfolio-primary to-portfolio-accent bg-clip-text text-transparent"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            VIVEK PILLAI
          </motion.h1>

          <motion.p
            className="text-portfolio-accent mb-8 font-['Fira_Code'] text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            IT Engineering Student • Full Stack Developer
          </motion.p>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-portfolio-primary via-portfolio-accent to-portfolio-primary rounded-full shadow-lg shadow-portfolio-primary/50"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2 font-['Fira_Code']">
              <span>Loading...</span>
              <span>{progress}%</span>
            </div>
          </div>

          {/* Dynamic loading text */}
          <motion.div
            key={currentText}
            className="text-portfolio-accent font-['Fira_Code'] text-sm h-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {loadingTexts[currentText]}
          </motion.div>

          {/* Glitch effect */}
          <motion.div
            className="absolute inset-0 bg-portfolio-primary/10 rounded-lg"
            animate={{
              opacity: [0, 0.3, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </div>

        {/* Bottom tech elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex items-center space-x-2 text-gray-400 font-['Fira_Code'] text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>SYSTEM STATUS: ONLINE</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}