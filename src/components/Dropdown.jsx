import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asc, desc, fetchProducts, priceAsc, priceDesc } from "../store/ProductsSlice";
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.4 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};
const names = ["A to Z", "Z to A","1 To 100","100 To 1"];


const Dropdown = ({sortVal,setsortVal}) => {
  const theme = useTheme();
 
  const dispatch=useDispatch()
  const { data: products} = useSelector((state) => state.products);
  const [catProducts, setcatProducts] = useState(products);
  useEffect(() => {
   
      if (products) {
        setcatProducts(products)
      
     
      
    }
  }, [products]);
  // const sortAsc = () => {
  //   console.log(products)
  //   const sorted = [...products].sort((a, b) =>
  //     a.title.localeCompare(b.title)
     
  //   );
  //   console.log(sorted);
  //   setcatProducts(sorted);
  // };
  console.log(catProducts)
  // const sortDesc = () => {
  //   const sortedProducts = [...products].sort((a, b) =>
  //     b.title.localeCompare(a.title)
  //   );
  //   setcatProducts(sortedProducts);
  // };
  
  const handleChange = (event) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;

    if (value === "A to Z") {
      dispatch(asc())
      setsortVal(value)
    }
    if (value === "Z to A") {
    dispatch(desc())
    setsortVal(value)
    }
    if (value === "1 To 100") {
      dispatch(priceAsc())
      setsortVal(value)
    }
    if (value === "100 To 1") {
      dispatch(priceDesc())
      setsortVal(value)
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: {xl:300,sm:250,md:250,xs:100 },height:{xs:'15px'}}}>
        <InputLabel id="demo-multiple-name-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          onChange={handleChange}
          value={sortVal}
          label="categories"
          input={<OutlinedInput label="categories" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div style={{display:'flex',justifyContent:'space-around',flexDirection:"row",flexWrap:"wrap",gap:'12px',marginTop:'6%'}}>
        {/* {catProducts?.map((item, id) => (
          <Box>
            <Card sx={{ width: "86%" }}>
              <CardMedia sx={{ width:{xl:'200px',sm:'300px',md:'300px',xs:'270px',},minHeight:{xl:"250px",sm:'200px',md:'150px',xs:'100px' },maxHeight:{xl:"250px",sm:'230px',md:'245px',xs:'240px'},display:'block',margin:'auto'}} image={item.image} />
              <CardContent>
                <Typography>{item.title}</Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ maxHeight: "100px" }}
                >
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ textAlign: "center" }}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Box>
        ))} */}
      </div>
    </div>
  );
  
};

export default Dropdown;
