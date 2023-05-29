import React from "react";
import { Box, Typography } from "@mui/material";
import { Autocomplete, Button } from "@mui/material";
import img from "../img/img.jpg";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          // position:'absolute',
          // top:'0',
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          width: {xl:"100%",md:'100%',sm:'100%',xs:'100%'},
          height: "900px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center"  , height:"100%"}}>
          <Box>
            <Typography
              sx={{
                position: "absolute",
                top: "280px",
                left: "150px",
                color: "grey",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              Assos
            </Typography>
            <Typography
              sx={{
                top: "310px",
                left: {xs:'20px',sm:'50px',xl:'150px',md:'100px'},
                position: "absolute",
                margin: "auto",
                fontSize: { xl: "60px", md: "50px", sm: "57px", xs: "50px" },
                fontWeight: "bolder",
              }}
            >
              New collection
            </Typography>{" "}
            <br /> <br />
            <Box sx={{height:"6%"}}>
            <Button
              sx={{
                ":hover": { bgcolor: "red", color: "white" },
                backgroundColor: "blue",
                color: "white",
                left: {sm:"120px",xs:'90px',md:'100px',xl:'150px'},
                padding:{sm:'5px',xl:'16px',md:'7px',xs:'5px'},
                fontSize:{sm:'14px',xl:'16px',md:'14px',xs:'12px'},
                width:{xl:'250px',xs:'150px',sm:'170px',md:'200px'},
                fontFamily:'monospace'
              }}
            >
              View Collection
            </Button>
            </Box>
           
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
