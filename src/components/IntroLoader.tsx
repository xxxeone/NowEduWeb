import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

interface IntroLoaderProps {
  onFinish: () => void;
}

export const IntroLoader = ({ onFinish }: IntroLoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particlesInit, setParticlesInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        color: {
          value: ["#FDDE55", "#03AED2", "#ffffff"],
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        number: {
          value: 80,
          density: {
            enable: true,
          },
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  useEffect(() => {
    // Disable scroll and popups during loader
    document.body.style.overflow = 'hidden';
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.4;
      });
    }, 35);

    // Auto finish after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        onFinish();
      }, 500);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      document.body.style.overflow = 'unset';
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center"
        >
          {/* Particles Background */}
          {particlesInit && (
            <Particles
              id="tsparticles"
              options={particlesOptions}
              className="absolute inset-0"
            />
          )}

          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#03AED2]">
            {/* Animated Gradient Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FDDE55] rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#03AED2] rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-4">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative"
            >
              {/* Glassmorphism Card */}
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-20 h-20 relative"
                >
                  {/* Spinning Rings */}
                  <div className="absolute inset-0 border-4 border-t-[#FDDE55] border-r-transparent border-b-transparent border-l-transparent rounded-full"></div>
                  <div className="absolute inset-2 border-4 border-t-transparent border-r-[#03AED2] border-b-transparent border-l-transparent rounded-full"></div>
                  <div className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-white border-l-transparent rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text with Scale Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight"
              >
                NOW EDU
              </motion.div>
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/80 text-lg"
              >
                世界教育
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="w-64 bg-white/10 backdrop-blur-sm rounded-full h-2 overflow-hidden border border-white/20"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#FDDE55] to-[#03AED2] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
