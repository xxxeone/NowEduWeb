import { BookOpen, Globe, Calculator, History, Languages, Briefcase, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Subjects = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const subjects = [
    { 
      icon: History, 
      code: "历史", 
      name: "Sejarah"
    },
    { 
      icon: Globe, 
      code: "地理", 
      name: "Geografi"
    },
    { 
      icon: Languages, 
      code: "马来文", 
      name: "Bahasa Melayu",
      subtitle: "含写作专项"
    },
    { 
      icon: BookOpen, 
      code: "英文", 
      name: "English"
    },
    { 
      icon: Calculator, 
      code: "数学", 
      name: "Mathematics"
    },
    { 
      icon: Plus, 
      code: "附加数学", 
      name: "Add Math"
    },
    { 
      icon: Briefcase, 
      code: "会计原理", 
      name: "Prinsip Perakaunan"
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      
      {/* Background Image with Mask-in effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ 
          x: -100, 
          opacity: 0, 
          scale: 1.15,
          clipPath: 'inset(20% 20% 20% 20% round 40px)'
        }}
        whileInView={{ 
          x: 0, 
          opacity: 1, 
          scale: 1.00,
          clipPath: 'inset(0% 0% 0% 0% round 0px)'
        }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background image layer with auto movement */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/Studentback.jpg)' }}
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0],
          }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            },
            y: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        {/* Yellow tint overlay */}
        <div className="absolute inset-0 bg-[#FDB913]/30" />
      </motion.div>

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* SPM Subjects Section - Left Aligned with Slide In Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              World Edu · 全科覆盖
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              SPM 主要科目
              <br />
              <span className="text-white">
                Form 1 至 Form 5
              </span>
            </h2>
            <p className="text-base text-white max-w-xl leading-relaxed">
              系统化教学 · 高效提分 · 专业师资
            </p>
          </motion.div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1000px]">
              {subjects.map((subject, index) => {
                const Icon = subject.icon;
                
                return (
                  <motion.div
                    key={subject.code}
                    initial={{ 
                      opacity: 0, 
                      y: prefersReducedMotion ? 0 : 20,
                      scale: 0.85,
                      filter: 'blur(8px)',
                      clipPath: 'inset(10% 10% 10% 10% round 16px)'
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1.03,
                      filter: 'blur(0px)',
                      clipPath: 'inset(0% 0% 0% 0% round 16px)'
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="group relative"
                  >
                    <motion.div
                      initial={{ scale: 1.03 }}
                      animate={{ scale: 1.00 }}
                      transition={{ duration: 0.4, delay: index * 0.08 + 0.5, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={prefersReducedMotion ? {} : { y: -6 }}
                      className="relative h-full rounded-2xl overflow-hidden cursor-pointer bg-white border-2 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:border-[#FDB913] backdrop-blur-sm"
                    >
                      
                      {/* 3D Shadow effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-200/20" />
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FDB913]/30 via-[#FDB913]/40 to-[#FDB913]/30" />
                      
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(135deg, transparent 0%, rgba(253,185,19,0.2) 50%, transparent 100%)',
                          transform: 'translateX(-100%)',
                        }}
                        animate={{
                          transform: 'translateX(100%)'
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-5 flex flex-col justify-between min-h-[160px]">
                        
                        {/* Icon - Using brand yellow */}
                        <motion.div 
                          whileHover={prefersReducedMotion ? {} : { rotate: [0, -8, 8, 0], scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br from-[#FDB913] to-[#f5a623] shadow-lg"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>

                        {/* Text content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#0f172a] mb-1 leading-tight">
                            {subject.code}
                          </h3>
                          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            {subject.name}
                          </p>
                          {subject.subtitle && (
                            <p className="text-xs text-gray-500 mt-1.5">
                              {subject.subtitle}
                            </p>
                          )}
                        </div>

                        {/* Arrow indicator with brand yellow */}
                        <motion.div
                          className="absolute bottom-4 right-4 w-7 h-7 rounded-full bg-[#FDB913]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.15 }}
                        >
                          <span className="text-white text-sm font-bold">→</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Subjects;
