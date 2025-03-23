"use client";
import React from 'react';
import Game from './components/Game';
import GlobalNavBar from '../components/GlobalNavBar';

export default function Home() {
return (
<>
    <div className=" h-screen bg-ai-gradient from-gradientStart via-gradientMid to-gradientEnd py-20 ">
        <GlobalNavBar/>
        <Game/>
    </div>
</>
);
}
