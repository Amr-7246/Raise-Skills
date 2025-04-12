"use client";
import React from 'react';
import Game from './components/HangMan';
import Blocks from './components/MemoryBlocks';
import GlobalNavBar from '../Ai/components/GlobalNavBar';

export default function Home() {
return (
<>
    <div className=" page from-indigo-700 to-sky-500 flex-wrap gap-y-10 ">
        <GlobalNavBar/>
        <Game/>
        <Blocks/>
    </div>
</>
);
}
