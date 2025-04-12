"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlobalNavBar from '../Ai/components/GlobalNavBar';
import SpeedTyping from './components/SpeedTyping';

export default function Home() {
return (
    <>
        <motion.div  className=" page from-teal-700 to-teal-950 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlobalNavBar/>
            <SpeedTyping/>
        </motion.div>
    </>
);
}
