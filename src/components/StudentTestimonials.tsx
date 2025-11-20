import { useEffect, useRef, useState } from "react";

// 导入学生照片
import student1 from "@/assets/Top Student/曾凯宁 11A.png";
import student2 from "@/assets/Top Student/邓如淇 10A.png";
import student3 from "@/assets/Top Student/叶善蓉 9A.png";
import student4 from "@/assets/Top Student/张家源 9A.png";
import student5 from "@/assets/Top Student/刘柯彤 8A.png";
import student6 from "@/assets/Top Student/王思绫 8A.png";
import student7 from "@/assets/Top Student/陈世宇 8A.png";
import student8 from "@/assets/Top Student/陈朝钇 7A.png";

interface Student {
  name: string;
  results: string;
  photo: string;
}

const StudentTestimonials = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  const students: Student[] = [
    {
      name: "曾凯宁",
      results: "11A",
      photo: student1,
    },
    {
      name: "邓如淇",
      results: "10A",
      photo: student2,
    },
    {
      name: "叶善蓉",
      results: "9A",
      photo: student3,
    },
    {
      name: "张家源",
      results: "9A",
      photo: student4,
    },
    {
      name: "刘柯彤",
      results: "8A",
      photo: student5,
    },
    {
      name: "王思绫",
      results: "8A",
      photo: student6,
    },
    {
      name: "陈世宇",
      results: "8A",
      photo: student7,
    },
    {
      name: "陈朝钇",
      results: "7A",
      photo: student8,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          
          if (entry.isIntersecting) {
            // 同时更新 visibleItems 和 animatedItems
            setVisibleItems(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
            
            setAnimatedItems(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -200px 0px'
      }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-40">
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
        {/* Larger floating elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-pink-200/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 font-chinese-bold">
            我们的 <span className="text-primary">优秀学生</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-chinese-elegant">
            真实成绩，见证每一位学生的成长奇迹
          </p>
        </div>

        {/* Students Gallery */}
        <div className="space-y-1 max-w-full mx-auto">
          {students.map((student, index) => (
            <div
              key={index}
              ref={(el) => elementRefs.current[index] = el}
              data-index={index}
              className={`flex items-center transition-all duration-4000 ease-out transform ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } ${
                animatedItems.has(index) 
                  ? "opacity-100 translate-y-0 translate-x-0 scale-100" 
                  : `opacity-0 translate-y-16 scale-95 ${
                      index % 2 === 0 ? "-translate-x-8" : "translate-x-8"
                    }`
              }`}
            >
              {/* Photo Section - Extra Large Original Image with Glow */}
              <div className="group relative" style={{ background: 'transparent' }}>
                <div className="transform hover:scale-105 transition-all duration-500" style={{ background: 'transparent' }}>
                  {/* Maximum Size Original Photo with Neon Glow */}
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full max-w-[600px] md:max-w-[750px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1100px] transition-all duration-500"
                    style={{ 
                      background: 'transparent',
                      backgroundColor: 'transparent',
                      backgroundImage: 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-[#fdde55] rounded-3xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-row items-center justify-center gap-8 md:gap-12 flex-wrap">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 font-chinese-bold">
                你也想成为下一位 <span className="text-gray-800">优秀学生吗？</span>
              </h3>
              <button 
                onClick={() => window.open('https://wa.link/c5uaq8', '_blank')}
                className="bg-white text-gray-800 hover:bg-gray-100 font-bold text-xl md:text-2xl px-10 py-3 md:px-12 md:py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 whitespace-nowrap border-2 border-gray-800"
              >
                立即报名！
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;