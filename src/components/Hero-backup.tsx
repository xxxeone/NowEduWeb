import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import Typewriter from "./Typewriter";
import FloatingStats from "./FloatingStats";
import HowItWorks from "./HowItWorks";
import { useMotionSettings, MOTION_CONFIG } from "@/hooks/useMotionSettings";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const { prefersReducedMotion, enableHeavyAnimations } = useMotionSettings();

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Spring physics for smooth animations
  const springConfig = { damping: 30, stiffness: 400 };
  const ySpring = useSpring(y, springConfig);

  const scrollToEnroll = () => {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: MOTION_CONFIG.stagger.medium,
        delayChildren: 0.2
      }
    }
  };

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        ...MOTION_CONFIG.spring.gentle,
        duration: MOTION_CONFIG.slow / 1000
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.98,
      letterSpacing: '0.1em'
    },
    visible: {
      opacity: 1,
      scale: 1,
      letterSpacing: '0em',
      transition: {
        type: "spring" as const,
        ...MOTION_CONFIG.spring.gentle,
        duration: 1.2
      }
    }
  };

  const ctaVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      boxShadow: '0 4px 20px rgba(3, 174, 210, 0)'
    },
    visible: {
      opacity: 1,
      y: 0,
      boxShadow: '0 8px 40px rgba(3, 174, 210, 0.3)',
      transition: {
        type: "spring" as const,
        ...MOTION_CONFIG.spring.bouncy,
        delay: 0.8
      }
    },
    hover: {
      y: -8,
      scale: 1.05,
      rotate: 2,
      boxShadow: '0 20px 60px rgba(3, 174, 210, 0.4)',
      transition: {
        type: "spring" as const,
        ...MOTION_CONFIG.spring.bouncy,
        duration: MOTION_CONFIG.fast / 1000
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <>
      <motion.section 
        ref={containerRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={prefersReducedMotion ? {} : { y: ySpring, opacity, scale }}
        data-motion={prefersReducedMotion ? "off" : "on"}
      >
        {/* Background with brand colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDDE55] via-[#FDDE55] to-[#f59e0b]" />
        
        {/* Ambient background elements */}
        {enableHeavyAnimations && (
          <>
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#03AED2]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.4, 1],
                x: [0, -30, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 5
              }}
            />
          </>
        )}

        <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
          <motion.div 
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left space-y-8">
                {/* Brand Title with sophisticated entrance */}
                <div className="space-y-4">
                  <motion.h1 
                    className="text-6xl md:text-7xl lg:text-8xl font-black text-[#03AED2] leading-none tracking-tight"
                    variants={titleVariants}
                  >
                    NOW EDU
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
                    variants={slideUpVariants}
                  >
                    让学习变得
                  </motion.h2>
                  
                  <motion.div 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900"
                    variants={slideUpVariants}
                  >
                    <Typewriter
                      words={["超级有趣!", "轻松简单!", "高效快速!", "不再无聊!"]}
                      className="text-slate-900"
                      speed={150}
                      deleteSpeed={100}
                      pauseTime={2500}
                    />
                  </motion.div>
                </div>

                {/* Premium CTA Button */}
                <motion.div className="pt-8">
                  <motion.button
                    onClick={scrollToEnroll}
                    className="group relative bg-[#03AED2] hover:bg-[#0369a1] text-white font-bold text-xl px-8 py-6 rounded-full overflow-hidden transition-colors duration-300"
                    variants={ctaVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {/* Button background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#03AED2] to-[#0369a1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Button content */}
                    <div className="relative flex items-center gap-3">
                      <span>免费体验 Now Edu</span>
                      <motion.div 
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                      <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileHover={{
                        scale: 1.1,
                        opacity: 0,
                        transition: { duration: 0.6 }
                      }}
                      style={{
                        background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)"
                      }}
                    />
                  </motion.button>
                </motion.div>
              </div>

              {/* Right Content - Premium Floating Stats */}
              <motion.div 
                className="relative h-[500px] lg:h-[600px]"
                variants={slideUpVariants}
              >
                <FloatingStats />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        {!prefersReducedMotion && (
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-[#03AED2]/70 rounded-full flex justify-center bg-gradient-to-b from-[#03AED2]/40 to-transparent"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-1 h-3 bg-gradient-to-b from-[#03AED2] to-[#0369a1] rounded-full mt-2"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Bottom Wave */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: MOTION_CONFIG.easing.smooth }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <motion.path
              fill="#ffffff"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
            />
          </svg>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <HowItWorks />
    </>
  );
};

export default Hero;