import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetHours?: number;
}

const CountdownTimer = ({ targetHours = 6 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(targetTime.getHours() + targetHours);
      
      const difference = targetTime.getTime() - now.getTime();
      
      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetHours]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg">
        <span className="text-2xl sm:text-3xl font-bold">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <TimeUnit value={timeLeft.hours} label="часов" />
      <span className="text-2xl font-bold text-red-500 -mt-6">:</span>
      <TimeUnit value={timeLeft.minutes} label="минут" />
      <span className="text-2xl font-bold text-red-500 -mt-6">:</span>
      <TimeUnit value={timeLeft.seconds} label="секунд" />
    </div>
  );
};

export default CountdownTimer;
