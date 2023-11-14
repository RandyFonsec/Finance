import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const TwoLinesChart = ({data1,data2}) => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Number of New Customers"
    },
    axisY: {
      title: "Number of Customers"
    },
    toolTip: {
      shared: true
    },
    data: [
      {
        type: "spline",
        name: "Ingresos",
        showInLegend: true,
        dataPoints: data1
      },
      {
        type: "spline",
        name: "Gastos",
        showInLegend: true,
        dataPoints: data2
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default TwoLinesChart;
