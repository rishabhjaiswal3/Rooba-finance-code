import React from 'react'
import {Grid,Typography,Divider} from '@mui/material'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LineChart from '../components/chart/LineChart/LineChart';
import TrafficSource from '../components/TrafficSource/TrafficSource';
import Card from '../components/cards/Card';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Dashboard = () => {
  const options = ['30 days','90 days','6 month','12 months'];
  let selectedOption = '30 days';
  let cardData = [{
    index:0,
    className:"card1",
    item1:{
      icon:<BarChartIcon sx={{height:"30px"}} />
    },
    item2:{
      value:"42,34%",
      count:1,
    },
    item3:{
      heading:'42,34%',
      desc:'Bounce Rate'
    },
    item4:{
      icon:<HelpOutlineIcon/>
    }
  },{
    index:1,
    className:"card2",
    item1:{
      icon:<CalendarMonthIcon sx={{height:"30px",color:'#7166F9'}} />
    },
    item3:{
      heading:'42,34%',
      desc:'Bounce Rate'
    },
    item4:{
      icon:<HelpOutlineIcon  sx={{color:"#7166F9"}}/>
    }
  },{
    index:2,
    className:"card2",
    item1:{
      icon:<PersonIcon sx={{height:"30px",color:'#7166F9'}} />
    },
    item2:{
      value:"2,1%",
      count:0,
    },
    item3:{
      heading:'326.60K',
      desc:'Total Monthly Visit'
    }
  },{
    index:3,
    className:"card2",
    item1:{
      icon:<HourglassFullIcon sx={{height:"30px",color:'#7166F9'}} />
    },
    item2:{
      value:"2,4%",
      count:0,
    },
    item3:{
      heading:'00:03:27',
      desc:'Avg. Visit Duration'
    }
  }]

  return (
    <Grid className="page" container >
        <Grid xs={12} sm={12} md={12} lg={6} sx={{padding:"0px 10px 0px 10px"}}>
          <div className="Heading flex-same-line-alignItems " sx={{color:'#575353'}}>
            <Typography sx={{fontSize:"32px",fontWeight:"500",mb:'4px',ml:"4px"}}>Project Statistics</Typography>
            <HelpRoundedIcon sx={{m:'0px 10px 0px 10px',color:'#94bbe9'}} />
          </div>
          <div style={{height:"320px",minWidth:"100%",maxWidth:"500px",margin:'auto'}}>
            <LineChart/>
          </div>
          <TrafficSource />
        </Grid>
        <Grid container xs={12}sm={12} md={12} lg={6} sx={{mt:'8px'}}>
          {
            options.map((op)=>{
              return(
                <Grid xs={6} sm={3} sx={{mb:"15px"}}>
                  <div style={{background:(selectedOption === op?'#7166F9':'#F6F6FB'),color:(selectedOption === op?'white':'black'),height:"40px",width:"100px",borderRadius:"20px",display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
                    {op}
                  </div>
                </Grid>
              )
            })
          }
          <Grid container  style={{height:"300px",margin:"auto"}}>
            {
              cardData.map((card)=>{
                return(
                  <Grid xs={6} >
                    <Card data={card}/>
                  </Grid>
                )
              })
            }
          </Grid>
          <TrafficSource />
        </Grid>
    </Grid>
  )
}

export default Dashboard