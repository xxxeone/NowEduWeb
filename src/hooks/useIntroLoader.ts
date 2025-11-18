import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'worldedu_seen_intro';
const TTL_DAYS = 14;
const TTL_MS = TTL_DAYS * 24 * 60 * 60 * 1000;

// Migrate from old key if exists
const migrateOldKey = () => {
  try {
    const oldKey = 'nowedu_seen_intro';
    const oldValue = localStorage.getItem(oldKey);
    if (oldValue) {
      localStorage.setItem(STORAGE_KEY, oldValue);
      localStorage.removeItem(oldKey);
    }
  } catch (e) {
    // Silent fail
  }
};

const hasSeenIntro = (): boolean => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return false;
    
    const data = JSON.parse(stored);
    const now = Date.now();
    
    // Check if expired
    if (now - data.timestamp > TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
    
    return data.seen === true;
  } catch (e) {
    return false;
  }
};

const markAsSeen = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      seen: true,
      timestamp: Date.now()
    }));
  } catch (e) {
    // Silent fail
  }
};

export const useIntroLoader = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Migrate old key
    migrateOldKey();
    
    // Always show in development mode
    const isDev = import.meta.env.DEV;
    const show = isDev || !hasSeenIntro();
    setShouldShow(show);
    setIsReady(true);
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
