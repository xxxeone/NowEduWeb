import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter = ({ words, speed = 200, deleteSpeed = 120, pauseTime = 3000, className = "" }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Add easing effect by varying the speed
    const baseSpeed = isDeleting ? deleteSpeed : speed;
    const progress = currentText.length / currentWord.length;
    const easedSpeed = isDeleting ? 
      baseSpeed * (1 - progress * 0.3) : // Faster at the end when deleting
      baseSpeed * (1 + progress * 0.5); // Slower at the end when typing

    const timer = setTimeout(() => {
      setCurrentText(prev => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentWord.slice(0, prev.length + 1);
        }
      });
    }, easedSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, speed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Typewriter;