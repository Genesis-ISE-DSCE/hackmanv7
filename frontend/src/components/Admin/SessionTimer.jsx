import React, { useState, useEffect } from "react";

const SessionTimer = ({ timeoutInMinutes, onTimeout }) => {
  const [sessionTime, setSessionTime] = useState(timeoutInMinutes * 60); 
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sessionTime > 0) {
        setSessionTime((prevTime) => prevTime - 1);
      } else {
        setSessionExpired(true);
        clearInterval(intervalId);
        onTimeout(); 
      }
    }, 1000);

    return () => clearInterval(intervalId); 

  }, [sessionTime, onTimeout]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      {sessionExpired ? (
        <p>Session expired.</p>
      ) : (
        <p style={{color: "yellow"}}>Session time remaining: {formatTime(sessionTime)}</p>
      )}
    </div>
  );
};

export default SessionTimer;