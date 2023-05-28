import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Grid, Avatar} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import './Drawer.css';

const drawerWidth = 240;
function DrawerAndAppbar() {
  
  const [open,setDrawerOpen] = React.useState(false);

  let DrawerOption1 = [{
    name:'Overview',
    icon:<HouseRoundedIcon className="selected-icon"/>
  },{
    name:'Opportunities',
    icon:<LocalFireDepartmentRoundedIcon className="icon"/>
  },{
    name:'My Competitors',
    icon:<PersonRoundedIcon className="icon"/>
  },{
    name:'Briefs',
    icon:<DescriptionRoundedIcon className="icon"/>
  },{
    name:'Saved',
    icon:<BookmarkRoundedIcon className="icon"/>
  }

  ]
  let DrawerOption2 = [
    {
      name:'Settings',
      icon:<SettingsRoundedIcon className="icon"/>
    },{
      name:'Help',
      icon:<HelpRoundedIcon className="icon"/>
    },{
      name:'Log out',
      icon:<LogoutRoundedIcon className="icon"/>
    } 
  ]
  let name = 'Rishabh Jaiswal'
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        className= {open==true?"OpenDrawerAppBar":"AppBar"}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,height:"60px" ,background:'white',boxShadow:'none'}}
      >
        
        <Grid container sx={{height:"100%"}}>
          
          <Grid xs={6} sm={6} md={8} sx={{flexDirection:'row',display:'flex',height:"100%",alignItems:'center',color:'black'}}>
            <ListIcon onClick={()=>{setDrawerOpen(true)}} className={open==true?"DrawerHide":"DrawerOpen"} style={{display:(open===true?"none !important":'block !important'),background:'#F6F6FB',height:'40px',width:"40px",padding:"10px",borderRadius:'10px',margin:"0px 10px 0px 10px",color:'#eeaeca'}}/>
            <ChildCareIcon style={{background:'#F6F6FB',height:'40px',width:"40px",padding:"10px",borderRadius:'10px',margin:"0px 10px 0px 10px",color:'#eeaeca'}}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  color:'black',
                  textDecoration: 'none',
                }}
              >
                Boro team
              </Typography>
              <ArrowDropDownRoundedIcon sx={{color:'black',background:'#F6F6FB',margin:"0px 10px 0px 10px",borderRadius:"6px"}}/>
              <AddCircleRoundedIcon className="selected-icon" />
          </Grid>
          <Grid className="profileContainer" container xs={6} sm={6} md={4} sx={{flexDirection:'row',display:'flex',height:"100%",alignItems:'center',color:'black'}}>
            <AccountCircle  sx={{height:"40px",width:"40px"}}/>  
            <Typography className="profileName">
                {name.length>12?name.substring(0,12)+"...":name}
            </Typography>
            <ArrowDropDownRoundedIcon  sx={{color:'black',background:'#F6F6FB',margin:"0px 10px 0px 10px",borderRadius:"6px"}}/>
          </Grid>
        </Grid>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:'#F6F6FB'
          },
        }}
        className= {open==true?"OpenDrawerdrawerOption":"drawerOption"}
        variant="permanent"
        anchor="left"
      >
        <div className="Drawer" style={{position:'relative'}}>

            <Toolbar style={{height:"20px"}}>
              <SearchRoundedIcon className="seaerchIconBackground" style={{color:'white',height:'50px',width:'50px',padding:'10px',borderRadius:'50%'}}/>
              <Typography sx={{p:2,fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 500,fontSize: '20px'}}>Concured</Typography>
              <ChevronLeftIcon onClick={()=>{setDrawerOpen(false)}} className={open==true?"DrawerOpen":"DrawerHide"} style={{display:(open===true?"none !important":'block !important'),background:'#F6F6FB',height:'40px',width:"40px",padding:"10px",borderRadius:'10px',margin:"0px 10px 0px 10px",color:'#eeaeca'}} />
            </Toolbar>
            <div className="drawerOptionContainer">
              <div className="drawerOptionContainer1">
                  <List className="DrawerOptionItems">
                    {
                      DrawerOption1.map((item)=>{
                        
                        return(
                          <ListItem className= {item.name=='Overview'?"selected-drawer-items":"drawer-items"} key={item.name} disablePadding>
                            <ListItemButton  >
                                {item.icon}
                                <ListItemText className="icon-text" primary={item.name} />
                            </ListItemButton>
                          </ListItem>
                        )
                      })
                    }
                  </List>
              </div>
              <div className="drawerOptionContainer2" >
                <List className="DrawerOptionItems">
                    {
                      DrawerOption2.map((item)=>{
                        return(
                          <ListItem key={item.name} disablePadding>
                            <ListItemButton>
                                {item.icon}
                                <ListItemText className="icon-text" primary={item.name} />
                            </ListItemButton>
                          </ListItem>
                        )
                      })
                    }
                  </List>
              </div>
            </div>
        </div>
      </Drawer>

    </Box>
  );

}

export default DrawerAndAppbar;