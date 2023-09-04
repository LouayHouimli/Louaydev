import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the target date (February 2nd)
  const targetDate = new Date('2024-02-02T00:00:00');

  // Calculate the initial time remaining
  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="countdown">Louay Birthday</h1>
      <div className="countdown">
        <div className="countdown-item">
          {timeRemaining.days} <span>Days</span>
        </div>
        <div className="countdown-item">
          {timeRemaining.hours} <span>Hours</span>
        </div>
        <div className="countdown-item">
          {timeRemaining.minutes} <span>Minutes</span>
        </div>
        <div className="countdown-item">
          {timeRemaining.seconds} <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
