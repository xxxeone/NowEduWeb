import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, Heart, BookOpen, TrendingUp, Star, Zap, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Professional & Clean */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[#03AED2]">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDDE55] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#03AED2] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="inline-block px-6 py-2 bg-[#FDDE55] text-gray-900 font-bold text-sm uppercase tracking-wider rounded-full">
                  About Us
                </span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                关于
                <span className="block text-[#FDDE55]">World Edu</span>
              </h1>
              
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
                打造马来西亚最专业的线上教育平台
                <br />
                <span className="text-[#FDDE55] font-medium">14年专注，成就卓越</span>
              </p>
            </motion.div>
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" className="w-full h-auto">
              <path fill="white" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
            </svg>
          </div>
        </section>

        {/* Mission & Vision - Side by Side Professional Layout */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#03AED2]/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative p-8 md:p-12">
                  <div className="w-16 h-16 bg-[#03AED2] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                    我们的使命
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    致力于为每一位学生提供<span className="font-semibold text-gray-900">个性化、高效</span>的线上学习体验。
                  </p>
                  <ul className="space-y-4">
                    {[
                      "打造最佳学习成果",
                      "培养自信心与学习兴趣",
                      "为未来发展奠定基础"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#03AED2] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FDDE55]/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
                <div className="relative p-8 md:p-12">
                  <div className="w-16 h-16 bg-[#FDDE55] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Heart className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                    我们的愿景
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    成为<span className="font-semibold text-gray-900">马来西亚最受信赖</span>的线上教育品牌。
                  </p>
                  <ul className="space-y-4">
                    {[
                      "科技赋能教育创新",
                      "让优质教育触手可及",
                      "培养国际化创新人才"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#FDDE55] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section - Impressive Numbers */}
        <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FDDE55] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#03AED2] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                用成绩说话
              </h2>
              <p className="text-xl text-gray-400">Results Speak Loudest</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "14", suffix: "+", label: "年教育经验", icon: Award },
                { number: "6,000", suffix: "+", label: "成功学生", icon: Users },
                { number: "1,000", suffix: "+", label: "科A+成绩", icon: TrendingUp },
                { number: "11", suffix: "", label: "专业教师", icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FDDE55]/10 to-[#03AED2]/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative p-8 text-center">
                    <stat.icon className="w-10 h-10 text-[#FDDE55] mx-auto mb-4" />
                    <div className="text-5xl md:text-6xl font-black text-white mb-2">
                      {stat.number}<span className="text-[#FDDE55]">{stat.suffix}</span>
                    </div>
                    <div className="text-lg text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Professional & Action-Oriented */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-[#03AED2] to-[#0396b8] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FDDE55] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                准备好开启
                <br />
                <span className="text-[#FDDE55]">学习之旅了吗？</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
                立即加入World Edu，让我们一起创造更好的未来
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                  className="group bg-[#FDDE55] hover:bg-[#fdd835] text-gray-900 font-black text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-[#FDDE55]/50 transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <span>立即咨询</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-12 py-5 rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105"
                >
                  返回首页
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
