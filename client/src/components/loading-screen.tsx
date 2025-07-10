import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const loadingTexts = [
    'Initializing neural networks...',
    'Compiling quantum algorithms...',
    'Synchronizing digital matrices...',
    'Calibrating creative engines...',
    'Activating portfolio interface...',
    'Loading exceptional experiences...'
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
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return newProgress;
      });
    };

    // Start with first text
    updateText();
    
    // Update text every 800ms
    textInterval = setInterval(updateText, 800);
    
    // Update progress every 100ms
    progressInterval = setInterval(updateProgress, 100);

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
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Circular Particle Animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {Array.from({ length: 62 }, (_, i) => {
            const angle = (i / 62) * 360;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
                style={{
                  boxShadow: '0px 0px 10px rgba(255,255,255,1)',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-4px',
                  marginTop: '-4px',
                }}
                animate={{
                  opacity: [0, 0.6, 0],
                  x: [0, x, 0],
                  y: [0, y, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * (3 / 62),
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="text-center z-10">
        {/* Logo/Avatar */}
        <div className="mb-8">
          <motion.div
            className="w-32 h-32 mx-auto mb-4 relative"
            initial={{ scale: 0.8, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center relative shadow-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <div className="text-3xl font-bold text-white font-['Cinzel']">VP</div>
            </motion.div>
            <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 border border-cyan-400 rounded-full animate-ping"></div>
          </motion.div>

          {/* Loading text */}
          <motion.h1
            className="text-4xl font-bold text-white mb-2 font-['Cinzel'] bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent glow-text-blue"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            VIVEK PILLAI
          </motion.h1>

          <motion.p
            className="text-cyan-400 mb-8 font-['Cormorant_Garamond'] text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-Stack Developer & IT Engineer
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-8">
          <div className="bg-slate-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 animate-pulse"></div>
            </motion.div>
          </div>
          <div className="text-cyan-400 text-sm mt-2 font-['Cormorant_Garamond']">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Dynamic loading text */}
        <motion.div
          key={currentText}
          className="text-cyan-400 font-['Cormorant_Garamond'] text-sm h-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {currentText}
        </motion.div>
      </div>
    </motion.div>
  );
}