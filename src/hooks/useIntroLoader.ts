import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'worldedu_seen_intro';

// Check if user has seen intro in this session
const hasSeenIntro = (): boolean => {
  try {
    // Change to sessionStorage so it shows once per browser session
    // instead of once every 14 days
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored === 'true';
  } catch (e) {
    return false;
  }
};

const markAsSeen = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch (e) {
    // Silent fail
  }
};

// Expose a global function to clear intro loader for debugging
if (typeof window !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).clearIntroLoader = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('nowedu_seen_intro');
    console.log('✅ Intro loader cleared! Refresh to see it again.');
  };
}

export const useIntroLoader = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Always show in development mode
    const isDev = import.meta.env.DEV;
    
    if (isDev) {
      // In dev mode, always show the loader
      setShouldShow(true);
      setIsReady(true);
    } else {
      // In production, check if user has seen it
      const show = !hasSeenIntro();
      setShouldShow(show);
      setIsReady(true);
    }
  }, []);

  const finish = useCallback(() => {
    // Only mark as seen in production
    if (!import.meta.env.DEV) {
      markAsSeen();
    }
    setShouldShow(false);
  }, []);

  return { shouldShow, finish, isReady };
};
