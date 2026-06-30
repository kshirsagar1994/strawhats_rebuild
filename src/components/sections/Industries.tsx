'use client';

import { motion } from 'framer-motion';
import { BookOpen, HeartPulse, ShoppingBag, Factory, Landmark, Home, Coffee } from 'lucide-react';

const industries = [
  { name: "Education", icon: BookOpen },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Retail", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance", icon: Landmark },
  { name: "Real Estate", icon: Home },
  { name: "Hospitality", icon: Coffee },
];

export default function Industries() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Industries We Serve</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-16">Domain Expertise</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3 px-6 py-4 glass rounded-full border border-white/5 hover:border-primary hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <industry.icon size={20} className="text-gray-300" />
              <span className="text-white font-medium">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
