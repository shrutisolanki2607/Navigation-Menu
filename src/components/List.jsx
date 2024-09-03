import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import {Items} from './MenuItems';

function List() {
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
      <ul className='hidden md:flex items-center gap-5 text-xl'>
        <li>
        <NavLink className={({isActive})=>(
            isActive ? "bg-white text-black p-2 border rounded-lg " : "hover:underline")}
            to='/Home'>Home
        </NavLink>
        </li>
        <li className='relative'
        onMouseEnter={() => handleDropdownOpen()}
        onMouseLeave={handleDropdownClose} > 
       <Link className="flex items-center block px-4 py-2 hover:underline"
            to='/Resources'> Resources 
        <RiArrowDropDownLine className='ml-2 text-lg' />
        </Link>
      <div className={`absolute top-full left-0 z-10 bg-white border border-gray-300 rounded-md shadow-lg ${dropdown ? 'block' : 'hidden'}`}>
        {Items.map((item, index) => (
          
          <li key={index} 
            className='block px-4 py-2 hover:bg-blue-200 relative'
            onMouseEnter={() => handleDropdownOpen(index)}
            onMouseLeave={handleDropdownClose}>
             {/* { console.log(item)} */}
              
             <Link to={item.path}>{item.title}</Link>
            {item.children && (
              <RiArrowDropDownLine className='ml-2 text-lg inline-block' />
            )}

            {item.children && activeItem === index && (
              <ul className='absolute left-full top-0 mt-0 w-48 bg-white shadow-lg border border-gray-300 rounded-md'>
                {item.children.map((child, idx) => (
                  <li key={idx} className='block px-4 py-2 hover:bg-blue-200'>
                    <Link to={child.path}>{child.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

        ))}
      </div>
    </li>
        <li>
          <NavLink className={({isActive})=>(
            isActive ? "bg-white text-black p-2 border rounded-lg " : "hover:underline")}
            to='/Investors' >For Investors</NavLink>
        </li>
        <li>
          <NavLink className={({isActive})=>(
            isActive ? "bg-white text-black p-2 border rounded-lg" : "hover:underline")}
          to='/Founders'>For Founders</NavLink>
        </li>
        <li >
          <button type='submit' className='bg-white text-blue border border-blue-300 rounded px-3 py-0.5 hover:bg-blue-300'>Sign In</button>
        </li>
        <li >
          <button type='submit' className='bg-white text-blue border border-blue-300 rounded px-3 py-0.5 hover:bg-blue-300'>Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default List;
