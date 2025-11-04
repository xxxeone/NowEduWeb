import { Book, Brain, Lightbulb, Star, Zap, Target, Award, Sparkles, BookOpen, Calculator, Atom, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const icons = [
    { Icon: Book, delay: 0, size: "w-8 h-8", position: "top-20 left-20" },
    { Icon: Brain, delay: 1, size: "w-10 h-10", position: "top-32 right-32" },
    { Icon: Lightbulb, delay: 2, size: "w-6 h-6", position: "top-48 left-48" },
    { Icon: Star, delay: 0.5, size: "w-4 h-4", position: "top-64 right-64" },
    { Icon: Zap, delay: 1.5, size: "w-7 h-7", position: "top-80 left-80" },
    { Icon: Target, delay: 2.5, size: "w-9 h-9", position: "bottom-32 right-48" },
    { Icon: Award, delay: 3, size: "w-5 h-5", position: "bottom-48 left-32" },
    { Icon: Sparkles, delay: 0.8, size: "w-6 h-6", position: "bottom-64 right-80" },
    { Icon: BookOpen, delay: 1.8, size: "w-8 h-8", position: "bottom-80 left-64" },
    { Icon: Calculator, delay: 2.8, size: "w-7 h-7", position: "top-96 right-96" },
    { Icon: Atom, delay: 3.5, size: "w-6 h-6", position: "bottom-96 left-96" },
    { Icon: Globe, delay: 4, size: "w-9 h-9", position: "top-40 right-40" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full animate-pulse blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/10 rounded-full animate-bounce-slow blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-200/8 rounded-full animate-float blur-2xl"></div>
      
      {/* Floating Icons */}
      {icons.map(({ Icon, delay, size, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} ${size} text-white/30 animate-float-delayed opacity-0`}
          style={{
            animationDelay: `${delay}s`,
            animationFillMode: "forwards",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        >
          <Icon className="w-full h-full drop-shadow-lg" />
        </div>
      ))}

      {/* Geometric Shapes */}
      <div className="absolute top-16 right-16 w-4 h-4 bg-white/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-16 left-16 w-6 h-6 bg-cyan-200/20 rotate-45 animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-teal-200/30 rounded-full animate-pulse"></div>
      
      {/* Particle Trail Effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingElements;