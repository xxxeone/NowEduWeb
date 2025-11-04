import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface YearLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const YearLoader = ({ onComplete, duration = 7000 }: YearLoaderProps) => {
  const [currentYear, setCurrentYear] = useState(2011);
  const [isComplete, setIsComplete] = useState(false);
  const [showArtisticElements, setShowArtisticElements] = useState(false);
  
  const startYear = 2011;
  const endYear = 2025;
  const totalYears = endYear - startYear + 1;

  // Motion values for smooth counter animation
  const motionYear = useMotionValue(startYear);
  const springYear = useSpring(motionYear, { 
    stiffness: 40, 
    damping: 20,
    mass: 1.2
  });
  const displayYear = useTransform(springYear, (value) => Math.round(value));

  useEffect(() => {
    // Show artistic elements after a delay
    const artisticTimer = setTimeout(() => {
      setShowArtisticElements(true);
    }, 1000);

    if (currentYear > endYear) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete?.();
      }, 1200);
      return () => clearTimeout(artisticTimer);
    }

    const yearDuration = duration / totalYears;
    const timer = setTimeout(() => {
      setCurrentYear(prev => prev + 1);
      motionYear.set(currentYear + 1);
    }, yearDuration);

    return () => {
      clearTimeout(timer);
      clearTimeout(artisticTimer);
    };
  }, [currentYear, duration, totalYears, endYear, onComplete, motionYear]);

  const progress = ((currentYear - startYear) / totalYears) * 100;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-900 to-black">
        
        {/* Dynamic geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          {/* Rotating geometric shapes */}
          <motion.div 
            className="absolute top-1/4 left-1/6 w-64 h-64 border-2 border-yellow-400/30"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/6 w-48 h-48 border border-cyan-400/40 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
            style={{ clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }}
            animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Liquid morphing background */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 30%, #fbbf24 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, #06b6d4 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 20% 30%, #fbbf24 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Artistic Layout */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-8 text-center">

          {/* Artistic Typography Layout */}
          <div className="relative mb-20">
            
            {/* Main Year Display - Artistic Style */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Large artistic year number */}
              <motion.div 
                className="relative inline-block"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div 
                  className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black leading-none"
                  style={{
                    fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #06b6d4 50%, #8b5cf6 75%, #fbbf24 100%)',
                    backgroundSize: '300% 300%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    animation: 'gradient-shift 6s ease infinite',
                    textShadow: 'none',
                    filter: 'drop-shadow(0 10px 30px rgba(251, 191, 36, 0.3))'
                  }}
                >
                  <motion.span>{displayYear}</motion.span>
                </div>

                {/* Artistic overlay effects */}
                <div className="absolute inset-0 -z-10">
                  <div 
                    className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black text-white/5 leading-none"
                    style={{ 
                      transform: 'translate(8px, 8px)',
                      filter: 'blur(4px)'
                    }}
                  >
                    <motion.span>{displayYear}</motion.span>
                  </div>
                </div>
              </motion.div>

              {/* Artistic side elements */}
              {showArtisticElements && (
                <>
                  {/* Left side artistic text */}
                  <motion.div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    <div className="writing-mode-vertical-rl text-4xl md:text-6xl font-light text-white/60 tracking-[0.5em]">
                      教育革新
                    </div>
                  </motion.div>

                  {/* Right side artistic text */}
                  <motion.div 
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                  >
                    <div className="writing-mode-vertical-lr text-4xl md:text-6xl font-light text-white/60 tracking-[0.5em]">
                      记忆方法
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          {/* Minimalist Progress Indicator */}
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {/* Artistic progress visualization */}
            <div className="flex items-center justify-center gap-8">
              <motion.div 
                className="text-white/40 text-sm font-mono tracking-widest"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {startYear}
              </motion.div>
              
              <div className="flex-1 max-w-xs relative">
                <div className="h-px bg-gradient-to-r from-white/20 via-yellow-400/50 to-white/20"></div>
                <motion.div 
                  className="absolute top-1/2 w-2 h-2 bg-yellow-400 rounded-full -translate-y-1/2 shadow-lg shadow-yellow-400/50"
                  initial={{ left: '0%' }}
                  animate={{ left: `${progress}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              
              <motion.div 
                className="text-yellow-400 text-sm font-mono tracking-widest font-bold"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 10px rgba(251, 191, 36, 0.5)',
                    '0 0 20px rgba(251, 191, 36, 0.8)',
                    '0 0 10px rgba(251, 191, 36, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {endYear}
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom artistic elements */}
          {showArtisticElements && (
            <motion.div 
              className="flex justify-center items-center gap-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              <div className="text-white/30 text-xs tracking-[0.3em] font-light">
                EDUCATION
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="text-white/30 text-xs tracking-[0.3em] font-light">
                INNOVATION
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
};

export default YearLoader;