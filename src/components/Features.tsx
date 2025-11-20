import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import studentClassImg from "@/assets/Studentclass.jpg";
import studentTeacherImg from "@/assets/Studentteacher.png";
import resultImg from "@/assets/result.jpg";

// Feature Card Component with Advanced Animations
const FeatureCard = ({ 
  title, 
  subtitle, 
  badge, 
  description, 
  image, 
  index 
}: { 
  title: string; 
  subtitle?: string; 
  badge: string; 
  description: string; 
  image: string; 
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse position tracking for spotlight and 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Badge magnetic effect
  const badgeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const badgeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  // Parallax transforms
  const titleX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const titleY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);
  const descX = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);
  const descY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);

  // Spotlight position
  const spotlightX = useSpring(0, springConfig);
  const spotlightY = useSpring(0, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Title word stagger animation
  const titleWords = subtitle ? [title, subtitle] : [title];
  
  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden cursor-pointer group min-h-[400px] md:min-h-[500px]"
      style={{ 
        perspective: "1000px",
        rotateX: prefersReducedMotion ? 0 : rotateX as any,
        rotateY: prefersReducedMotion ? 0 : rotateY as any,
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.92, 
        clipPath: "inset(10% 10% 10% 10% round 24px)",
        filter: "blur(8px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1, 
        clipPath: "inset(0% 0% 0% 0% round 24px)",
        filter: "blur(0px)"
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
    >
      {/* Gradient border sweep animation */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `conic-gradient(from var(--angle), transparent 0%, #2DD4BF 10%, #FBD52D 20%, transparent 30%, transparent 100%)`,
            padding: "2px",
          }}
          animate={isHovered && !prefersReducedMotion ? { 
            "--angle": "360deg" 
          } : { 
            "--angle": "0deg" 
          }}
          transition={{ 
            duration: 3, 
            repeat: isHovered ? Infinity : 0,
            ease: "linear" 
          }}
        />
      </div>

      {/* Main card with shadow */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
        {/* Ken Burns background with noise overlay */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
            filter: "brightness(0.7)"
          }}
          animate={isInView && !prefersReducedMotion ? {
            scale: [1.06, 1.00],
            x: ["-3%", "0%"],
            y: ["-3%", "0%"]
          } : {}}
          transition={{ 
            duration: 8, 
            ease: "easeOut",
            delay: 0.5
          }}
        >
          {/* Noise texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Radial ambient glow */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.08) 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, rgba(251, 213, 45, 0.08) 0%, transparent 50%)`
            }}
          />
        </motion.div>

        {/* Spotlight effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle 400px at ${spotlightX}px ${spotlightY}px, rgba(255, 255, 255, 0.15), transparent 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ opacity: { duration: 0.3 } }}
        />

        {/* Content with parallax layers */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-16 min-h-[400px] md:min-h-[500px]">
          {/* Title with word stagger */}
          <div>
            {titleWords.map((word, wordIndex) => (
              <motion.h3
                key={wordIndex}
                className="text-4xl md:text-6xl font-black text-white leading-[1.2]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + wordIndex * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  // Parallax depth layer 1 (title)
                  x: prefersReducedMotion ? 0 : titleX,
                  y: prefersReducedMotion ? 0 : titleY,
                }}
              >
                {word}
              </motion.h3>
            ))}
          </div>

          {/* Badge and description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            {/* Magnetic badge with parallax */}
            <motion.div 
              className="inline-block bg-white px-6 py-2 rounded-full"
              style={{
                x: prefersReducedMotion ? 0 : badgeX,
                y: prefersReducedMotion ? 0 : badgeY,
                // Parallax depth layer 2 (badge)
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="text-sm font-black text-now-navy">{badge}</span>
            </motion.div>
            
            {/* Description fade in on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                // Parallax depth layer 3 (description - deepest)
                x: prefersReducedMotion ? 0 : descX,
                y: prefersReducedMotion ? 0 : descY,
              }}
            >
              <p className="text-lg md:text-xl text-white font-semibold max-w-2xl">
                {description}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Darkening overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "14年",
      subtitle: "教学经验团队",
      badge: "专业有温度",
      description: "资深专业教师团队，不只传授知识，更懂得激发学习动力、调节情绪、建立信心",
      image: studentTeacherImg,
    },
    {
      title: "NOW MEMORY",
      subtitle: "独家记忆法",
      badge: "专利记忆系统",
      description: "14年专研的记忆框架，让复杂知识变得简单易懂，学习效率提升3倍以上",
      image: studentClassImg,
    },
    {
      title: "成绩显著",
      subtitle: "提升保证",
      badge: "看得见的进步",
      description: "历史从不及格到70+，数学从32分到50分，真实可见的学习成果让家长安心",
      image: resultImg,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-now-navy mb-4">
            为什么选择 <span className="text-now-teal">World Edu</span>？
          </h2>
          <p className="text-lg md:text-xl text-now-navy/70">
            我们不只是补习班，我们是孩子成长路上的最佳伙伴
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
