
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DD'
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 10,
      hours: 23,
      minutes: 59,
      seconds: 59
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Hackathon Starts In</h3>
      </div>
      <div className="flex justify-center">
        <div className="countdown-item">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</span>
          <span className="text-xs md:text-sm text-hackfinity-gray mt-1">Days</span>
        </div>
        <div className="countdown-item">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours}</span>
          <span className="text-xs md:text-sm text-hackfinity-gray mt-1">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes}</span>
          <span className="text-xs md:text-sm text-hackfinity-gray mt-1">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds}</span>
          <span className="text-xs md:text-sm text-hackfinity-gray mt-1">Seconds</span>
        </div>
      </div>
    </div>
  );
};
