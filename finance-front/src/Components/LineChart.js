import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = ({data}) => {
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "Bounce Rate by Week of Year"
    },
    axisY: {
      title: "Bounce Rate",
      suffix: "₡"
    },
    axisX: {
      title: "Week of Year",
      prefix: "W",
      interval: 2
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}",
      dataPoints: data
    }]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default LineChart;
