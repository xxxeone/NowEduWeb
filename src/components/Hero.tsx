import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import ipadImg from '@/assets/Ipad.png';
import laptopImg from '@/assets/Laptop.png';

const Hero = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = useMemo(() => ['轻松掌握', '高效提分', '快乐学习', '自信成长'], []);
  const typingSpeed = 200;
  const deletingSpeed = 150;
  const pauseTime = 3000;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Typing effect
  useEffect(() => {
    if (prefersReducedMotion) {
      setTypingText(words[0]);
      return;
    }

    const currentWord = words[wordIndex];
    
    if (!isDeleting && typingText === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && typingText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypingText(prev => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, wordIndex, prefersReducedMotion, words, pauseTime, typingSpeed, deletingSpeed]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white pt-16 md:pt-0">
      <div className="relative z-10 container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          <motion.div
            className="hidden lg:block lg:col-span-2 xl:col-span-3"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -100, rotate: -15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-48 xl:w-64 mx-auto"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -20, 0],
                      rotate: [-5, 5, -5],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <img src={ipadImg} alt="iPad" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-8 xl:col-span-6 text-center">
            <motion.div
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white rounded-full mb-4 sm:mb-6 shadow-lg border-2 border-now-teal"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-now-teal font-black tracking-wide">World Edu</span>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-now-navy/80 mb-4 sm:mb-6 font-medium px-4"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              让学习不再枯燥
            </motion.p>

            <motion.div
              className="mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-now-teal">
                高效学习
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-now-navy">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </span>
                  <span 
                    className="absolute inset-x-[-12px] inset-y-[-6px] bg-now-yellow -skew-x-6 -z-0 opacity-70"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 0%, #FDDE55 15%, #FDDE55 85%, transparent 100%)',
                      filter: 'blur(1px)'
                    }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-now-navy/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              World Edu 让你在最短时间内掌握学习方法，轻松提升成绩。
              <br className="hidden sm:block" />
              <span className="text-sm sm:text-base">专业团队 · 科学记忆 · 高效课堂 · 成果显著</span>
            </motion.p>

            <motion.div
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <Button
                size="lg"
                onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                className="group bg-white active:bg-white/90 text-now-teal font-black text-base sm:text-lg md:text-xl px-10 sm:px-14 py-6 sm:py-8 rounded-full shadow-lg active:shadow-xl transition-all duration-300 active:scale-95 border-2 border-now-teal w-full sm:w-auto"
              >
                立即报名
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block lg:col-span-2 xl:col-span-3"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 100, rotate: 15 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="w-48 xl:w-64 mx-auto"
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      y: [0, -15, 0],
                      rotate: [5, -5, 5],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <img src={laptopImg} alt="Laptop" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:hidden flex justify-center gap-8 mt-12">
          <motion.div
            className="w-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img src={ipadImg} alt="iPad" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>
          <motion.div
            className="w-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src={laptopImg} alt="Laptop" className="w-full h-auto drop-shadow-2xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-12 left-12 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-now-navy" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 right-12 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-now-teal" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
