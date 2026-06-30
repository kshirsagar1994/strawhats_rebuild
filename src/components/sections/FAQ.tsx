'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. A standard web application might take 8-12 weeks, while complex enterprise systems can take 4-6 months. We provide detailed timelines during the discovery phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer comprehensive SLA-backed support and maintenance packages to ensure your application remains secure, up-to-date, and performs optimally as you scale."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core stack includes React, Next.js, and Tailwind CSS for frontend, with Node.js, Python, or Go for backend services. We deploy primarily on AWS and Azure cloud infrastructure."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use a transparent Agile methodology with weekly sprint reviews. You'll have a dedicated project manager, access to our Jira board, and a shared Slack/Teams channel for daily communication."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass rounded-2xl border border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
