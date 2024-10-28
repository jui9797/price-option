import { list } from 'postcss';
import React, { useState } from 'react';
import Link from './Link';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const CostomizeNav = () => {

const [open, setOpen] =useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
      ];
      
    return (
        <div>
            <div className='md:hidden text-4xl' onClick={()=>setOpen(!open)}>
                {
                    open ===true? <MdOutlineRestaurantMenu /> :
                    <AiOutlineMenuUnfold />
                }
            
            </div>
           <ul className={`md:flex absolute md:static duration-200 ${open? 'top-16 z-10' : '-top-60'} bg-yellow-200 px-4`}>
            {/* map kore link component k render korano hoise */}
           {
             routes.map(route =><Link key={route.id} route={route}></Link>)
           }
            </ul> 
        </div>
    );
};

export default CostomizeNav;