import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import All from './pages/All';
import MenCateg from './pages/MenCateg';
import WomenCateg from './pages/WomenCateg';
import Dropdown from './Dropdown';
import DrawerForm from './pages/DrawerForm';


const Categories = ({products,setProducts}) => {
    const [value, setValue] = React.useState(0);
    const[sortVal,setsortVal]=useState(null)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
  return (
    <>
      
    <Typography sx={{fontWeight:'900',fontSize:'30px'}}>CATEGORIES</Typography>
    
   <Box sx={{display:"flex",flexDirection:'row',float:'right',marginTop:'1%'}}  ><Dropdown sortVal={sortVal} setsortVal={setsortVal}/></Box> 
   <Box sx={{display:"flex",flexDirection:'row',float:'right',marginTop:{xl:'1.5%',xs:'6%',sm:'3%'}}}><DrawerForm /> </Box>
  <Box sx={{ width: '100%', bgcolor: 'background.paper',display:'flex',flexDirection:'row', flexWrap:'wrap',justifyContent:'center'}}>
    <Tabs value={value} onChange={handleChange} centered sx={{fontWeight:'bold'}}>  
       <Tab label="All products" {...a11yProps(0)} sx={{fontSize:{xl:'20px',sm:'18px',md:'18px',xs:'10px'},fontWeight:'bold'}}>
       </Tab>
                  <Tab label="MEN" {...a11yProps(1)} sx={{fontSize:{xl:'20px',sm:'18px',md:'18px',xs:'10px'},fontWeight:'bold'}}
                   />
                    <Tab label="WOMEN" {...a11yProps(2)} sx={{fontSize:{xl:'20px',sm:'18px',md:'18px',xs:'10px'},fontWeight:'bold'}}
                   />
                  
    </Tabs>
    
    
    {
        value===0?<All products ={products}/>:null
       
    }
    {value===1?<MenCateg value={value} sortVal={sortVal} setsortVal={setsortVal}/>:null}
    {value===2?<WomenCateg value={value} sortVal={sortVal} setsortVal={setsortVal} />:null}
  </Box>
    </>
  )
}
export default Categories
