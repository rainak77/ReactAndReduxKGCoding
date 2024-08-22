import { useEffect, useState } from "react";
import getTime from "./GetIndianTime";

export default function CurrentTime() {
  const [time, setTime] = useState(new Date());

  const settingTime = () => {
    setTime(new Date());
  };
  useEffect(() => {
    const timerId = setInterval(settingTime, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      This is the current date : {time.toLocaleDateString()} and time :{" "}
      {time.toLocaleTimeString()}
    </div>
  );
}
