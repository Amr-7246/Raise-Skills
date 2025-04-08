"use client";
import React from 'react';
import TranslatCard from './components/TranslatCard';
import { motion } from 'framer-motion';
import GlobalNavBar from '../components/GlobalNavBar';

export default function Home() {
return (
    <>
        <motion.div
            className=" page from-sky-400  to-sky-900 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <GlobalNavBar/>
            <TranslatCard/>
        </motion.div>
    </>
);
}
