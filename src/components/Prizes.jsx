import React from 'react';
import { motion } from 'framer-motion';

const Rank = () => {
  const ranks = [
    {
      id: "02",
      pos: "Second",
      amount: "25,000",
      color: "#f1f5f9", // Light Slate
      hoverBg: "#0f172a", // Slate 900
      accent: "text-slate-400"
    },
    {
      id: "01",
      pos: "First",
      amount: "35,000",
      color: "#ffffff", // Pure White
      hoverBg: "#f97316", // Orange 500
      accent: "text-orange-500"
    },
    {
      id: "03",
      pos: "Third",
      amount: "15,000",
      color: "#fafaf9", // Warm Stone
      hoverBg: "#44403c", // Stone 800
      accent: "text-amber-700"
    }
  ];

  return (
    <section id="prizes" className="relative w-full min-h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      {ranks.map((rank, index) => (
        <motion.div
          key={rank.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          // --- HOVER EFFECT START ---
          whileHover={{ 
            backgroundColor: rank.hoverBg,
            transition: { duration: 0.4, ease: "circOut" } 
          }}
          // --- HOVER EFFECT END ---
          transition={{ 
            duration: 0.6, 
            ease: "easeOut", 
            delay: index * 0.15 
          }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ backgroundColor: rank.color }}
          className="relative flex-1 flex flex-col justify-between p-8 md:p-16 border-r border-black/5 last:border-r-0 min-h-[33vh] md:min-h-screen group hover:flex-[1.5] transition-all duration-700 ease-in-out cursor-default"
        >
          {/* Top Section: Rank Number */}
          <div className="flex justify-between items-start">
            {/* The span uses group-hover to change text color when the parent is hovered */}
            <span className={`text-6xl md:text-8xl font-black italic opacity-10 transition-colors duration-500 ${rank.accent} group-hover:text-white group-hover:opacity-20`}>
              {rank.id}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-12 h-1 bg-white rounded-full`} />
            </div>
          </div>

          {/* Middle Section: Position Name */}
          <div className="relative z-10">
            <h3 className="text-sm uppercase tracking-[0.5em] font-bold text-black/40 mb-2 transition-colors duration-500 group-hover:text-white/60">
              Position
            </h3>
            <h4 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black transition-colors duration-500 group-hover:text-white">
              {rank.pos}
            </h4>
          </div>

          {/* Bottom Section: Prize Amount */}
          <div className="flex flex-col items-start">
            <p className="text-sm uppercase tracking-widest font-bold text-black/40 mb-1 transition-colors duration-500 group-hover:text-white/60">
              Cash Prize
            </p>
            <div className="flex items-baseline gap-2">
              <span className={`text-5xl md:text-7xl font-black transition-colors duration-500 ${rank.id === '01' ? 'text-orange-500 group-hover:text-white' : 'text-black group-hover:text-white'}`}>
                ₹{rank.amount}
              </span>
            </div>
            
            {/* Call to Action Line */}
            <div className="w-full h-1 bg-orange-500 mt-4 origin-left transition-all duration-500 group-hover:bg-white" />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Rank;