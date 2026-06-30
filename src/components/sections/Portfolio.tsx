'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const clients = [
  { name: "Icube office solutions", url: "http://www.icubeofficesolutions.com/", logo: "https://www.strawhats.in/images/clients/icube.png", bg: "bg-blue-900/20" },
  { name: "Graphicjam Media Agency", url: "http://www.graphicjam.in/Download/CompanyProfile", logo: "https://www.strawhats.in/images/clients/graphicjam.png", bg: "bg-purple-900/20" },
  { name: "Jobcenter", url: "https://jobcenter.co.in/", logo: "https://www.strawhats.in/images/clients/jobcenter.png", bg: "bg-green-900/20" },
  { name: "Ycaviation", url: "https://ycaviation.in/", logo: "https://www.strawhats.in/images/clients/ycaviation.png", bg: "bg-orange-900/20" },
  { name: "A N Bhimnath", url: "http://anbhimnath.in/", logo: "https://www.strawhats.in/images/clients/anbhimnath.png", bg: "bg-blue-900/20" },
  { name: "Shri Consultant", url: "https://shriconsultant.in/", logo: "https://www.strawhats.in/images/clients/shriconsultant.png", bg: "bg-purple-900/20" },
  { name: "Praj", url: "https://praj.net/", logo: "https://www.strawhats.in/images/clients/praj.png", bg: "bg-green-900/20" }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Our Clients</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Trusted By</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${client.bg} border border-white/5 h-[300px] flex flex-col justify-between p-8`}
            >
              <div className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 to-transparent z-10" />
              
              <div className="absolute inset-0 z-0 flex items-center justify-center p-12">
                <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative z-20 flex justify-between items-start">
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                  Client
                </span>
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={24} />
                </a>
              </div>

              <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-2">{client.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
