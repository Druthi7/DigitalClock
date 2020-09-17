import React from "react";

const ClockComponent = ({ hour, min, sec, ms, period }) => {
  return (
    <div class="clock">
      <div class="clock-display">
        <h1> Digital Clock</h1>
        <div class="clock-field">
          <div class="numbers">
            <p class="placeholder">{hour}</p>
            <p class="type">hour</p>
          </div>
          <div class="colon">
            <p>:</p>
          </div>
          <div class="numbers">
            <p class="placeholder">{min}</p>
            <p class="type">minute</p>
          </div>
          <div class="colon">
            <p>:</p>
          </div>
          <div class="numbers">
            <p class="placeholder">{sec}</p>
            <p class="type">second</p>
          </div>
          <div class="am-pm">
            <div>
              <p class="am">{period}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClockComponent;
