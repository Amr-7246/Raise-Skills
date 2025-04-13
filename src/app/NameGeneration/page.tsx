"use client";
import React from 'react';
import GlobalNavBar from '@/app/Ai/components/GlobalNavBar';
import Generator from './Components/Generator';

export default function Home() {
return (
<>
    <div className=" page from-stone-900 to-stone-950 flex-wrap !pt-0 ">
        <GlobalNavBar/>
        <Generator/>
    </div>
</>
);
}
