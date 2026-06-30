'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, TestTube, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  { title: "Discovery", desc: "Understanding your business goals and requirements.", icon: Search },
  { title: "Planning & Design", desc: "Creating wireframes, UI/UX designs, and architecture.", icon: PenTool },
  { title: "Development", desc: "Writing clean, scalable code using Agile methodologies.", icon: Code },
  { title: "Testing", desc: "Rigorous QA testing for bugs, performance, and security.", icon: TestTube },
  { title: "Deployment", desc: "Seamless launch to production servers or app stores.", icon: Rocket },
  { title: "Support", desc: "Ongoing maintenance, updates, and scaling.", icon: HeartHandshake }
];

export default function Process() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">How We Build Excellence</h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full glass border-2 border-primary bg-transparent flex items-center justify-center -translate-x-1/2 z-10 text-white">
                    <step.icon size={20} />
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                      <div className="text-primary font-bold mb-2">Step 0{index + 1}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
