import { Button, Drawer, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { add, update } from '../../store/ProductsSlice';
import { ProductContext } from '../../context/Cart/CartContext';
import { useContext } from 'react';
import { FormContext, contextForm } from '../../context/Cart/FormContext';

const ValidationSchema = Yup.object().shape({
    image: Yup.string().required(""),
    title: Yup.string().required("Please Enter  title"),
    price: Yup.string().required("Please Enter  price"),

  });

const DrawerForm = () => {
 const {productValue,setdrawerOpen,drawerOpen,changeproductValue}=useContext(ProductContext)
const {formEdit}=useContext(FormContext)

 
  console.log(formEdit);
  const [initValues,setiniValues]=useState({
    title: "",
    image: '',
    price: 'test',
    id:''
  });
  const dispatch=useDispatch()
   
  const  handleClose=()=>{
    setdrawerOpen(!drawerOpen)
  }
  // console.log(productValue)
const handleSubmit=(values)=>{
    console.log(values);
    if(formEdit===true){
      dispatch(update(values))
      changeproductValue(null)
    }
    else{
      dispatch(add(values))
      setdrawerOpen(false)
      
    }
    
    formik.values.title="";
    formik.values.price="";
    formik.values.id="";
    formik.values.image="";


  }  

useEffect(()=>{
if (productValue || formEdit===true ) {
  console.log(productValue);

  formik.values.title=productValue?.title
  formik.values.price=productValue?.price
  formik.values.id=productValue?.id

}},
[productValue])

  const formik = useFormik({
    initialValues: {
      title: '',
      image: '',
      id:"",
      price: '',
    },
    validationSchema:ValidationSchema,
    onSubmit:( values) => {
      
        console.log(values);
        handleSubmit(values)
      
        
      },
  });
  // console.log(formik.values?.title);

  return (
    <>
    <Drawer
    anchor={"right"}
    open={drawerOpen }
    onClose={handleClose}
    className="abc"
  >
    <Box
      sx={{
        width: { xl: "700px", sm: "500px", md: "400px", xs: "300px" },
        height: {xl:"300px",sm:'280px',xs:'300px',md:'280px'},
        
        display: "flex",
        padding: "74px",
        display:'flex' ,
        left:'50%',
        right:'50%'
        
      }}
    >
     <Typography sx={{position:'absolute',
        left:'10%',color:'red',fontSize:'22px',fontWeight:'bolder',bottom:{xs:'92%'}}}>Add products</Typography> 
     <Box sx={{marginTop:'10%'}}>
      <form onSubmit={formik.handleSubmit} >
       <label style={{fontWeight:'bold'}} htmlFor="image">Image</label>
       <br />
       <TextField
       sx={{width:'100%',}}
       variant='filled'
       size='small'
         id="image"
         name="image"
         type="file"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
        
         error={
            Boolean(formik.errors.image) && Boolean(formik.touched.image)
          }
          
          helperText={Boolean(formik.errors.image) && formik.errors.image}
          
       />
<br />
 
       <label style={{fontWeight:'bold'}} htmlFor="title">Title</label>
       <br />
       <TextField
       sx={{width:{xl:'100%',sm:'100%',md:'100%',xs:'100%'}}}
       variant='filled'
       size='small'
         id="lastName"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
         error={
            Boolean(formik.errors.title) && Boolean(formik.touched.title)
          }
          
          helperText={Boolean(formik.errors.title) && formik.errors.title}
       />
  <br />
       <label style={{fontWeight:'bold'}} htmlFor="email">Price</label>
       <br />
       <TextField 
       sx={{width:'100%',}}
       variant='filled'
       size='small'
         id="price"
         name="price"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
         error={
            Boolean(formik.errors.price) && Boolean(formik.touched.price)
          }
          
          helperText={Boolean(formik.errors.price) && formik.errors.price}
       />
<br /> <br />
 
       <Button
       type="submit"
       variant='contained'
       sx={{backgroundColor:'blue'}}

       >Add</Button>
     </form>
     </Box>
    </Box>
  </Drawer>

  <Button sx={{color:'white',padding:{xl:'13px',sm:'8px',md:'7px',xs:'3px',width:{xs:'2%'}},backgroundColor:'red',fontSize:{xs:'10px',xl:'15px',md:'12px',sm:'10px'}}} onClick={()=>setdrawerOpen(true)}>Add product</Button>
  </>
  )
}

export default DrawerForm
