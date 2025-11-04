import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen, Brain, Zap, Shield, Target, Sparkles, Award, Users, TrendingUp } from "lucide-react";
import FloatingElements from "./FloatingElements";
import Typewriter from "./Typewriter";

const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-400 animate-gradient">
      {/* Floating Elements Background */}
      <FloatingElements />
      
      <div className="container mx-auto px-4 py-12 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="space-y-8 animate-slide-up-fade">
            {/* Main Headline */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 animate-pulse-glow">
                <Award className="w-7 h-7 text-yellow-300" />
                <span className="text-white/90 font-bold text-xl">14年教育专家</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                  让学习
                </h1>
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <Typewriter
                    words={["变得高效", "变得有趣", "变得简单", "变得不无聊"]}
                    className="bg-gradient-to-r from-yellow-200 via-white to-cyan-100 bg-clip-text text-transparent animate-gradient"
                    speed={200}
                    deleteSpeed={120}
                    pauseTime={3000}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-3">
                  <Brain className="w-8 h-8 text-yellow-300 animate-pulse" />
                  <span className="text-2xl font-bold">NOW MEMORY独家记忆法</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button
                size="lg"
                onClick={scrollToEnroll}
                className="bg-gradient-to-r from-white to-gray-100 hover:from-yellow-100 hover:to-white text-teal-600 font-bold text-2xl px-12 py-8 rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <BookOpen className="mr-4 h-8 w-8" />
                立即免费试课
                <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-bold text-2xl px-12 py-8 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-4 h-7 w-7" />
                观看介绍视频
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 text-white/90">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-300" />
                <span className="text-xl font-semibold">无需注册费</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-blue-300" />
                <span className="text-xl font-semibold">100%及格保证</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-300" />
                <span className="text-xl font-semibold">即时效果可见</span>
              </div>
            </div>
          </div>

          {/* Right Side - Empty space for visual balance */}
          <div className="hidden lg:block"></div>
        </div>
        
        {/* Bottom Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 animate-float">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-white/60 mr-2" />
              <div className="text-2xl font-bold text-white">6000+</div>
            </div>
            <div className="text-white/60 text-sm">位学生选择</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-white/60 mr-2" />
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">1000+</div>
            </div>
            <div className="text-white/60 text-sm">科A+成绩</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center mb-2">
              <Target className="w-5 h-5 text-white/60 mr-2" />
              <div className="text-2xl font-bold text-white">100%</div>
            </div>
            <div className="text-white/60 text-sm">实体课及格率</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300 animate-float" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-white/60 mr-2" />
              <div className="text-2xl font-bold text-white">14年</div>
            </div>
            <div className="text-white/60 text-sm">教育经验</div>
          </div>
        </div>

        {/* NOW MEMORY Feature Section */}
        <div className="bg-gradient-to-r from-white/5 to-cyan-100/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 animate-pulse-glow">
          <div className="flex items-center gap-3 mb-3">
            <Brain className="w-6 h-6 text-yellow-300 animate-pulse" />
            <h3 className="text-lg font-bold text-white">NOW MEMORY 记忆法</h3>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            独创一秒记忆技巧，让复杂概念变得简单易记
          </p>
          <div className="flex items-center gap-2 text-yellow-200">
            <Zap className="w-4 h-4" />
            <span className="font-medium text-sm">适用于 Form 1 - Form 5 全科目</span>
          </div>
        </div>
        </div>
        
        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;