import React, { useState } from 'react';
import {Link}from 'react-router-dom';
import logo from "../../assets/logo.svg";
function Navbar() {
  const [icon, setIcon] = useState("menu");
   

    const onToogleMenu=()=>{
          if(icon==="menu")
          setIcon("close");
          else
          setIcon("menu");
          const navLinks=document.querySelector('.nav-links');
          navLinks.classList.toggle('top-[9%]');
        }    

    return (

        <div>
            <nav className='flex justify-between items-center w-[92%] text-2xl m-2'>
                <div>
                    <img className='w-26 h-16' src={logo} alt="..." />
                </div>
                <div className='nav-links  duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 '>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <Link className="hover:text-gray-500" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500" to="/applications">Applications</Link>
                        </li>
                        
                        <li>
                            <Link className="hover:text-gray-500" to="/products">Products</Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-500" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className='flex items-center gap-6'>
                    <span onClick={onToogleMenu} className="material-symbols-outlined text-5xl cursor-pointer md:hidden">{icon}</span>
                    </div>
            </nav>
        </div>
    )
}

export default Navbar
