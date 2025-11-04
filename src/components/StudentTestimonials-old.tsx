import { Trophy } from "lucide-react";

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
  const testimonials: StudentTestimonial[] = [
    {
      name: "曾凯宁",
      grade: "Form 5",
      results: "11A",
      photo: student1,
      testimonial: "NOW MEMORY的记忆法让我在SPM中取得了11A的优异成绩！老师的独特教学方法让复杂的概念变得简单易懂，我再也不用死记硬背了。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "生物", "历史", "地理", "道德", "华文", "美术"],
      improvement: "从平均70分提升到90分以上"
    },
    {
      name: "邓如淇",
      grade: "Form 5",
      results: "10A",
      photo: student2,
      testimonial: "感谢NOW EDU的老师们！通过系统化的学习方法，我成功获得了10A的成绩。特别是数学和科学科目，提升非常明显。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "生物", "历史", "地理", "道德", "华文"],
      improvement: "整体成绩提升35%"
    },
    {
      name: "叶善蓉",
      grade: "Form 5",
      results: "9A",
      photo: student3,
      testimonial: "NOW MEMORY独家记忆法真的很神奇！我原来最怕的历史和地理现在都能轻松拿A。老师们很有耐心，教学方式很有趣。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "历史", "地理", "道德", "华文"],
      improvement: "从不及格到全科优秀"
    },
    {
      name: "张家源",
      grade: "Form 5", 
      results: "9A",
      photo: student4,
      testimonial: "在NOW EDU学习的这两年里，我不仅成绩提升了，学习兴趣也大大增加。老师的教学很生动，让我爱上了学习。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "生物", "历史", "地理", "道德"],
      improvement: "数学从C提升到A"
    },
    {
      name: "刘柯彤",
      grade: "Form 4",
      results: "8A",
      photo: student5,
      testimonial: "NOW EDU的在线课程非常方便，我可以随时复习。老师们的解释很清楚，让我对每个科目都有了更深的理解。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "生物", "历史", "道德"],
      improvement: "平均分从65分到85分"
    },
    {
      name: "王思绫",
      grade: "Form 4",
      results: "8A", 
      photo: student6,
      testimonial: "感谢NOW MEMORY的记忆技巧！现在我能够轻松记住大量的知识点，考试再也不紧张了。老师们很关心每个学生的进步。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "生物", "历史", "华文"],
      improvement: "记忆效率提升50%"
    },
    {
      name: "陈世宇",
      grade: "Form 4",
      results: "8A",
      photo: student7,
      testimonial: "NOW EDU的学习环境很棒，同学们都很积极。通过小组讨论和老师的指导，我的成绩稳步提升，对未来充满信心。",
      subjects: ["BM", "BI", "数学", "物理", "化学", "生物", "历史", "道德"],
      improvement: "从班级中等到前三名"
    },
    {
      name: "陈朝钇",
      grade: "Form 3",
      results: "7A",
      photo: student8,
      testimonial: "虽然我还在Form 3，但已经能感受到NOW MEMORY方法的威力。老师教的记忆技巧让我学习更有效率，为SPM做好了准备。",
      subjects: ["BM", "BI", "数学", "科学", "历史", "地理", "道德"],
      improvement: "学习效率提升40%"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
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
            从11A到7A，见证每一位学生的成长奇迹
          </p>
          <div className="mt-8 flex justify-center items-center gap-8 text-sm text-muted-foreground font-chinese-modern">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>100%真实成绩</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>官方认证</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-green-500" />
              <span>持续进步</span>
            </div>
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((student, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 hover:border-primary/30 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Student Photo */}
                <div className="relative overflow-hidden">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    {student.results}
                  </div>
                  {/* Grade Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full font-semibold text-sm">
                    {student.grade}
                  </div>
                </div>

                <div className="p-6">
                  {/* Student Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2 font-chinese-bold">
                    {student.name}
                  </h3>

                  {/* Improvement */}
                  <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block font-chinese-modern">
                    {student.improvement}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-gray-600 text-sm leading-relaxed mb-4 font-chinese-elegant">
                    "{student.testimonial}"
                  </blockquote>

                  {/* Subjects */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-chinese-modern">优秀科目：</p>
                    <div className="flex flex-wrap gap-1">
                      {student.subjects.slice(0, 6).map((subject, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium font-chinese-modern"
                        >
                          {subject}
                        </span>
                      ))}
                      {student.subjects.length > 6 && (
                        <span className="text-xs text-gray-500 px-2 py-1 font-chinese-modern">
                          +{student.subjects.length - 6}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2 font-chinese-modern">满意度100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-cyan-100/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-chinese-bold">
              你也想成为下一位 <span className="text-primary">优秀学生</span> 吗？
            </h3>
            <p className="text-gray-600 mb-6 font-chinese-elegant">
              加入我们，让NOW MEMORY独家记忆法助你一臂之力！
            </p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 font-chinese-modern">
                <Trophy className="w-4 h-4 text-yellow-500" />
                <span>平均提升35%</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-chinese-modern">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>100%学生满意</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 font-chinese-modern">
                <Award className="w-4 h-4 text-blue-500" />
                <span>官方认证成绩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
