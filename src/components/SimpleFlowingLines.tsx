import React from 'react';
import { motion } from 'framer-motion';

const SimpleFlowingLines: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 流动的SVG线条 */}
      <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* 蓝色渐变 */}
          <linearGradient id="blueFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(3, 174, 210, 0)" />
            <stop offset="50%" stopColor="rgba(3, 174, 210, 0.8)" />
            <stop offset="100%" stopColor="rgba(3, 174, 210, 0)" />
          </linearGradient>
          
          {/* 白色渐变 */}
          <linearGradient id="whiteFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* 发光效果 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 流动的贝塞尔曲线 - 减少到3条 */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.path
            key={`curve-${i}`}
            d={`M -200 ${300 + i * 200} 
                Q 400 ${200 + i * 150}, 800 ${350 + i * 120}
                T 1600 ${280 + i * 180}
                Q 2000 ${220 + i * 140}, 2120 ${300 + i * 160}`}
            stroke={i % 2 === 0 ? "url(#blueFlow)" : "url(#whiteFlow)"}
            strokeWidth={2}
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 12 + i * 3,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 流动粒子 - 减少到8个 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            r={3}
            fill={i % 2 === 0 ? "#03AED2" : "#FFFFFF"}
            opacity={0.6}
            filter="url(#glow)"
            initial={{ 
              cx: -50,
              cy: 300 + i * 80
            }}
            animate={{ 
              cx: [
                -50,
                500 + i * 150,
                1000 + i * 100,
                1500 + i * 120,
                1970
              ],
              cy: [
                300 + i * 80,
                250 + i * 60 + Math.sin(i) * 60,
                320 + i * 70 + Math.cos(i * 0.5) * 50,
                280 + i * 80 + Math.sin(i * 0.8) * 40,
                310 + i * 90
              ],
              opacity: [0, 0.8, 0.6, 0.8, 0]
            }}
            transition={{
              duration: 15 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default SimpleFlowingLines;