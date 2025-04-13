"use client";
import React from 'react';
import GlobalNavBar from '@/app/Ai/components/GlobalNavBar';
import MemoryBlocks from './components/MemoryBlocks';
import GameNavBar from '../Components/GameNavBar';

export default function Home() {
return (
<>
    <div className=" page from-stone-900 to-stone-950 flex-wrap !pt-0 ">
        <GameNavBar/>
        <GlobalNavBar/>
        <MemoryBlocks/>
    </div>
</>
);
}
