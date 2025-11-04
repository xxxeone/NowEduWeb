import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EnrollCTA = () => {
  return (
    <section id="enroll" className="py-20 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#fdde55] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#03aed2] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#fdde55]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Content */}
          <div className="animate-fade-in-up space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
              准备好让孩子
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-3xl mx-auto">
              立即预约免费试课，体验 <span className="text-[#03aed2] font-bold">NOW EDU</span> 独家记忆法的魅力
            </p>
            
            {/* CTA Button */}
            <div className="pt-8">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                className="bg-[#fdde55] hover:bg-[#fdd835] text-gray-900 font-bold text-2xl md:text-3xl px-16 md:px-20 py-8 md:py-10 rounded-full shadow-2xl hover:shadow-[#fdde55]/40 transition-all duration-300 hover:scale-105 border-2 border-gray-900"
              >
                免费试课报名
                <ArrowRight className="ml-4 h-7 w-7 md:h-8 md:w-8" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-12">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#fdde55] rounded-full shadow-lg"></div>
                <span className="text-gray-800 font-semibold text-lg">无需注册费</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#fdde55] rounded-full shadow-lg"></div>
                <span className="text-gray-800 font-semibold text-lg">无隐藏收费</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#fdde55] rounded-full shadow-lg"></div>
                <span className="text-gray-800 font-semibold text-lg">满意后再报名</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollCTA;
