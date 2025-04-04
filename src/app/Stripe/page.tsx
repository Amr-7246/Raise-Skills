"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlobalNavBar from '../components/GlobalNavBar';
import Payment from './components/Payment';

export default function Home() {
return (
    <>
        <motion.div  className=" page from-sky-300 to-sky-200 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlobalNavBar/>
            <Payment/>
        </motion.div>
    </>
);
}
