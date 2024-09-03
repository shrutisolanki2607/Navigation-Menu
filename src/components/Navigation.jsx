import React, { useState } from 'react'
import logo from '../images/logo.jpg';
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import List from './List';
import ResList from './ResList';

function Navigation() {
  
  const[toggle ,settoggle] = useState(false);
   
  return (
   <div className='h-16'>
    <nav className='max-w-[1240px]  flex item-center justify-between sticky top-[0] sm:relative' > 
      <div className='flex item-center'>
        <img src={logo} alt='logo' className='h-16' />
       <h1 className='font-bold text-2xl ml-4 md:font-bold text-3xl ml-5'>Lets create</h1>
      </div>
      {
        toggle ?
        <IoClose onClick={()=>settoggle(!toggle)} className='text-2xl md:hidden block m-2 fixed right-5 top-5'/> 
        :
        <IoMenuSharp onClick={()=>settoggle(!toggle)} className='text-2xl md:hidden block m-2 right-5 top-5 fixed'/>
      }
      <List className='flex item-center justify-between' />
      <ResList toggle={toggle}/>
     
      
  </nav>
</div>   
  )
}

export default Navigation