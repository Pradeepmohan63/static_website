import React from 'react'
import '../nav/nav.css'
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
const nav = () => {
  return (
    <div className='nav col-12'>
        <div classname='logo'>
           <img src='../../images/logo.svg' alt='img.svg'/>
        </div>
        <div className='location'>
            <p>Medavakkam <FaAngleDown/></p>
        </div>

        <div className='searchbar'>
            <div className='icon'>
            <p><IoSearch/></p></div>
            <input type='text' name='search' placeholder='search for over 5000 products'/>
        </div>
        <div className='login'>
            <p>
                Login
            </p>
        </div>
        <div className='btn'>
            <button> <BsHandbag/> My Cart</button>
        </div>
    </div>
  )
}

export default nav;