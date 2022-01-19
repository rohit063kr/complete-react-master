import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = function (props) {
  const datapointsValues = props.datapoints.map(datapoint => datapoint.value);
  const maximumAmount = Math.max(...datapointsValues);

  return (
    <div className="chart">
      {props.datapoints.map(datapoint => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maximumAmount}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
