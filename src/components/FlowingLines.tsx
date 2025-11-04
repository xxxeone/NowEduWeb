import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FlowingLinesProps {
  className?: string;
}

const FlowingLines: React.FC<FlowingLinesProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  // 生成贝塞尔曲线路径
  const generateCurvePath = (startX: number, startY: number, endX: number, endY: number, controlIntensity: number = 0.5) => {
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    
    // 控制点偏移
    const cp1X = startX + (endX - startX) * 0.3;
    const cp1Y = startY + (endY - startY) * controlIntensity + Math.sin(startX * 0.01) * 50;
    
    const cp2X = startX + (endX - startX) * 0.7;
    const cp2Y = startY + (endY - startY) * (1 - controlIntensity) + Math.cos(endX * 0.01) * 30;

    return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  };

  // 生成波浪路径
  const generateWavePath = (width: number, height: number, amplitude: number, frequency: number, offset: number = 0) => {
    let path = '';
    const steps = 100;
    
    for (let i = 0; i <= steps; i++) {
      const x = (width / steps) * i;
      const y = height / 2 + Math.sin((x / width) * frequency * Math.PI + offset) * amplitude;
      
      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }
    
    return path;
  };

  // 生成螺旋路径
  const generateSpiralPath = (centerX: number, centerY: number, radius: number, turns: number) => {
    let path = '';
    const steps = turns * 50;
    
    for (let i = 0; i <= steps; i++) {
      const angle = (i / steps) * turns * 2 * Math.PI;
      const currentRadius = (radius * i) / steps;
      const x = centerX + Math.cos(angle) * currentRadius;
      const y = centerY + Math.sin(angle) * currentRadius;
      
      if (i === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }
    
    return path;
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* 蓝色渐变 */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(3, 174, 210, 0)" />
            <stop offset="20%" stopColor="rgba(3, 174, 210, 0.4)" />
            <stop offset="50%" stopColor="rgba(3, 174, 210, 0.8)" />
            <stop offset="80%" stopColor="rgba(3, 174, 210, 0.4)" />
            <stop offset="100%" stopColor="rgba(3, 174, 210, 0)" />
          </linearGradient>
          
          {/* 白色渐变 */}
          <linearGradient id="whiteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="25%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="75%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>

          {/* 发光效果 */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 主要贝塞尔曲线 - 蓝色 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.path
            key={`main-curve-${i}`}
            d={generateCurvePath(
              -200,
              100 + i * 120,
              2120,
              200 + i * 100,
              0.3 + (i * 0.1)
            )}
            stroke="url(#blueGradient)"
            strokeWidth={3 + (i % 2)}
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 波浪线条 - 白色 */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={generateWavePath(2320, 1080, 60 + i * 20, 2 + i * 0.5)}
            stroke="url(#whiteGradient)"
            strokeWidth={2}
            fill="none"
            style={{ transform: `translateY(${i * 150}px)` }}
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

        {/* 螺旋线条 - 交替颜色 */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.path
            key={`spiral-${i}`}
            d={generateSpiralPath(
              200 + i * 400,
              200 + i * 200,
              150 + i * 50,
              3
            )}
            stroke={i % 2 === 0 ? "url(#blueGradient)" : "url(#whiteGradient)"}
            strokeWidth={2}
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.7, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 4,
              delay: i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 复杂曲线路径 - 模拟流体动态 */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.path
            key={`complex-${i}`}
            d={`M -100 ${300 + i * 150} 
                Q 300 ${200 + i * 100}, 600 ${350 + i * 80}
                T 1200 ${250 + i * 120}
                Q 1600 ${150 + i * 90}, 2020 ${300 + i * 110}`}
            stroke={i % 3 === 0 ? "url(#blueGradient)" : "url(#whiteGradient)"}
            strokeWidth={1.5 + (i % 2) * 0.5}
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0.2, 0],
              opacity: [0, 0.9, 0.5, 0],
            }}
            transition={{
              duration: 10 + i * 2.5,
              delay: i * 1.8,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1], // 自定义缓动
            }}
          />
        ))}

        {/* 流动粒子轨迹 */}
        {Array.from({ length: 12 }).map((_, i) => {
          const curvePath = generateCurvePath(
            -50,
            100 + i * 80,
            1970,
            200 + i * 90,
            0.4
          );
          
          return (
            <motion.circle
              key={`particle-${i}`}
              r={2 + (i % 3)}
              fill={i % 2 === 0 ? "#03AED2" : "#FFFFFF"}
              filter="url(#glow)"
              initial={{ 
                opacity: 0,
                x: -50,
                y: 100 + i * 80
              }}
              animate={{ 
                opacity: [0, 1, 0.8, 1, 0],
                x: [
                  -50,
                  400 + i * 100,
                  800 + i * 150,
                  1200 + i * 100,
                  1970
                ],
                y: [
                  100 + i * 80,
                  150 + i * 60 + Math.sin(i) * 50,
                  120 + i * 70 + Math.cos(i * 0.5) * 40,
                  180 + i * 80 + Math.sin(i * 0.8) * 30,
                  200 + i * 90
                ]
              }}
              transition={{
                duration: 8 + i * 1.5,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default FlowingLines;