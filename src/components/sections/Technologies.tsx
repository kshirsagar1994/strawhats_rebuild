'use client';

import { motion } from 'framer-motion';

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Java"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes"] },
];

export default function Technologies() {
  return (
    <section className="py-24 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Tech Stack</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Powered By Modern Technologies</h3>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all"
            >
              <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">{stack.category}</h4>
              <ul className="space-y-4 text-gray-400">
                {stack.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
