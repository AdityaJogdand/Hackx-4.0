import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Radio } from 'lucide-react';

const faqs = [
  {
    q: "When and where will HackX be held?",
    a: "HackX 4.0 will be held on February 28 – March 1, 2026 at NMIMS University, Navi Mumbai."
  },
  {
    q: "How do I get to the venue?",
    a: "The venue is located near Pethpada Metro Station in Kharghar, Navi Mumbai. Detailed directions can be found on maps."
  },
  {
    q: "Who can participate in HackX?",
    a: "HackX is open to all college students passionate about technology, innovation, and social responsibility. Teams can consist of participants from different schools or institutes."
  },
  {
    q: "How many members can be in a team?",
    a: "Each team must have 2–4 members (Solo participants are not allowed)."
  },
  {
    q: "Is there a registration fee?",
    a: "Yes, there is a refundable registration fee of ₹500 per team."
  },
  {
    q: "What is the refund timeline?",
    a: "The registration fee refund will be processed within 14 working days after the completion of the hackathon."
  },
  {
    q: "How do I register for HackX?",
    a: "Registration is done through Unstop. Visit the official event page on Unstop and complete the registration by paying the fee."
  },
  {
    q: "What is the submission format?",
    a: `Teams must submit their projects with the following details:
    - Problem Statement
    - Proposed Solution
    - Impact of Solution
    - Applied Technologies
    - Project Details
    - Future Scope and Feasibility

    A link to the GitHub repository or a Drive link containing the submission must also be included.`
},
  {
    q: "What are the judging criteria?",
    a: `Teams will be judged based on:
        - Creativity
        - Technical Implementation
        - Practicality
        - Presentation`
  },
  {
    q: "Can teams be disqualified?",
    a: `Yes, teams can be disqualified for:
        - Inappropriate behavior
        - Violating rules
        - Submitting pre-built projects
        - Failing to adhere to the code of conduct`
  },
  {
    q: "What should I bring to the hackathon?",
    a: "Participants should bring their laptops, chargers, headphones, identification documents, and any essential tools or materials they may need. It is recommended to wear comfortable clothing and carry personal care items."
  },
  {
    q: "Can I work on an idea I already have?",
    a: "No, participants must work on the provided problem statements during HackX. All solutions must comply with the event's guidelines."
  },
  {
    q: "Will there be mentors available?",
    a: "Yes, experienced mentors will be on-site to guide and assist you throughout the event."
  },
  {
    q: "What resources will be provided?",
    a: "We will provide a workspace, Wi-Fi, power outlets, mentorship, meals, and refreshments."
  },
  {
    q: "Is there any on-the-spot registration?",
    a: "No, on-the-spot registration will not be available. Ensure to complete your registration before the deadline through Unstop."
  },
  {
    q: "Is there a participation certificate?",
    a: "Yes, all participants will receive a certificate of participation."
  },
  {
    q: "What are the prizes?",
    a: "Exciting cash prizes, goodies, internships, and sponsor rewards await winners."
  },
  {
    q: "Can I participate online?",
    a: "No, HackX is an on-site hackathon."
  },
  {
    q: "What happens if I face technical difficulties?",
    a: "The organizing team and mentors will assist you during the event."
  },
  {
    q: "Who should I contact for queries?",
    a: "For any questions, reach out to the Points of Contact (POCs) listed on the website or the brochure."
  }
];


const FAQItem = ({ item, i, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-8 border transition-all rounded-[32px] text-left group
          ${isOpen ? 'bg-zinc-900 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]' : 'bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900'}`}
      >
        <div className="flex items-center space-x-6">
          <motion.span 
            style={{ color: accentColor }}
            className="font-black italic text-xl"
          >
            0{i+1}
          </motion.span>
          <span className="font-bold text-sm uppercase tracking-widest text-white">{item.q}</span>
        </div>
        <motion.div style={{ color: accentColor }}>
          <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-10 text-sm text-zinc-400 leading-relaxed border-x border-b border-zinc-800 rounded-b-[32px] bg-zinc-900/30">
              <div className="flex gap-4">
                <motion.div style={{ backgroundColor: accentColor }} className="w-1 h-auto opacity-50 rounded-full" />
                <p>{item.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const { scrollYProgress } = useScroll();

  // Transitions: 
  // Background: White -> Black
  // Accents: Orange (#f97316) -> Blue (#3b82f6)
  const backgroundColor = useTransform(scrollYProgress, [0.7, 0.8], ["#ffffff", "#000000"]);
  const accentColor = useTransform(scrollYProgress, [0.7, 0.8], ["#f97316", "#3b82f6"]);
  const textColor = useTransform(scrollYProgress, [0.7, 0.8], ["#000000", "#ffffff"]);

  return (
    <motion.section 
      id="faqs" 
      style={{ backgroundColor }}
      className="py-32 px-6 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center space-x-3 mb-4"
          >
            <motion.div style={{ color: accentColor }}>
                <Radio className="animate-pulse" size={20} />
            </motion.div>
            <motion.h4 style={{ color: accentColor }} className="font-black uppercase tracking-[0.3em] text-xs">
              Pit Radio // FAQ
            </motion.h4>
          </motion.div>
          
          <motion.h2 
            style={{ color: textColor }}
            className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase"
          >
            The <motion.span style={{ color: accentColor }}>Briefing</motion.span>
          </motion.h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} i={i} accentColor={accentColor} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
            className="mt-20 p-12 rounded-[50px] bg-zinc-900 text-center relative overflow-hidden group border border-zinc-800"
        >
           <motion.div 
             style={{ backgroundColor: accentColor }}
             className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" 
           />
           
           <div className="relative z-10">
             <h3 className="text-3xl font-black italic mb-6 text-white uppercase tracking-tighter">
               Still in the Pits?
             </h3>
             <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-xl">
               Get In Touch
             </button>
           </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;