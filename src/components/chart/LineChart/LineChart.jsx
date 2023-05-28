import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Divider,Grid,Typography} from '@mui/material';
import { Line } from 'react-chartjs-2';
import "./LineChart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  label:false,
  drawActiveElementsOnTop:false,
  scales: {
    x: {
    },
    y: {
        offset: true,
      grid: {
        display: false,
     }
    }
  },
  plugins: {
    legend: {
       display: false
    }
 }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [4,2,5,10,6,8,3],
      borderColor: '#7166F9',
      backgroundColor:'#7166F9',
      tension: 0.5
    }
  ],
};

function LineChart() {
  return (
    <div style={{background:'#F6F6FB',borderRadius:'20px',padding:'10px',marginBottom:'14px'}}>
      <Grid container sx={{width:"90%",display:'flex',margin:'auto'}}>
        <Grid xs={7} className="flex-same-line-alignItems" >
          <Typography sx={{fontSize:'16px',fontWeight:"450"}}>Total Views</Typography>
        </Grid>
        <Grid xs={5} className="flex-same-line-alignItems">
        <Typography sx={{fontSize:'1.5em',color:'#7166F9',fontWeight:"500"}}>42,43 M</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart;