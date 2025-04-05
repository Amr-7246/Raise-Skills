"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlobalNavBar from '../components/GlobalNavBar';
import Payment from './components/Payment';

export default function Home() {
return (
    <>
        <motion.div  className=" page from-green-600 to-green-400 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlobalNavBar/>
            <Payment/>
        </motion.div>
    </>
);
}
