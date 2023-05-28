import React from 'react'
import {Grid,Typography} from '@mui/material'
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import "./Card.css";

const Card = ({data}) => {
  return (
    <div  style={{width:"94%",margin:'auto'}}>
        <Grid className={data.className} spacing={1} container style={{padding:"10px",borderRadius:'10px'}}>
            <Grid xs={6} sx={{height:"55px",display:'flex',justifyContent:'center',alignItems:'center'}}>
                {data.item1.icon}
            </Grid>
            <Grid xs={6} sx={{height:"55px",display:'flex',justifyContent:'center',alignItems:'center'}}>
              {
                  data.hasOwnProperty('item2')?(
                    <>
                      {data.item2.count == 0 ?<ArrowDropDownIcon sx={{color:'red'}}/>:<ArrowDropUpIcon sx={{color:'green'}} />}
                      <span>{data.item2.value}</span>
                    </>
                  ):(null)
              }               
            </Grid>
            <Grid xs={6} sx={{height:"55px",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
              <Typography sx={{fontSize:'1.4em'}}>{data.item3.heading}</Typography>
              <Typography sx={{fontSize:"12px",fontWeight:"500"}}>{data.item3.desc}</Typography>
            </Grid>
            <Grid xs={6}sx={{height:"55px",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {
                  data.hasOwnProperty('item4')?(
                    <>
                      {data.item4.icon}
                    </>
                  ):(null)
              } 
            </Grid>
        </Grid>
    </div>
  )
}

export default Card