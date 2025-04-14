"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlobalNavBar from '../Ai/components/GlobalNavBar';
import { Navbar } from './components/Navbar';

export default function Home() {
return (
    <>
        <motion.div  className=" page from-orange-400 to-orange-300 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlobalNavBar/>
            <Navbar/>
        </motion.div>
    </>
);
}
