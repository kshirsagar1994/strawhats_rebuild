'use client';

import { motion } from 'framer-motion';

const clients = [
  "Microsoft", "Google", "Amazon", "Meta", "Apple", "Netflix", "Tesla", "Spotify", "Adobe", "Intel"
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          Trusted by Innovative Companies Worldwide
        </p>
      </div>
      
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 pr-16 items-center"
        >
          {/* Double array for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="text-2xl md:text-3xl font-bold text-white/20 hover:text-white transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
