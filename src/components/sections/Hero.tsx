'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-white/10 glass text-sm font-medium text-gray-300 mb-8"
        >
          🚀 Strawhats 2026 Premium Edition
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 text-balance"
        >
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital</span> Futures
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-balance"
        >
          Strawhats is an elite software development agency delivering premium websites, mobile applications, and enterprise solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#portfolio" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform">
            View Portfolio <ArrowRight size={18} />
          </Link>
          <Link href="#contact" className="flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors">
            Get in Touch
          </Link>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[30%] left-[15%] glass p-4 rounded-2xl"
            >
              <Code className="text-primary w-8 h-8" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -30, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[50%] right-[15%] glass p-4 rounded-2xl"
            >
              <Smartphone className="text-accent w-8 h-8" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] left-[25%] glass p-4 rounded-2xl"
            >
              <Monitor className="text-blue-400 w-8 h-8" />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
