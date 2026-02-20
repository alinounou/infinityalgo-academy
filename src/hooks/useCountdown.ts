'use client';

import { useState, useEffect } from 'react';

interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
  isExpired: boolean;
}

export function useCountdown(initialHours: number = 4): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    hours: initialHours,
    minutes: 0,
    seconds: 0,
    total: initialHours * 60 * 60 * 1000,
    isExpired: false,
  });

  useEffect(() => {
    const endTime = Date.now() + initialHours * 60 * 60 * 1000;

    const tick = () => {
      const now = Date.now();
      const difference = endTime - now;

      if (difference <= 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0,
          isExpired: true,
        });
        return;
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference,
        isExpired: false,
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [initialHours]);

  return timeLeft;
}

export function formatCountdown(time: CountdownTime): string {
  return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
}
