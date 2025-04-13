import React from 'react';
import { GiBabyfootPlayers, GiBabyBottle, GiNightSleep } from "react-icons/gi";
import { FaBaby, FaBabyCarriage } from "react-icons/fa";
import { MdBabyChangingStation, MdChildCare, MdPregnantWoman } from "react-icons/md";
import { PiBabyBold, PiBabyCarriageBold } from "react-icons/pi";
import { MdToys } from "react-icons/md";
import { MdOutlineSmartToy } from "react-icons/md";
import { GiToyMallet } from "react-icons/gi";
import { LuToyBrick } from "react-icons/lu";
import { TbHorseToy } from "react-icons/tb";
import { LuSunMoon } from "react-icons/lu";
import { RxMoon } from "react-icons/rx";
import { PiMoonStarsFill } from "react-icons/pi";
import { PiCloudMoonThin } from "react-icons/pi";

const BackGround = () => {
    return (
    <div className=' z-[-1] absolute w-[100%] h-[100%]'>
        <div className='backGround-icons text-[50px] rotate-[0deg] top-[30%] left-[5%] '><GiBabyfootPlayers /></div>
        <div className='backGround-icons text-[50px] rotate-[15deg] top-[60%] left-[85%] '><FaBaby /></div>
        <div className='backGround-icons text-[50px] rotate-0 top-[12%] left-[8%] '><MdBabyChangingStation /></div>
        <div className='backGround-icons text-[60px] rotate-[-20deg] top-[10%] left-[80%] '><GiBabyBottle /></div>
        <div className='backGround-icons text-[80px] rotate-[15deg] top-[80%] left-[2%] '><PiBabyBold /></div>
        <div className='backGround-icons text-[70px] rotate-[35deg] top-[53%] left-[20%] '><PiBabyCarriageBold /></div>
        <div className='backGround-icons text-[65px] rotate-[20deg] top-[40%] left-[70%] '><MdChildCare /></div>
        <div className='backGround-icons text-[55px] rotate-[-10deg] top-[25%] left-[50%] '><FaBabyCarriage /></div>
        <div className='backGround-icons text-[60px] rotate-[-15deg] top-[15%] left-[30%] '><GiNightSleep /></div>
        <div className='backGround-icons text-[50px] rotate-[10deg] top-[65%] left-[10%] '><MdPregnantWoman /></div>
        <div className='backGround-icons text-[45px] rotate-[10deg] top-[15%] left-[70%]'><MdToys/></div>
        <div className='backGround-icons text-[55px] rotate-[-10deg] top-[25%] left-[15%]'><MdOutlineSmartToy/></div>
        <div className='backGround-icons text-[60px] rotate-[20deg] top-[80%] left-[80%]'><GiToyMallet/></div>
        <div className='backGround-icons text-[50px] rotate-[30deg] top-[35%] left-[40%]'><LuToyBrick/></div>
        <div className='backGround-icons text-[65px] rotate-[-15deg] top-[70%] left-[60%]'><TbHorseToy/></div>
        <div className='backGround-icons text-[50px] rotate-[5deg] top-[-1%] left-[2%]'><LuSunMoon/></div>
        <div className='backGround-icons text-[55px] rotate-[-5deg] top-[5%] left-[50%]'><RxMoon/></div>
        <div className='backGround-icons text-[70px] rotate-[25deg] top-[90%] left-[30%]'><PiMoonStarsFill/></div>
        <div className='backGround-icons text-[60px] rotate-[-30deg] top-[40%] left-[90%]'><PiCloudMoonThin/></div>
    </div>
    );
};

export default BackGround;
