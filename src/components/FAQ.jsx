import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Radio } from "lucide-react";

/* ================= FAQ DATA ================= */

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
    a: `Teams must submit:
- Problem Statement
- Proposed Solution
- Impact
- Technologies
- Project Details
- Future Scope

A GitHub or Drive link is mandatory.`
  },
  {
    q: "What are the judging criteria?",
    a: "Creativity, technical implementation, practicality, and presentation."
  },
  {
    q: "Can teams be disqualified?",
    a: "Yes, for rule violations, inappropriate behavior, or submitting pre-built projects."
  },
  {
    q: "What should I bring?",
    a: "Laptop, charger, ID, essentials, and comfortable clothing."
  },
  {
    q: "Will there be mentors?",
    a: "Yes, experienced mentors will be available throughout the hackathon."
  },
  {
    q: "Is there on-spot registration?",
    a: "No. Registration must be completed beforehand."
  },
  {
    q: "Is this online?",
    a: "No, HackX is an on-site hackathon."
  }
];

/* ================= FAQ ITEM ================= */

const FAQItem = ({ item, index, accentColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between p-8 rounded-[32px] border text-left transition-all
        ${
          open
            ? "bg-zinc-900 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            : "bg-zinc-900/50 border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900"
        }`}
      >
        <div className="flex items-center gap-6">
          <span
            style={{ color: accentColor }}
            className="font-black italic text-xl"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-bold text-sm uppercase tracking-widest text-white">
            {item.q}
          </span>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 text-blue-500 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-10 bg-zinc-900/30 border-x border-b border-zinc-800 rounded-b-[32px]">
              <div className="flex gap-4 text-sm text-zinc-400 leading-relaxed">
                <div
                  className="w-1 rounded-full opacity-50"
                  style={{ backgroundColor: accentColor }}
                />
                <p className="whitespace-pre-line">{item.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ================= MAIN FAQ ================= */

const FAQ = () => {
  const accentColor = "#3b82f6"; // Blue (change to #f97316 for orange)

  return (
    <section id="faqs" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Radio className="animate-pulse text-blue-500" size={20} />
            <h4 className="font-black uppercase tracking-[0.3em] text-xs text-blue-500">
              Pit Radio // FAQ
            </h4>
          </div>

          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white">
            The <span style={{ color: accentColor }}>Briefing</span>
          </h2>
        </div>

        {/* FAQ LIST */}
        {faqs.map((faq, i) => (
          <FAQItem key={i} item={faq} index={i} accentColor={accentColor} />
        ))}

        {/* CTA */}
        <div className="mt-20 p-12 rounded-[50px] bg-zinc-900 border border-zinc-800 text-center relative overflow-hidden group">
          <div
            className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500"
            style={{ backgroundColor: accentColor }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-black italic mb-6 text-white uppercase">
              Still in the Pits?
            </h3>
            <button className="px-12 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform shadow-xl">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
