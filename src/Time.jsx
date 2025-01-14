import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="box">
      <div className="timer"> {time.toLocaleTimeString()} </div>
    </div>
  );
};

export default CurrentTime;
