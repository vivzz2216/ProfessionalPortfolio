import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const loadingTexts = [
    'Initializing quantum processors...',
    'Loading neural networks...',
    'Synchronizing digital matrices...',
    'Calibrating holographic displays...',
    'Activating AI algorithms...',
    'Finalizing portfolio interface...'
  ];

  useEffect(() => {
    let textIndex = 0;
    let progressInterval: NodeJS.Timeout;
    let textInterval: NodeJS.Timeout;

    const updateText = () => {
      setCurrentText(loadingTexts[textIndex]);
      textIndex = (textIndex + 1) % loadingTexts.length;
    };

    const updateProgress = () => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12;
        if (newProgress >= 100) {
          setTimeout(onLoadingComplete, 800);
          return 100;
        }
        return newProgress;
      });
    };

    updateText();
    textInterval = setInterval(updateText, 1000);
    progressInterval = setInterval(updateProgress, 120);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Nodes */}
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Connection Lines */}
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: '1px',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central Loading Hub */}
      <div className="relative z-10">
        {/* Orbiting Elements */}
        <div className="relative w-96 h-96 mb-8">
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i / 12) * 360;
            const radius = 120;
            
            return (
              <motion.div
                key={`orbit-${i}`}
                className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: [angle, angle + 360],
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                  opacity: { duration: 2, repeat: Infinity, delay: i * 0.2 },
                }}
                initial={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                }}
              />
            );
          })}

          {/* Central Avatar */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 4, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 flex items-center justify-center shadow-2xl relative">
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-white font-bold text-2xl font-['Cinzel']"
              >
                VP
              </motion.div>
              
              {/* Pulsing Rings */}
              <div className="absolute inset-0 border-2 border-blue-400/50 rounded-full animate-ping"></div>
              <div className="absolute -inset-2 border border-cyan-400/30 rounded-full animate-ping delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 font-['Cinzel']"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, #3B82F6, #06B6D4, #8B5CF6, #3B82F6)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            VIVEK PILLAI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-cyan-400 text-lg font-['Cormorant_Garamond']"
          >
            Full-Stack Developer & IT Engineer
          </motion.p>
        </motion.div>

        {/* Holographic Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-96 mx-auto mb-8"
        >
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-full blur-sm"></div>
            
            {/* Progress Container */}
            <div className="relative bg-slate-800/50 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-blue-500/30">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
              
              {/* Progress Indicators */}
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={i}
                  className={`absolute top-0 bottom-0 w-px bg-slate-600 ${
                    progress > (i * 10) ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{ left: `${(i + 1) * 10}%` }}
                />
              ))}
            </div>
          </div>
          
          {/* Progress Text */}
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-gray-400 font-['Cormorant_Garamond']">Loading...</span>
            <motion.span
              className="text-cyan-400 font-bold font-['Cormorant_Garamond']"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>

        {/* Dynamic Status Text */}
        <motion.div
          className="text-center h-6"
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-cyan-400 font-['Cormorant_Garamond'] text-sm">
            {currentText}
          </span>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Screen Edge Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-50"></div>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-50"></div>
    </motion.div>
  );
}