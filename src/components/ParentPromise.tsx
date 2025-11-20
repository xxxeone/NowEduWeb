import { Card, CardContent } from "@/components/ui/card";
import { Heart, TrendingUp, Shield, Users } from "lucide-react";

const ParentPromise = () => {
  const promises = [
    {
      icon: TrendingUp,
      title: "成绩提升",
      description: "通过有效的框架和教学方法，让成绩真正进步",
    },
    {
      icon: Heart,
      title: "学习动力",
      description: "让课堂变得有趣且相关，激发主动学习的热情",
    },
    {
      icon: Shield,
      title: "家长满意",
      description: "优质服务、清晰进度更新，成为值得信赖的伙伴",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/Studentnewbg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Blue Tint Overlay */}
      <div className="absolute inset-0 z-0 bg-[#03aed2] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up text-white">
            <div className="space-y-4 text-center">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-white/20 to-gray-100/20 px-4 py-2 rounded-full text-sm font-semibold text-white">
                  我们的使命
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                我们是新世代的守护者
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                我们知道现代家长要兼顾工作、家务。我们的使命就是减轻这个负担。
              </p>
            </div>

            {/* Promises Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {promises.map((promise, index) => (
                <Card
                  key={index}
                  className="border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="bg-gradient-to-r from-white/20 to-gray-100/20 rounded-xl p-3 flex-shrink-0">
                      <promise.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {promise.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-sm">
                        {promise.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-white flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    我们的承诺
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    给学生：更好的学习体验，建立信心、参与感和真实成果。<br/>
                    给家长：通过优质服务、清晰进度更新，带来安心，成为值得信赖的伙伴。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentPromise;
