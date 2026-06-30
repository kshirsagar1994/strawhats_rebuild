'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">About Strawhats</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pioneering the Next Era of Digital Experiences
            </h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              At Strawhats, we don't just write code; we architect solutions that drive business growth. Our mission is to empower startups and enterprises with scalable, high-performance software.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              From robust cloud infrastructures to immersive web applications, our team of seasoned engineers and designers collaborate to turn complex challenges into elegant digital products.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden glass border border-white/10"
          >
            {/* Abstract Shapes inside the glass panel */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary/30 rounded-full blur-[40px]"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/30 rounded-full blur-[60px]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full h-full bg-[#111] rounded-2xl border border-white/5 shadow-2xl overflow-hidden relative">
                {/* Mockup UI representation */}
                <div className="absolute top-0 w-full h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-8 pt-16 h-full flex flex-col gap-4">
                  <div className="w-3/4 h-8 bg-white/5 rounded-lg animate-pulse"></div>
                  <div className="w-full h-4 bg-white/5 rounded w-full"></div>
                  <div className="w-full h-4 bg-white/5 rounded w-5/6"></div>
                  <div className="w-full h-4 bg-white/5 rounded w-4/6"></div>
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl"></div>
                    <div className="h-24 bg-white/5 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
