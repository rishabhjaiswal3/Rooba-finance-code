import React from 'react';
import { Chart as ChartJS, CategoryScale,LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./DoughnutChart.css";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ['',''],
    datasets: [{
      data: [1, 1],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 1
    }]
  };

  const options = {
    responsive: true,
    drawActiveElementsOnTop:false,
    label:false,
    maintainAspectRatio: false,
    cutout: 35,
    tooltips: {
        callbacks: {
          label: function(tooltipItem) {
                  return tooltipItem.yLabel;
          }
        }
    },
    plugins:{
        legend:{
            display:false
    }}
  }

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = '50px';
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = '50% Direct',
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]

    ChartJS.register(ArcElement, Tooltip, Legend);
    function DoughnutChart() {
        return (
            <div style={{background:'#F6F6FB',width:"100%",height:"100px"}}>
                <Doughnut data={data} options={options} plugins={plugins} />
            </div>
        )
    }

    export default DoughnutChart;