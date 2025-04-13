"use client";

import React from 'react'
import { FaBabyCarriage } from "react-icons/fa";
import ThemeToggleButton from './ThemeButton';

const Header = () => {
  return (
    <div className='schemaNav !justify-around '>
        <span className={`btn !cursor-default  `}><FaBabyCarriage/></span>
        <span className={``}><ThemeToggleButton/> </span>
    </div>
  )
}

export default Header
