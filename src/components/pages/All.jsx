import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { add, fetchProducts,asc,desc, priceAsc } from '../../store/ProductsSlice';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../context/Cart/CartContext';
import { useState } from 'react';
import { FormContext, contextForm } from '../../context/Cart/FormContext';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
function All({values}) {
const {productValue,changeproductValue,drawerOpen,setdrawerOpen}=useContext(ProductContext)
const {setformEdit,formEdit}=useContext(FormContext)
  const dispatch=useDispatch()
  const { data: products,add} = useSelector((state) => state.products);
  useEffect(()=>{
    if(products.length==0){
    dispatch(fetchProducts())
    setdrawerOpen(false)
    
  }
  },[dispatch])
  useEffect(()=>{
    if(productValue){
     setformEdit(true)
    setdrawerOpen(true)
   
  }


  },[productValue])
  if (values === "A to Z") {
    dispatch(asc())
  }
  if (values === "Z to A") {
   dispatch(desc())
   console.log(desc)
  }
  if (values === "1 To 100") {
    dispatch(priceAsc())
    console.log(priceAsc)
   }
   if (values === "100 To 1") {
    dispatch(priceAsc())
    console.log(priceAsc)
   }
 
  return (
    <div style={{display:'flex',justifyContent:'space-around',flexDirection:"row",flexWrap:"wrap",gap:'12px',marginTop:'6%'}}>
      {products.map((product,id)=>(
            <Card sx={{ width:{xl:'16%',sm:'40%',md:'32%',xs:'70%'}}}>
            <CardMedia
             sx={{ width:{xl:'200px',sm:'200px',md:'200px',xs:'200px',},minHeight:{xl:"250px",sm:'250px',md:'250px',xs:'250px' },maxHeight:{xl:"250px",sm:'230px',md:'245px',xs:'240px'},display:'block',margin:'auto'}}
              image={product.image}
            />
            <CardContent>
              <Typography>{product.title}</Typography>
              <Typography gutterBottom variant="h5" component="div" sx={{maxHeight:'100px'}}>
               ${product.price}
              </Typography>
            </CardContent>
            <CardActions >
              <IconButton sx={{display:'block',margin:'auto',':hover':{
                backgroundColor:'secondary.main',color:"white"
              },borderRadius:'8%'}} onClick={()=>{
               changeproductValue(product);
              
                }} 
               
                size="small">Edit<EditIcon sx={{padding:"2px",height:'19px'}}/></IconButton>
              
            </CardActions>
          </Card>
      
      ))}
    </div>
  )
}

export default All
