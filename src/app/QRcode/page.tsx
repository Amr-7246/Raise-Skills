"use client";

import React from 'react';
import { motion } from 'framer-motion';
import GlobalNavBar from '../Ai/components/GlobalNavBar';
import QRcode from './components/QRcode';

export default function Home() {
return (
    <>
        <motion.div  className=" page from-sky-700 to-sky-950 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <GlobalNavBar/>
            <QRcode />
        </motion.div>
    </>
);
}
