'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, PhoneCall, MapPin, Mail } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    alert('Thank you for your inquiry! We will get back to you shortly.');
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing</h3>
            <p className="text-gray-400 text-lg mb-12">
              Ready to start your next project? Reach out to our team of experts and let's discuss how we can help you achieve your digital goals.
            </p>

            <div className="space-y-6 mb-12">
              <a href="tel:+919595749597" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group border border-white/5">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <PhoneCall size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Call Us Directly</div>
                  <div className="text-gray-400">+91 9595749597, +91 9567663914, +91 7730939337</div>
                </div>
              </a>

              <a href="mailto:contact@strawhats.in" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group border border-white/5">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Email Us</div>
                  <div className="text-gray-400">contact@strawhats.in</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Visit Our Office</div>
                  <div className="text-gray-400">Solapur, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/5"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Interested Service</label>
                <select
                  {...register("service", { required: "Please select a service" })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="web">Website Development</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="desktop">Desktop Software</option>
                  <option value="design">UI/UX Design</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && <span className="text-red-500 text-sm mt-1">{errors.service.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
