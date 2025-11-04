import { Trophy } from "lucide-react";
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
          setVisibleItems(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            } else {
              newSet.delete(index);
            }
            return newSet;
          });
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -300px 0px'
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
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold mb-6">
            <Trophy className="w-5 h-5" />
            学生见证
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-chinese-bold">
            我们的 <span className="text-primary">优秀学生</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-chinese-elegant">
            真实成绩，见证每一位学生的成长奇迹
          </p>
        </div>

        {/* Students Gallery */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {students.map((student, index) => (
            <div
              key={index}
              ref={(el) => elementRefs.current[index] = el}
              data-index={index}
              className={`flex items-center justify-center transition-all duration-4000 ease-out transform ${
                visibleItems.has(index) 
                  ? "opacity-100 translate-y-0 translate-x-0 scale-100" 
                  : `opacity-0 translate-y-16 scale-95 ${
                      index % 2 === 0 ? "-translate-x-8" : "translate-x-8"
                    }`
              }`}
            >
              {/* Photo Section - Optimized Size with Better Centering */}
              <div className="group relative w-full max-w-4xl">
                <div className="transform hover:scale-[1.02] transition-all duration-500 mx-auto">
                  {/* Properly Sized Photo with Responsive Design */}
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-auto max-w-[700px] mx-auto rounded-2xl shadow-2xl transition-all duration-500"
                  />
                  {/* 添加发光效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-chinese-bold">
              你也想成为下一位 <span className="text-primary">优秀学生</span> 吗？
            </h3>
            <p className="text-gray-600 text-lg font-chinese-elegant">
              加入我们，让NOW MEMORY独家记忆法助你一臂之力！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;