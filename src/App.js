import React, { useState } from "react";
import ClockComponent from "./component/ClockComponent";
import "./styles.css";

export default function App() {
  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [sec, setSec] = useState();
  const [ms, setMs] = useState();
  const [period, setPeriod] = useState();

  const formatedHours = (time) => {
    let hours = time.getHours();
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours === 0 ? 12 : hours;
    hours = hours <= 9 ? "0" + hours : hours;
    return hours;
  };
  const formatedMinutes = (time) => {
    let minutes = time.getMinutes();
    minutes = minutes <= 9 ? "0" + minutes : minutes;
    return minutes;
  };
  const formatedSeconds = (time) => {
    let seconds = time.getSeconds();
    seconds = seconds <= 9 ? "0" + seconds : seconds;
    return seconds;
  };
  const updateTime = () => {
    let time = new Date();
    setHour(formatedHours(time));
    setMin(formatedMinutes(time));
    setSec(formatedSeconds(time));
    setMs(time.getMilliseconds());
    setPeriod(time.getHours() >= 12 ? "pm" : "am");
  };
  setInterval(updateTime, 500);
  return (
    <div className="App">
      <ClockComponent hour={hour} min={min} sec={sec} ms={ms} period={period} />
    </div>
  );
}
