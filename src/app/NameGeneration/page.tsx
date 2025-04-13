"use client";
import React from 'react';
import GlobalNavBar from '@/app/Ai/components/GlobalNavBar';
import Generator from './Components/Generator';
import BackGround from './Components/BackGround/BackGround';
import Header from './Components/Header/Header';

export default function Home() {
return (
<>
    <div className=" page from-indigo-800 to-orange-800 dark:from-gray-800 dark:to-stone-900 flex-wrap !pt-0 ">
        <GlobalNavBar/>
        <BackGround/>
        <Header/>
        <Generator/>
    </div>
</>
);
}
