'use client';

import { motion } from 'framer-motion';
import { Zap, Users, ShieldCheck, HeartHandshake, Code2, Cpu } from 'lucide-react';

const reasons = [
  { title: "Fast Delivery", desc: "Agile methodologies ensure rapid time-to-market without compromising quality.", icon: Zap },
  { title: "Experienced Team", desc: "Senior engineers and designers with years of enterprise experience.", icon: Users },
  { title: "Secure & Scalable", desc: "Enterprise-grade security and architectures built to handle millions of users.", icon: ShieldCheck },
  { title: "Dedicated Support", desc: "24/7 maintenance and support to keep your systems running flawlessly.", icon: HeartHandshake },
  { title: "Custom Solutions", desc: "No cookie-cutter templates. Everything is tailored to your exact needs.", icon: Code2 },
  { title: "Latest Tech", desc: "We leverage the absolute cutting-edge in AI, Cloud, and Web technologies.", icon: Cpu }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">The Strawhats Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Clients Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <reason.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
