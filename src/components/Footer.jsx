import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = () => {
  return (
    <div>
      <footer class="text-white body-font bg-slate-800 w-100%" style={{width:'100%',right:'0'}}>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/2 md:w-1/2 w-full px-4">
        <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap pb-8 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span class="ml-3 text-xl text-white-" style={{fontWeight:'900',color:'white'}}>Essence</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class=" text-white mr-5 hover:text-blue-600">Shop</a>
      <a class="text-white  mr-5 hover:text-blue-600">Blog</a>
      <a class=" text-white mr-5 hover:text-blue-600">Contact</a>
    </nav>
  </div>
  <br />
  <div class="lg:w-1/2 w-full px-2 ">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3" style={{fontWeight:'bolder'}}>SUBSCRIBE</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <input style={{width:'200px'}} type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700  px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Your email here' />
           <i><ArrowForwardIcon sx={{cursor:'pointer',position:'absolute',right:'6px',height:'35px',bottom:{xs:'2px'},left:{xs:'106%'}}} /></i> 
          </div>
         
        </div>
      </div>
</header>
      </div>
      <div class="lg:w-1/4 md:w-1/4 sm:w-1/4 xs:w-1/4 w-full px-4 ">
        <nav class="list-none mb-10 ">
          <li>
            <a class="text-white hover:text-blue-600 ">order status</a>
          </li>
          <li>
            <a class="text-white hover:text-blue-600">shipping and delivery</a>
          </li>
          <li>
            <a class="text-white hover:text-blue-600">privacy policy</a>
          </li>
        </nav>
        <div className='text-white xs:justify-center ml-12 sm: ml-12 md: ml-12 sm:ml-12' style={{display:'flex'}}>
        <a class="text-white ">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
        </div>
    
      </div>
      <div class="lg:w-1/4 md:w-1/4 sm:w-1/4 xs:1/4 mt-3 w-full px-4">
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-blue-600">payment options</a>
          </li>
          <li>
            <a class="text-white hover:text-blue-600">Guides</a>
          </li>
          <li>
            <a class="text-white hover:text-blue-600">Terms of use</a>
          </li>
        </nav>
      </div>
      <div style={{display:'flex',margin:'auto'}} class="bg-black-100">
    <div class="container px-4 py-6 mx-auto flex items-center sm:flex-row flex-col mr-6 ">
      <br /> <br /> 
      <p  class="text-sm text-white sm:ml-6 sm:mt-6 ">Copyright ©2023 All rights reserved | This template is made with <FavoriteIcon/> by Colorlib

      </p>
    </div>
  </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
