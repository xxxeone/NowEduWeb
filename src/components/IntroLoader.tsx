import { useEffect, useState, useCallback, useRef } from 'react';

interface IntroLoaderProps {
  onFinish: () => void;
}

const INTRO_MESSAGES = [
  "Preparing your learning space…",
  "Syncing progress across devices…"
];

const TIMEOUT_MS = 6000; // 6 seconds total timeout
const MESSAGE_DURATION_MS = 1500; // 1.5 seconds per message
const MESSAGE_GAP_MS = 300; // 300ms between messages

export const IntroLoader = ({ onFinish }: IntroLoaderProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<number>();
  const animationRef = useRef<number>();
  const mountTimeRef = useRef<number>(Date.now());

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    
    setIsExiting(true);
    
    // Reveal animation
    const root = document.querySelector('main') || document.body;
    root.classList.add('animate-reveal');
    
    // Remove scroll lock
    document.documentElement.removeAttribute('data-lock');
    
    // Cleanup and finish
    setTimeout(() => {
      onFinish();
    }, 500);
  }, [isExiting, onFinish]);

  // Safety timeout
  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      handleFinish();
    }, TIMEOUT_MS);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleFinish]);

  // Lock scroll
  useEffect(() => {
    document.documentElement.setAttribute('data-lock', 'true');
    
    return () => {
      document.documentElement.removeAttribute('data-lock');
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Skip animation in reduced motion
      setDisplayText(INTRO_MESSAGES[currentMessageIndex]);
      
      if (currentMessageIndex === INTRO_MESSAGES.length - 1) {
        setTimeout(handleFinish, 600);
      } else {
        setTimeout(() => {
          setCurrentMessageIndex(prev => prev + 1);
        }, 600);
      }
      return;
    }

    const message = INTRO_MESSAGES[currentMessageIndex];
    let charIndex = 0;
    setDisplayText('');

    const typeChar = () => {
      if (charIndex < message.length) {
        setDisplayText(message.slice(0, charIndex + 1));
        charIndex++;
        animationRef.current = requestAnimationFrame(() => {
          setTimeout(typeChar, 50); // 50ms per character
        });
      } else {
        // Message complete, wait longer before next message
        setTimeout(() => {
          if (currentMessageIndex < INTRO_MESSAGES.length - 1) {
            setCurrentMessageIndex(prev => prev + 1);
          } else {
            // All messages done, wait a bit before finishing
            setTimeout(handleFinish, 400);
          }
        }, MESSAGE_GAP_MS);
      }
    };

    const startTime = requestAnimationFrame(() => {
      setTimeout(typeChar, 100);
    });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentMessageIndex, handleFinish]);

  // Keyboard support for skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        handleFinish();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFinish]);

  // Error boundary
  useEffect(() => {
    const handleError = () => {
      handleFinish();
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [handleFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center intro-loader-backdrop ${
        isExiting ? 'animate-fade-out' : 'animate-fade-in'
      }`}
      style={{
        background: '#FDDE55',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Skip button */}
      <button
        onClick={handleFinish}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 text-sm font-semibold text-gray-800 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
        aria-label="Skip intro"
        tabIndex={0}
      >
        Skip
      </button>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center space-y-8 px-4">
        {/* Brand name */}
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            World Edu
          </h1>
        </div>

        {/* Typewriter text */}
        <div className="h-16 flex items-center justify-center min-w-[280px] sm:min-w-[400px]">
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 text-center">
            {displayText}
            <span className="intro-caret ml-1">|</span>
          </p>
        </div>

        {/* Three dots pulse */}
        <div className="flex space-x-3" role="status" aria-live="polite" aria-label="Loading">
          <div className="w-3 h-3 bg-[#03AED2] rounded-full intro-dot-pulse" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 bg-[#03AED2] rounded-full intro-dot-pulse" style={{ animationDelay: '200ms' }} />
          <div className="w-3 h-3 bg-[#03AED2] rounded-full intro-dot-pulse" style={{ animationDelay: '400ms' }} />
        </div>
      </div>
    </div>
  );
};
