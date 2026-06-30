'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, FinTech Innovators",
    text: "Strawhats completely transformed our legacy systems into a modern, scalable architecture. Their team is exceptionally talented and delivered ahead of schedule.",
  },
  {
    name: "Michael Chen",
    role: "Founder, EduLearn Platform",
    text: "The mobile app they built for us has flawless performance and a beautiful UI. Our user engagement has increased by 300% since launch.",
  },
  {
    name: "Amanda Rivera",
    role: "VP of Engineering, HealthSync",
    text: "Security and compliance were our top priorities. Strawhats delivered a bulletproof HIPAA-compliant solution that exceeded all our expectations.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">What Our Partners Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/5 relative"
            >
              <div className="flex text-yellow-500 mb-6 gap-1">
                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-lg italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
