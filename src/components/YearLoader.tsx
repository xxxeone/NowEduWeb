import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface YearLoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const YearLoader = ({ onComplete, duration = 3500 }: YearLoaderProps) => {
  const startYear = 2011;
  const endYear = 2025;
  const totalYears = endYear - startYear + 1;

  const [currentYear, setCurrentYear] = useState(startYear);
  const [isComplete, setIsComplete] = useState(false);
  const [showArtisticElements, setShowArtisticElements] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

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

    if (currentYear >= endYear) {
      setIsComplete(true);
      // Show final message when reaching 2025
      setTimeout(() => {
        setShowFinalMessage(true);
      }, 500);
      setTimeout(() => {
        onComplete?.();
      }, 2000);
      return () => clearTimeout(artisticTimer);
    }

    const yearDuration = duration / totalYears;
    const timer = setTimeout(() => {
      if (currentYear < endYear) {
        setCurrentYear(prev => prev + 1);
        motionYear.set(currentYear + 1);
      }
    }, yearDuration);

    return () => {
      clearTimeout(timer);
      clearTimeout(artisticTimer);
    };
  }, [currentYear, duration, totalYears, endYear, onComplete, motionYear]);

  const progress = ((currentYear - startYear) / totalYears) * 100;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#FDDE55]">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0">
        
        {/* Dynamic geometric patterns */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            opacity: showFinalMessage ? 0 : 0.1,
            scale: showFinalMessage ? 0.8 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle geometric shapes */}
          <motion.div 
            className="absolute top-1/4 left-1/6 w-64 h-64 border-2 border-gray-800/10"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/6 w-48 h-48 border border-gray-800/15 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
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
              animate={{ 
                opacity: showFinalMessage ? 0 : 1, 
                scale: showFinalMessage ? 0.8 : 1 
              }}
              transition={{ duration: showFinalMessage ? 0.6 : 1, ease: "easeOut" }}
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
                  className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black leading-none text-gray-800"
                  style={{
                    fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif',
                    fontWeight: 900,
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <motion.span>{isComplete ? endYear : displayYear}</motion.span>
                </div>

                {/* Artistic overlay effects */}
                <div className="absolute inset-0 -z-10">
                  <div 
                    className="text-[12rem] md:text-[20rem] lg:text-[28rem] font-black text-gray-900/5 leading-none"
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
            </motion.div>
          </div>

          {/* Minimalist Progress Indicator */}
          <motion.div 
            className="relative mb-16"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: showFinalMessage ? 0 : 1,
              y: showFinalMessage ? 20 : 0
            }}
            transition={{ delay: showFinalMessage ? 0 : 0.8, duration: 0.6 }}
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
                <div className="h-px bg-gradient-to-r from-white/20 via-white/50 to-white/20"></div>
                <motion.div 
                  className="absolute top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-lg shadow-white/30"
                  initial={{ left: '0%' }}
                  animate={{ left: `${progress}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              
              <motion.div 
                className="text-white text-sm font-mono tracking-widest font-bold"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    '0 0 10px rgba(255, 255, 255, 0.3)',
                    '0 0 20px rgba(255, 255, 255, 0.5)',
                    '0 0 10px rgba(255, 255, 255, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {endYear}
              </motion.div>
            </div>
          </motion.div>

          {/* Year dissolve and Final Message transition */}
          {showFinalMessage && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center z-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
                  filter: 'drop-shadow(0 8px 24px rgba(255, 255, 255, 0.2))'
                }}
              >
                <motion.div
                  animate={{
                    textShadow: [
                      '0 0 30px rgba(255, 255, 255, 0.4)',
                      '0 0 50px rgba(255, 255, 255, 0.7)',
                      '0 0 30px rgba(255, 255, 255, 0.4)'
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  6000+学生的选择
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Bottom artistic elements */}
          {showArtisticElements && !showFinalMessage && (
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