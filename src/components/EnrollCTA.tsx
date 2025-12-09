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
          <div className="animate-fade-in-up space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight px-2">
              准备好让孩子
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium max-w-3xl mx-auto px-2">
              立即预约免费试课，体验 <span className="text-[#03aed2] font-bold">Now Edu</span> 独家记忆法的魅力
            </p>
            
            {/* CTA Button */}
            <div className="pt-4 md:pt-8">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                className="bg-[#fdde55] active:bg-[#fdd835] text-gray-900 font-bold text-xl sm:text-2xl md:text-3xl px-10 sm:px-16 md:px-20 py-6 sm:py-8 md:py-10 rounded-full shadow-2xl active:shadow-[#fdde55]/40 transition-all duration-300 active:scale-95 border-2 border-gray-900 w-full sm:w-auto"
              >
                免费试课报名
                <ArrowRight className="ml-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 pt-8 md:pt-12 px-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-[#fdde55] rounded-full shadow-lg flex-shrink-0"></div>
                <span className="text-gray-800 font-semibold text-base sm:text-lg">无需注册费</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-[#fdde55] rounded-full shadow-lg flex-shrink-0"></div>
                <span className="text-gray-800 font-semibold text-base sm:text-lg">无隐藏收费</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-3 h-3 bg-[#fdde55] rounded-full shadow-lg flex-shrink-0"></div>
                <span className="text-gray-800 font-semibold text-base sm:text-lg">满意后再报名</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollCTA;
