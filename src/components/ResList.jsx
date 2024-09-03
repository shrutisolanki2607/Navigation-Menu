import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import {Items} from './MenuItems'

function ResList({toggle}) {
    const [dropdown, setDropdown] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
  
    const handleDropdownOpen = (index) => {
      setDropdown(true);
      setActiveItem(index);
    };
  
    const handleDropdownClose = () => {
      setDropdown(false);
      setActiveItem(null);
    };
  
  return (
    <div>
        <ul className={`duration-500 md:hidden fixed bg-black text-white gap-10 top-[98px] w-full h-screen
       ${toggle? 'left-[0]' : 'left-[-100%]'}`}>
        
        <li className=' block px-4 py-2'><Link to='/Home'>Home</Link></li>
        <li className=' block px-4 py-2 relative'>
        <Link className='flex item-center' to='/Resources' onMouseEnter={() => handleDropdownOpen()}
         onMouseLeave={handleDropdownClose}>
        Resoures  <RiArrowDropDownLine className='ml-2 text-lg' /></Link>
        
        <div className={` top-full left-0 z-10 bg-gray border border-gray-300 rounded-md shadow-lg ${dropdown ? 'block pb-[5]' : 'hidden'}`}>
            {
                Items.map((items,index) =>(
                  <li key={index} className='block px-4 py-2'
                  onMouseEnter={() => handleDropdownOpen(index)}
                  onMouseLeave={()=>handleDropdownClose}><span className='hover:bg-blue-200 px-5'>{items.title}</span>
                  {items.children  && (<RiArrowDropDownLine className='ml-2 text-lg inline-block' />)}
                  {items.children && activeItem===index && (
                    <ul className=' left-full top-0 mt-0 w-48 bg-black shadow-lg '>
                        {
                            items.children.map((child,ind)=>(
                                <li key={ind} className='block px-4  py-2 '><span className='hover:bg-blue-200 px-5 left-[5]'>{child.name}</span></li>
                            ))}
                    </ul>
                  )}
                  </li>
                ))
            }
        </div>
        </li>
        <li className=' block px-4 py-2'><Link to='/Investors'>Investors</Link></li>
        <li className=' block px-4 py-2'><Link to='/Founders'>Founders</Link></li>
        <li className=' block px-4 py-2'><button className='bg-white text-black w-1/6 p-0.5' >Sign In</button></li>
        <li className=' block px-4 py-2'><button  className='bg-white text-black w-1/6 p-0.5'> Sign Up</button></li>

      </ul>
     
    </div>
  )
}

export default ResList