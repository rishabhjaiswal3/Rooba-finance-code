import React from 'react'
import {Typography,Divider, Grid} from '@mui/material';
import DoughnutChart from '../chart/DonghnutChart/DoughnutChart';

const TrafficSource = () => {

  let donutChartData = [
    {
      name:'Direct',
      value:'50',
      color:'#94bbe9'
    },{
      name:'Search',
      value:'50',
      color:'#eeaeca'
    }
  ]
  return (
        <Grid container style={{background:'#F6F6FB',padding:'10px 10px 10px 10px',borderRadius:'20px'}}>
          <Grid xs={7}>
            <Typography sx={{p:'0px 10px 2px 15px'}}>
              Traffic Source
            </Typography>
            <Divider  sx={{mx:2,mb:'0px'}} />
            {/* <Grid container sx={{background:'#EFEFF8',display:'flex',alignItems:'center',justifyContent:'center',width:"90%",borderRadius:'10px',mx:'auto',mt:'10px'}}>
              <Grid xs={6} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                Source 
              </Grid>
              <Grid xs={6} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                Traffic Source
              </Grid>
            </Grid> */}
            {
              donutChartData.map((da) => {

                return(<Grid container sx={{display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'10px',mx:'auto',mt:'10px'}}>
                  <Grid container xs={6} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Grid xs={4} sx={{display:'flex',alignItems:'center',justifyContent:'flex-end'}}>
                        <div style={{height:"14px",width:"14px",background:`${da.color}` }}></div>
                    </Grid>
                    <Grid xs={8} sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',pl:'10px'}}>
                      {da.name}
                    </Grid>
                  </Grid>
                  <Grid xs={6} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    {da.value}
                  </Grid>
                </Grid>) 

              })

            }

              
          </Grid>
          <Grid xs={5} sx={{height:"20px"}}>
            <DoughnutChart />
          </Grid>
        </Grid>
  )
}

export default TrafficSource