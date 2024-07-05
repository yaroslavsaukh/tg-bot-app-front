import React, { useState, useEffect, useMemo } from 'react';

import { differenceInSeconds } from 'date-fns';

export const Countdown: React.FC = () => {
  const targetDate = useMemo(() => new Date('2024-07-08T00:00:00Z'), []);
  const [timeLeft, setTimeLeft] = useState<number>(differenceInSeconds(targetDate, new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(differenceInSeconds(targetDate, new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTimeLeft = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return <span>{formatTimeLeft(timeLeft)}</span>;
};
