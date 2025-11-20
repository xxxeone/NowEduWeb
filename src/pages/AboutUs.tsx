import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { ArrowRight, Sparkles, Target, Users, Trophy } from "lucide-react";
import studentClassImg from "@/assets/Studentclass.jpg";
import studentLearnImg from "@/assets/student-learn.jpg";

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-black selection:text-white font-sans" ref={containerRef}>
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Ultra Minimalist & Elegant */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA]">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-6xl mx-auto"
            >
              <motion.div variants={fadeIn} className="mb-12">
                <span className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase">
                  Since 2010
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 mb-12 leading-[1.1]"
              >
                打造马来西亚
                <br />
                <motion.span 
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 cursor-default"
                  whileHover={{ 
                    backgroundImage: "linear-gradient(to right, #03AED2, #FDDE55)",
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  最专业的线上教育平台
                </motion.span>
              </motion.h1>

              <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-gray-200 pt-12">
                <p className="text-lg md:text-xl text-gray-600 font-light max-w-xl leading-relaxed">
                  14年专注，成就卓越。我们不仅仅是补习，更是全方位的成长伙伴。用科技与温度，连接每一位渴望成长的学生。
                </p>
                
                <button 
                  onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-4 text-gray-900 font-medium text-lg hover:opacity-70 transition-opacity"
                >
                  <span className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                  了解更多
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            style={{ opacity }}
            className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-4"
          >
            <div className="w-px h-24 bg-gray-200 overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-full h-1/2 bg-gray-900"
              />
            </div>
          </motion.div>
        </section>

        {/* Image & Philosophy - Magazine Layout */}
        <section id="story" className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] lg:aspect-square overflow-hidden bg-gray-100"
              >
                <img 
                  src={studentLearnImg} 
                  alt="Student Learning" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>

              <div className="space-y-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 leading-tight">
                    从线下到线上，<br/>
                    我们始终坚持教育的本质。
                  </h2>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
                    唤醒灵魂，点燃希望。我们深知每一个孩子都是独特的个体，拥有无限的潜能。我们的使命不仅仅是提升成绩，更是培养他们面对未来的自信与能力。
                  </p>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-3xl font-medium text-gray-900 mb-1">14+</div>
                      <div className="text-xs tracking-widest text-gray-400 uppercase">Years</div>
                    </div>
                    <div>
                      <div className="text-3xl font-medium text-gray-900 mb-1">6k+</div>
                      <div className="text-xs tracking-widest text-gray-400 uppercase">Students</div>
                    </div>
                    <div>
                      <div className="text-3xl font-medium text-gray-900 mb-1">1k+</div>
                      <div className="text-xs tracking-widest text-gray-400 uppercase">A+ Results</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Minimal Cards */}
        <section className="py-24 md:py-32 bg-[#FAFAFA]">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">我们的核心价值</h2>
              <div className="h-px w-24 bg-gray-900" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "结果导向",
                  enTitle: "Results Driven",
                  desc: "通过科学的教学方法和独家记忆法，帮助学生实现成绩的飞跃。"
                },
                {
                  icon: Users,
                  title: "以人为本",
                  enTitle: "People First",
                  desc: "关注每一位学生的心理健康与学习状态，建立亦师亦友的关系。"
                },
                {
                  icon: Trophy,
                  title: "追求卓越",
                  enTitle: "Excellence",
                  desc: "不断打磨教学内容，引入最新科技，只为提供最优质的教育体验。"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group p-8 bg-white border border-gray-100 hover:border-gray-300 transition-colors duration-500"
                >
                  <item.icon className="w-8 h-8 text-gray-900 mb-8 stroke-1" />
                  <h3 className="text-xl font-medium text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">{item.enTitle}</p>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Elegant Dark with Advanced Visuals */}
        <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(3,174,210,0.15),transparent_70%)] animate-pulse-slow" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#FDDE55]/10 to-transparent rounded-full blur-[120px] opacity-30" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-[#03AED2]/10 to-transparent rounded-full blur-[100px] opacity-30" />
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight tracking-tight">
                  准备好开启<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                    学习之旅了吗？
                  </span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
                  加入 World Edu，体验前所未有的高效学习方式。
                </p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <button 
                    onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                    className="group relative px-10 py-5 bg-white text-gray-900 font-bold text-xl rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FDDE55] to-[#03AED2] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-3">
                      马上报名 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="px-10 py-5 text-white/60 hover:text-white font-medium text-lg transition-colors flex items-center gap-2"
                  >
                    返回首页
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
