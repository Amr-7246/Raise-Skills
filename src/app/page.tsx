"use client";

import React from 'react';
import GlobalNavBar from './components/GlobalNavBar';
import ImageGeneration from './components/ImageGeneration';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <motion.div  className="page from-rose-600 via-purple-900 to-sky-700 " initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} >
          <GlobalNavBar/>
          <ImageGeneration/>
      </motion.div>
    </>
  );
}
