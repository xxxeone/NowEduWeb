import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Brain, Users, Award, TrendingUp, Zap, Target } from 'lucide-react';
import { useMotionSettings, MOTION_CONFIG } from '@/hooks/useMotionSettings';

interface StatCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  delay: number;
  position: { x: number; y: number };
}

const STATS: StatCard[] = [
  {
    id: 'students',
    icon: Users,
    value: '6000+',
    label: '学生选择',
    delay: 0.2,
    position: { x: 0, y: 0 }
  },
  {
    id: 'success',
    icon: Award,
    value: '100%',
    label: '及格保证',
    delay: 0.4,
    position: { x: 160, y: 50 }
  },
  {
    id: 'grades',
    icon: TrendingUp,
    value: '1000+',
    label: 'A+ 成绩',
    delay: 0.6,
    position: { x: 80, y: 150 }
  },
  {
    id: 'experience',
    icon: Brain,
    value: '14年',
    label: '教育经验',
    delay: 0.8,
    position: { x: 200, y: 200 }
  },
  {
    id: 'method',
    icon: Zap,
    value: 'NOW',
    label: 'MEMORY',
    delay: 1.0,
    position: { x: 20, y: 280 }
  },
  {
    id: 'results',
    icon: Target,
    value: '3X',
    label: '更快掌握',
    delay: 1.2,
    position: { x: 180, y: 350 }
  }
];

const FloatingStats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion, enableHeavyAnimations } = useMotionSettings();
  
  // Mouse position for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Handle mouse movement for magnetic effect
  useEffect(() => {
    if (prefersReducedMotion || !enableHeavyAnimations) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const distanceX = (e.clientX - centerX) * 0.1;
      const distanceY = (e.clientY - centerY) * 0.1;
      
      mouseX.set(distanceX);
      mouseY.set(distanceY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const currentRef = containerRef.current;
    window.addEventListener('mousemove', handleMouseMove);
    currentRef?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      currentRef?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, prefersReducedMotion, enableHeavyAnimations]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: MOTION_CONFIG.stagger.medium,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.95,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        ...MOTION_CONFIG.spring.gentle,
        duration: MOTION_CONFIG.slow / 1000
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.05,
      rotateY: 5,
      boxShadow: '0 20px 40px rgba(3, 174, 210, 0.15), 0 0 0 1px rgba(3, 174, 210, 0.24)',
      transition: {
        type: "spring" as const,
        ...MOTION_CONFIG.spring.bouncy,
        duration: MOTION_CONFIG.fast / 1000
      }
    }
  };

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 max-w-sm w-full">
          {STATS.slice(0, 4).map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#03AED2] to-[#0369a1] rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Mobile Simple Grid */}
      <div className="block md:hidden w-full">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {STATS.slice(0, 4).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#03AED2] to-[#0369a1] rounded-lg flex items-center justify-center">
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="text-lg font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-xs text-slate-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop Floating Layout */}
      <motion.div
        ref={containerRef}
        className="relative w-full h-[500px] max-w-xs mx-auto sm:max-w-sm lg:max-w-md perspective-1000 hidden md:block"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          x: springX,
          y: springY
        }}
      >
      {/* Floating stat cards */}
      {STATS.map((stat) => {
        const Icon = stat.icon;
        
        return (
          <motion.div
            key={stat.id}
            className="absolute"
            style={{
              left: `${stat.position.x}px`,
              top: `${stat.position.y}px`
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 cursor-pointer transform-gpu min-w-[120px]"
              variants={hoverVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.div 
                  className="w-8 h-8 bg-gradient-to-br from-[#03AED2] to-[#0369a1] rounded-lg flex items-center justify-center"
                  whileHover={{ 
                    rotate: 12,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </motion.div>
              </div>
              
              <motion.div 
                className="text-xl font-bold text-slate-900 mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: stat.delay + 0.2 }}
              >
                {stat.value}
              </motion.div>
              
              <motion.div 
                className="text-xs text-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: stat.delay + 0.3 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Background ambient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#03AED2]/10 via-transparent to-transparent rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      />
      
      {/* Subtle particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#03AED2]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </motion.div>
    </>
  );
};

export default FloatingStats;