import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Counter animation hook
const useCounter = (end: number, duration: number = 2, inView: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);
  
  return count;
};

// StatCard component with counter and underline stroke animation
const StatCard = ({ number, suffix, label, delay }: { number: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCounter(number, 1.5, isInView);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="text-left">
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm md:text-base text-white font-medium">
          {label}
        </div>
      </div>
      
      {/* Animated underline stroke */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.3, ease: "easeOut" }}
        className="h-0.5 bg-white mt-2 origin-left"
      />
    </motion.div>
  );
};

const DataSpeak = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Ken Burns effect - subtle zoom and pan
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const x = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Parallax effect for content
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-visible mx-6 my-8">
      
      {/* Glass Card Container with Rounded Mask Reveal */}
      <motion.div
        initial={{ 
          clipPath: "inset(10% 10% 10% 10% round 60px)",
          opacity: 0
        }}
        whileInView={{ 
          clipPath: "inset(0% 0% 0% 0% round 40px)",
          opacity: 1
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1]
        }}
        className="relative overflow-hidden rounded-[40px] backdrop-blur-sm"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
        }}
      >
        
        {/* Background Image with Ken Burns */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            scale: prefersReducedMotion ? 1 : scale,
            x: prefersReducedMotion ? 0 : x,
            y: prefersReducedMotion ? 0 : y,
            backgroundImage: 'url(/alvin%20hori%20png.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Blue Tint Overlay */}
        <div className="absolute inset-0 z-0 bg-[#03aed2] opacity-50" />
        
        {/* Content with Parallax */}
        <motion.div 
          className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[1400px] relative z-10"
          style={{ y: prefersReducedMotion ? 0 : contentY }}
        >
        
        {/* Content Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          
          {/* Main Title with Stagger and Highlight Sweep */}
          <div className="font-black leading-tight mb-16">
            {/* Line 1 - Smaller */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden text-3xl md:text-4xl lg:text-5xl mb-2"
            >
              <span className="text-white relative z-10">坚持做好教育</span>
              {/* Sweep highlight */}
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
            
            {/* Line 2 - Larger */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-white relative z-10">是我们的使命</span>
              {/* Sweep highlight */}
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>

          {/* Stats with Counter Animation and Stroke Underline */}
          <div className="grid grid-cols-2 gap-8 max-w-lg">
            
            {/* Stat 1 */}
            <StatCard number={6000} suffix="+" label="学生成功案例" delay={0.6} />
            
            {/* Stat 2 */}
            <StatCard number={1000} suffix="+" label="科目A+成绩" delay={0.7} />
            
            {/* Stat 3 */}
            <StatCard number={14} suffix="年" label="教育经验" delay={0.8} />
            
            {/* Stat 4 */}
            <StatCard number={100} suffix="%" label="实体课及格率" delay={0.9} />
            
          </div>

        </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default DataSpeak;
