import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import spaceVideo from '@/assets/space-bg.mp4';

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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-16 md:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={spaceVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 container max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <div className="flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <motion.div
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-black tracking-wide"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)'
                }}
              >
                Now Edu
              </span>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 font-medium px-4"
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-white">
                高效学习
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 text-white">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </span>
                  <span 
                    className="absolute inset-x-[-12px] inset-y-[-6px] bg-white/20 -skew-x-6 -z-0 blur-lg"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              Now Edu 让你在最短时间内掌握学习方法，轻松提升成绩。
              <br className="hidden sm:block" />
              <span className="text-sm sm:text-base text-white/70">专业团队 · 科学记忆 · 高效课堂 · 成果显著</span>
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
                className="group bg-white hover:bg-white/90 active:bg-white/80 text-black font-black text-base sm:text-lg md:text-xl px-10 sm:px-14 py-6 sm:py-8 rounded-full shadow-lg shadow-white/30 hover:shadow-white/40 active:shadow-xl transition-all duration-300 active:scale-95 border-2 border-white w-full sm:w-auto"
              >
                立即报名
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-12 left-12 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 right-12 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-white animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
