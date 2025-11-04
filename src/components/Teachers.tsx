import { motion } from "framer-motion";
import { useRef } from "react";
import MrDiong from "@/assets/Mr Diong.png";
import MrLee from "@/assets/Mr Lee.png";
import MsWen from "@/assets/Ms Wen.png";
import MrChin from "@/assets/Mr Chin.png";
import MrRaiden from "@/assets/Mr Raiden.png";
import MrAlvin from "@/assets/Mr Alvin.png";
import MsElynn from "@/assets/Ms Elynn.png";
import MsTing from "@/assets/Ms Ting.png";
import MsLing from "@/assets/Ms Ling.png";
import BgWood from "@/assets/Bgwood.jpg";

interface Teacher {
  name: string;
  image: string;
  subjects: string[];
}

const Teachers = () => {
const scrollContainerRef = useRef<HTMLDivElement>(null);

const teachers: Teacher[] = [
  {
    name: 'MR ALVIN',
    image: MrAlvin,
    subjects: ['Bahasa Melayu', 'Prinsip Perakaunan'],
  },
  {
    name: 'MS ELYNN',
    image: MsElynn,
    subjects: ['Bahasa Melayu'],
  },
  {
    name: 'MS TING',
    image: MsTing,
    subjects: ['Sejarah', 'Geografi'],
  },
  {
    name: 'MS LING',
    image: MsLing,
    subjects: ['Sejarah', 'Geografi'],
  },
  {
    name: 'MR LEE',
    image: MrLee,
    subjects: ['English', 'BM Karangan'],
  },
  {
    name: 'MR DIONG',
    image: MrDiong,
    subjects: ['Sejarah', 'Mathematics'],
  },
  {
    name: 'MS WEN',
    image: MsWen,
    subjects: ['Mathematics', 'Prinsip Perakaunan'],
  },
  {
    name: 'MR CHIN',
    image: MrChin,
    subjects: ['English', 'Addmath'],
  },
  {
    name: 'MR RAIDEN',
    image: MrRaiden,
    subjects: ['Sejarah'],
  },
];

// Manual navigation functions
const scrollLeft = () => {
  const container = scrollContainerRef.current;
  if (!container) return;
  container.scrollBy({ left: -256, behavior: 'smooth' });
};

const scrollRight = () => {
  const container = scrollContainerRef.current;
  if (!container) return;
  container.scrollBy({ left: 256, behavior: 'smooth' });
};

  return (
    <motion.section 
      className="py-16 md:py-24 bg-white relative overflow-hidden"
      initial={{ opacity: 0, y: 100, rotateX: -15, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: 'preserve-3d', perspective: '2000px' }}
    >
      {/* Wood background container with white border visible */}
      <motion.div 
        className="absolute inset-4 md:inset-8 rounded-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${BgWood})` }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#03aed2]/60 rounded-3xl"></div>
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Section Title - Advanced Typography */}
        <motion.div
          className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Title with Split Text Effect */}
          <div className="relative inline-block mb-6">
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight"
              style={{ fontFamily: "'QingNiao HuaGuang', 'Noto Sans SC', sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="relative z-10 font-normal block leading-tight mb-1">我们的</span>
              <span className="relative z-10 font-bold block leading-tight">教师团队</span>
              {/* Underline accent */}
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-4 md:h-6 bg-now-yellow -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.h2>
          </div>

        </motion.div>

        {/* Teacher Cards Grid - Single row, horizontal scroll */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-now-navy hover:bg-now-teal text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center -translate-x-1/2 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-now-navy hover:bg-now-teal text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center translate-x-1/2 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
          >
            <div className="flex gap-4 md:gap-6 min-w-max">
              {/* Render teachers twice for seamless loop */}
              {[...teachers, ...teachers].map((teacher, index) => (
                <motion.div
                  key={`${teacher.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + (index % teachers.length) * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group w-[200px] md:w-[240px] flex-shrink-0"
                >
                  {/* Card with white background and navy border */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-now-navy hover:scale-[1.05] bg-white h-full">
                    {/* Teacher Image */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-now-navy/80 via-now-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Teacher Info - Compact design */}
                    <div className="p-4 bg-white">
                      <h3 className="text-xl font-black text-now-navy mb-2 tracking-tight group-hover:text-now-teal transition-colors duration-300">
                        {teacher.name}
                      </h3>
                      
                      {/* Subjects - Vertical list */}
                      <div className="space-y-1">
                        {teacher.subjects.map((subject, idx) => (
                          <div
                            key={idx}
                            className="text-sm font-bold text-now-teal"
                          >
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute top-3 right-3 w-2 h-2 bg-now-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Dots - adjusted position for layering */}
      <div className="absolute top-16 left-16 opacity-20 z-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-now-navy" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-16 right-16 opacity-20 z-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 rounded-full bg-now-navy" />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Teachers;
