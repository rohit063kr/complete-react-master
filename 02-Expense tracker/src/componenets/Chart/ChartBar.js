import React from 'react';

import './ChartBar.css';

const ChartBar = function (props) {
  let chartFillHeight = '0%';

  if (props.maxValue > 0) {
    chartFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
