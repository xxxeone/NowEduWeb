import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface TestimonialData {
  id: string;
  name: string;
  grade: string;
  improvement: string;
  testimonial: string;
  image: string;
}

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // 真实学生见证数据
  const testimonials: TestimonialData[] = [
    {
      id: "1",
      name: "曾凯宁",
      grade: "SPM 优异生",
      improvement: "11A",
      testimonial: "世界教育让我找回目标！我是曾凯宁，在世界教育补了3年。在SPM前，我是一个比较懒散，而且没有目标奋斗的学生。很感谢世界教育的老师在我在考试前，用心准备的多样班，让我在复习时不会漫失方向。在这里，我最感感谢的老师是Ms Tee，一个自发我很多的老师。在我遇到问题的她耐心地为我解释，并且做一盏灯一样指引我。我相告都坐复习上让到困难而且上课跟以多心的人来学习，因为这里的老师都很关心每个学生上课的情况。",
      image: "/src/assets/testimonials/ceng-kai-ning.jpg"
    },
    {
      id: "2",
      name: "邓如淇", 
      grade: "SPM 优异生",
      improvement: "10A",
      testimonial: "在这里，学习更高效！我是邓如淇，在这世界补了5年。我其实在进多补心心过的，最后还是选择留在Now Edu，因为Now Edu提供了最适合我的学习方法，而且资料简洁明了，常我到下很多时间。我更想感谢Ms Elynn全体下特地开班教导我们不强的部分，也会在我迷失时开导我。英文老师Mr Chin在我在上有一手，成功使我胜的英文作文升级；历史老师Ms Ling的唱歌记忆法好用，好听好唱好记。我会推存那些无法自律通过自读的学生来世界教育上课。",
      image: "/src/assets/testimonials/deng-ru-qi.jpg"
    },
    {
      id: "3",
      name: "刘柯彤",
      grade: "SPM 优异生", 
      improvement: "8A",
      testimonial: "网课，也能这么有效！我是刘柯彤，在Now Edu网课补了3年。这里的老师可以提供优异的学习氛围，让同学们更积极。我最感感谢的老师说Ms Ling 和Ms Elynn。在我Form 3那年，原本的历史成绩不及格，后来是Ms Ling 启发我对历史的兴趣，让我在之后的考试考到了70+。我想感谢Ms Elynn，因为她经营很用心也很耐心地教导我，也经常鼓励我们。我推荐为SPM备考的学生来Now Edu，这里还提供非常有效的特总冲刺班，可以让学生在短时间内吸收更多知识。",
      image: "/src/assets/testimonials/liu-ke-tong.jpg"
    },
    {
      id: "4",
      name: "叶善贤",
      grade: "SPM 优异生",
      improvement: "9A",
      testimonial: "学习，也要有对的方程式！我是叶善贤，在世界教育补了8年。在没有努力SPM之前，我原本是一个不太会么复习的学生，但是在这里外，老师除了教正課，还会告诉们做复习。和其他补习班，这里的补习有更多的时间帮学生做复习。我很感谢Ms Ling，是她让我在课堂上学黑，省下了很多我自己私下的时间。我推荐那些被动型的学生来世界教育上课，这里的老师会推着你前进！",
      image: "/src/assets/testimonials/ye-shan-xian.jpg"
    },
    {
      id: "5",
      name: "张家源",
      grade: "SPM 优异生",
      improvement: "9A", 
      testimonial: "世界教育，你值得信赖！我叫张家源，在世界外了五年。原来是个自卑的学生，直到我遇到了金牌美女教师Ms Kang。我很珍惜在这里的每一秒钟，不敢有一丝的懈怠，担心分心的一瞬间就没有听到老师的知识。在世界教育，我特別想感谢Ms Ling 老师的作业以及考班，让我能够在短时间內了解之前的课程，让我拿受益知识的理激的同时明白了历史事件的心意，才让我能够破历史有着一点点的造诣。这里的每一个教师都对我有着不小的帮助，无论是从德上还是知识上，最后我希望每个希望学好的学生来到世界上课，世界教育，你值得信赖！",
      image: "/src/assets/testimonials/zhang-jia-yuan.jpg"
    },
    {
      id: "6",
      name: "王思缘",
      grade: "SPM 优异生",
      improvement: "8A",
      testimonial: "特总办有效！我是王思缘，在世界教育补了五年。初一开始，我是属于那种胆怯的学生，不到最后没有动力想学习。这里的老师真的帮了我很多！后面有面临MCO问题，学校在教什么我根本不明白，全部靠补习教了我才知道在学什么，这也成为了我的依靠基础比上其他的同学要害，全部散过我的老师都很感谢，因为有了他们才会有现在的我。每个老师都有不同时自上帮助了我，所以我都很感谢。我会推荐有心读书和不知道怎么方补习的学生来世界教育，有心读书的学生会遇到很棒的老师。如果没有心老师教的再好，也很难听讲去。",
      image: "/src/assets/testimonials/wang-si-yuan.jpg"
    },
    {
      id: "7",
      name: "陈世宇",
      grade: "SPM 优异生", 
      improvement: "8A",
      testimonial: "从排斥学习，到主动进步！我是陈世宇，在世界教育补了5年。我以前是个不对学习感到庆祝，不喜欢自习的人。自从我来到世界教育之后，我发现原来学习可以那么简单，内为老师都会把每一个单元的重点内容浓缩在一份资料里面，我想要感谢Ms Ling 和Ms Ting。透过Ms Ling明例记忆法让我能够较轻松掌握历史的知识。另外也感谢Ms Tee，透过她的各种output test让我能够对英文更的生字更加的熟悉。我推荐对自己成绩不够自信或者想要节省学习时间的学生，可以来世界教育补习。",
      image: "/src/assets/testimonials/chen-shi-yu.jpg"
    },
    {
      id: "8",
      name: "陈朝弦",
      grade: "SPM 优异生",
      improvement: "7A",
      testimonial: "学习不再是压力，而是兴趣！我是陈朝弦，在世界教育补了三年。之前，我是一个懒于翻书得过且过的学生，曾否定自己，认为与Sejarah 无缘。但是我在这里遇见了Ms Ting，她以较松有趣的方式授课，不增加压力反而激发兴趣。接近考试时，她很耐心地陪着我们做考题，不但教我如何解Sejarah，更让我知道这世不是冰冷的文字，而是一段段有趣的故事。我要感谢Ms Ting 察觉到学习可以快乐而有意义。我要感谢Ms Ting 给对Sejarah 有了浓厚和好感，我极力推荐懒惰自习的学生来这里学习！",
      image: "/src/assets/testimonials/chen-chao-xian.jpg"
    }
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'text-emerald-400 bg-emerald-500/20';
      case 'A': return 'text-blue-400 bg-blue-500/20';
      case 'A-': return 'text-cyan-400 bg-cyan-500/20';
      case 'B+': return 'text-purple-400 bg-purple-500/20';
      case 'B': return 'text-indigo-400 bg-indigo-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getGradeIcon = (grade: string) => {
    switch (grade) {
      case 'A+': return Award;
      case 'A': return Star;
      case 'A-': return TrendingUp;
      case 'B+': return BookOpen;
      default: return Star;
    }
  };

  const currentTestimonial = testimonials[currentIndex];
  const GradeIcon = getGradeIcon(currentTestimonial.gradeLevel);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-6 py-3 rounded-full font-semibold mb-6 font-chinese-elegant">
            <Star className="w-5 h-5" />
            学生见证
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-chinese-bold">
            优秀学子 <span className="text-emerald-500">卓越成就</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-chinese-elegant">
            见证真实的SPM优异成绩，每一个A+背后都有NOW MEMORY的支持
          </p>
          
          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 font-chinese-bold">8位</div>
              <div className="text-gray-600 text-sm font-chinese-elegant">SPM优异生</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-yellow-100">
              <div className="text-3xl font-bold text-yellow-600 font-chinese-bold">71A</div>
              <div className="text-gray-600 text-sm font-chinese-elegant">总A等成绩</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 font-chinese-bold">5年</div>
              <div className="text-gray-600 text-sm font-chinese-elegant">平均补习时间</div>
            </div>
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 font-chinese-bold">100%</div>
              <div className="text-gray-600 text-sm font-chinese-elegant">成功率</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10">
            <Button
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-gray-200"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Main Card */}
          <div
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Card className={`relative overflow-hidden bg-white shadow-2xl border-0 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Image & Grade */}
                  <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 flex flex-col justify-center items-center text-white">
                    <div className="absolute top-6 left-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getGradeColor(currentTestimonial.gradeLevel)} border border-white/20`}>
                        <GradeIcon className="w-5 h-5" />
                        <span className="font-bold font-chinese-modern">{currentTestimonial.gradeLevel} 优异生</span>
                      </div>
                    </div>

                    <div className="text-center space-y-6 mt-8">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
                        <img
                          src="/src/assets/testimonials/student-placeholder.svg"
                          alt={`${currentTestimonial.name} - SPM优异生`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold font-chinese-bold">{currentTestimonial.name}</h3>
                        <p className="text-white/80 font-chinese-elegant">{currentTestimonial.grade}</p>
                        <p className="text-white/90 font-semibold font-chinese-modern">{currentTestimonial.subject}</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="text-center">
                          <div className="text-4xl font-bold font-chinese-bold text-yellow-300">{currentTestimonial.improvement}</div>
                          <div className="text-white/90 text-lg font-chinese-elegant mt-2">SPM优异成绩</div>
                          <div className="text-white/70 text-sm font-chinese-elegant mt-1">{currentTestimonial.subject}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Testimonial Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="text-6xl text-emerald-500/20 leading-none">"</div>
                      
                      <blockquote className="text-xl text-gray-700 leading-relaxed font-chinese-elegant -mt-8">
                        {currentTestimonial.testimonial}
                      </blockquote>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 font-chinese-modern">主要成就：</h4>
                        <div className="space-y-2">
                          {currentTestimonial.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                              <span className="text-gray-600 font-chinese-elegant">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-1 mt-6">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-sm text-gray-500 font-chinese-elegant">满分推荐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-emerald-500 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>

          {/* Grade Legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['A+', 'A', 'A-', 'B+', 'B'].map((grade) => {
              const count = testimonials.filter(t => t.gradeLevel === grade).length;
              return (
                <div key={grade} className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getGradeColor(grade)} border border-current/20`}>
                  <span className="font-semibold font-chinese-modern">{grade}</span>
                  <span className="text-xs opacity-80 font-chinese-elegant">({count}人)</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;