import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SpeedLines = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Generate curved flowing lines with varying properties
  const flowingLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 1.2,
    duration: 6 + Math.random() * 4,
    startY: (windowSize.height / 10) * (i + 1),
    opacity: 0.15 + Math.random() * 0.2,
    amplitude: 50 + Math.random() * 80, // Wave amplitude
    frequency: 0.8 + Math.random() * 0.4, // Wave frequency
  }));

  const progressCurves = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    delay: i * 2,
    duration: 8 + Math.random() * 3,
    startY: (windowSize.height / 6) * (i + 1),
    opacity: 0.1 + Math.random() * 0.15,
    curveHeight: 100 + Math.random() * 150,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blue Flowing Lines - main learning streams */}
      {flowingLines.map((line) => (
        <motion.div
          key={`blue-flow-${line.id}`}
          className="absolute"
          style={{
            top: `${line.startY}px`,
            left: '-150px',
            width: '200px',
            height: '3px',
            opacity: line.opacity,
          }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent rounded-full"
            animate={{
              x: [0, windowSize.width + 300],
              y: [
                0,
                -line.amplitude * Math.sin(Math.PI * line.frequency * 0.5),
                -line.amplitude * Math.sin(Math.PI * line.frequency),
                -line.amplitude * Math.sin(Math.PI * line.frequency * 1.5),
                -line.amplitude * Math.sin(Math.PI * line.frequency * 0.3),
                0,
              ],
              scaleX: [0.2, 0.8, 1.2, 1, 0.6, 0.2],
            }}
            transition={{
              duration: line.duration,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* White Progress Lines - representing advancement */}
      {progressCurves.map((curve) => (
        <motion.div
          key={`white-curve-${curve.id}`}
          className="absolute"
          style={{
            top: `${curve.startY}px`,
            left: '-180px',
            opacity: curve.opacity,
          }}
        >
          <motion.div
            className="w-40 h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
            animate={{
              x: [0, windowSize.width + 360],
              y: [
                0,
                -curve.curveHeight * 0.3,
                -curve.curveHeight * 0.8,
                -curve.curveHeight,
                -curve.curveHeight * 0.6,
                -curve.curveHeight * 0.1,
                0,
              ],
              scaleX: [0.1, 0.6, 1, 1.4, 1.1, 0.7, 0.1],
            }}
            transition={{
              duration: curve.duration,
              delay: curve.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Curved Blue Lines - spiral paths representing learning breakthroughs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={`blue-trail-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 20}%`,
            left: '-120px',
          }}
        >
          <motion.div
            className="w-24 h-2 bg-gradient-to-r from-transparent via-brand-blue/50 to-brand-blue/20 rounded-full"
            animate={{
              x: [0, windowSize.width + 240],
              y: [
                0,
                -60 * Math.sin(Math.PI * 0.4),
                -100 * Math.sin(Math.PI * 0.8),
                -60 * Math.sin(Math.PI * 1.2),
                -20 * Math.sin(Math.PI * 1.6),
                0,
              ],
              scaleX: [0.3, 0.8, 1.4, 1.1, 0.7, 0.3],
            }}
            transition={{
              duration: 12 + i * 2,
              delay: i * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* White Accent Lines - representing key achievements */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`white-line-${i}`}
          className="absolute"
          style={{
            top: `${15 + i * 12}%`,
            left: '-60px',
          }}
        >
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-transparent via-white/60 to-white/20 rounded-full"
            animate={{
              x: [0, windowSize.width + 120],
              y: [
                0,
                -40 * Math.sin(Math.PI * 0.3 * (i + 1)),
                -70 * Math.sin(Math.PI * 0.6 * (i + 1)),
                -50 * Math.sin(Math.PI * 0.9 * (i + 1)),
                -15 * Math.sin(Math.PI * 1.2 * (i + 1)),
                0,
              ],
              scaleX: [0.2, 0.7, 1.2, 1, 0.6, 0.2],
            }}
            transition={{
              duration: 9 + i * 1.5,
              delay: i * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Gentle Blue-White Wave Lines - representing continuous learning flow */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute"
          style={{
            top: `${20 + i * 15}%`,
            left: '-250px',
          }}
        >
          <motion.div
            className={`w-60 h-1 rounded-full ${
              i % 2 === 0
                ? 'bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent'
                : 'bg-gradient-to-r from-transparent via-white/40 to-transparent'
            }`}
            animate={{
              x: [0, windowSize.width + 500],
              y: [
                0,
                -80 * Math.sin(Math.PI * 0.2),
                -120 * Math.sin(Math.PI * 0.4),
                -100 * Math.sin(Math.PI * 0.6),
                -60 * Math.sin(Math.PI * 0.8),
                -40 * Math.sin(Math.PI),
                -60 * Math.sin(Math.PI * 1.2),
                -80 * Math.sin(Math.PI * 1.4),
                -40 * Math.sin(Math.PI * 1.6),
                0,
              ],
              scaleX: [0.2, 0.6, 1, 1.3, 1.1, 1, 1.2, 0.8, 0.4, 0.2],
            }}
            transition={{
              duration: 14 + i * 2,
              delay: i * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SpeedLines;