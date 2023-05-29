import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { asc, desc, fetchProducts } from '../../store/ProductsSlice';

const WomenCateg = ({value,sortVal,setsortVal}) => {
  const dispatch=useDispatch()
  const { data: products,add} = useSelector((state) => state.products);
  useEffect(()=>{
    if(products.length==0){
    dispatch(fetchProducts())
  }
  },[dispatch])
    const[productData,setproductData]=useState([])
    useEffect(()=>{
        let arr=[]
        if(value===2){
           products.forEach((item,i)=>{
                arr.push({
                  ...item,
                  
                })
                  })
                  setproductData(arr);
                
    }
    const filteredItems = products.filter((item) => item.category ==="women's clothing"
    );
    setproductData(filteredItems) 
    console.log("filteredItems", filteredItems);


    },[products])
 
    console.log(value);
    console.log(products);
    if (sortVal === "A to Z") {
      dispatch(asc())
    }
    if (sortVal === "Z to A") {
     dispatch(desc())
     console.log(desc)
    }
  return (
    <div style={{display:'flex', gap:"10px",justifyContent:'space-around',flexDirection:"row",flexWrap:"wrap",marginTop:'6%'}}>
    {productData?.map((product,id)=>(
          <Card sx={{ width:{xl:'16%',sm:'40%',md:'32%',xs:'70%'}}}>
          <CardMedia sx={{ width:{xl:'200px',sm:'200px',md:'200px',xs:'200px',},minHeight:{xl:"250px",sm:'250px',md:'250px',xs:'250px' },maxHeight:{xl:"250px",sm:'230px',md:'245px',xs:'240px'},display:'block',margin:'auto'}}
             style={{ width:'200px',minHeight:"250px" ,maxHeight:"250px",display:'block',margin:'auto'}}
            image={product.image}
          />
          <CardContent>
            <Typography>{product.title}</Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{maxHeight:'100px'}}>
             ${product.price}
            </Typography>
          </CardContent>
          <CardActions sx={{textAlign:'center'}}>
            <Button sx={{display:'block',margin:'auto'}} size="small"></Button>
           
          </CardActions>
        </Card>
    
    ))}
  </div>
)
}

export default WomenCateg
