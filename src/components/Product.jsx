import React from 'react';
import { useState, useEffect } from "react";
import { addToCart } from "../store/CartSlice";
import Carousel from "react-grid-carousel";
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button, Typography } from '@mui/material';
import axios from "axios";
import { useRef } from 'react';
import Categories from './Categories';

const Products = () => {
    const [hover, sethover] = useState(false);
    const { quantity}   = useSelector((state) => state.cart);
    const [products, setProducts] = useState([]);
    const [allProducts,setallProducts]=useState([])
  const dispatch = useDispatch();
  console.log(allProducts)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        setProducts(data)
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);
  useEffect(()=>{
    let arr=[]
if(products){
  products?.forEach((item,i)=>{
arr.push({
  ...item,
  isFavourite:false,
})
  })
  setallProducts(arr);

}
  },[products])

const handleColor=(product)=>{
 let filteredData=products?.filter((item)=>{
  if(item?.id===product?.id){
    product.isFavourite= !product.isFavourite
  }
  return product
})
console.log(filteredData);
setallProducts(filteredData)
 



}
  return (
    <>
    <Carousel cols={4} rows={1} gap={1} loop autoplay={2000} >
      {allProducts?.map((product,i)=>{
        // console.log(product);
       return(
         <Carousel.Item sx={{minHeight:{sm:'200px',xs:'190px'},width:{sm:'66%',xs:'50%'},width:''}}  >
          <Box 
            onMouseEnter={() => {
              sethover(true);
            }}
            onMouseLeave={() => {
              sethover(false);
              
            }}
            sx={{ position: "relative"}}
          >
            <FavoriteIcon  onClick={()=>{handleColor(product)}} className="icon"
           
              sx={{
                
                position: "absolute",
                top: "8px",
                left: "5px",
                height: "23px",
                width: "63px",
                backgroundColor: "white",
                color:  product?.isFavourite===true ?"red !important":'grey',
                transform: hover ? "scale(1)" : "scale(0)",
                cursor: "pointer",
              }}
            />
            <Button className="btn"
              onClick={() => dispatch(addToCart( product ))}
              sx={{
                ':hover': { bgcolor: 'red', color:'white'
        },
                position: "absolute",
                top: "200px",
                backgroundColor: "blue",
                color: "white",
                transform: hover ? "scale(1)" : "scale(0)",
                cursor: "pointer",
                width:{xl:'140px',xs:'130px',sm:'130px'},
                height:{sm:'40px',xs:'40px',xl:'40px'},
                left:{sm:'39px',xl:'34px',xs:'35px',md:'23px'}
              }}
            >
              Add to cart
            </Button>
            <Box className='percent'
              sx={{
                position: "absolute",
                top: "7px",
                height: "20px",
                width: "60px",
                backgroundColor: "red",
                color:'white',
                cursor: "pointer",
                transform: hover ? "scale(1)" : "scale(0)",
                left:{sm:'130px',xs:'160px',xl:'150px',md:'130px'}
              }}
            >
              -30%
            </Box>
              <Box
              >
              <img src={product.image} style={{ width:'200px',minHeight:"250px" ,maxHeight:"250px"}}  alt="abgfg"  />
              </Box>
           
            <Box sx={{position:'relative',right:{sm:'80px',xs:'50px',xl:'140px',md:'30px'},
                  fontSize:{sm:'18px'}
        }}>
            
            <Typography sx={{fontWeight:'bolder',position:'relative',right:{sm:'111px',md:'5px'}}}>{product.title}</Typography>
            <Typography sx={{color:'grey'}}>${product.price}</Typography>
            </Box>
            
          </Box>
      </Carousel.Item>
      )
      })}
        

        
      
      
    </Carousel>
<br /> <br />
    <Categories setProducts={setProducts} products={products}/>
</>
  )
}

export default Products
