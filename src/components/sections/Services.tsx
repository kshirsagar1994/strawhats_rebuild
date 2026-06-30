'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Blocks, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    title: "Website Development",
    description: "Your website deserves the best, after all it is the internet advertising billboard for you and your company.",
    icon: Monitor,
  },
  {
    title: "Mobile Application",
    description: "The relationships between the apps that user has installed on their phone will become exponentially more important, to both the consumer and the businesses themselves.",
    icon: Smartphone,
  },
  {
    title: "Desktop Application",
    description: "A stand alone Application in a desktop or laptop computer for Business Management.",
    icon: Blocks,
  },
  {
    title: "Digital Marketing",
    description: "Marketing is not the art of finding clever way to dispose what you make, Its a art of creating genuine customer value.",
    icon: BarChart,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Digital Services
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We provide end-to-end software development services using the latest technologies and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-8 glass overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                <service.icon size={120} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full justify-start">
                <div className="mb-6 inline-flex self-start p-4 rounded-xl bg-white/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
