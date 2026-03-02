import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const problems = [
  {
    id: 1,
    org: "Curvet AI",
    title: "The Vibe-Audit",
    subtitle: "Production-Ready Gatekeeper",
    tag: "AI / Security",
    accent: "#dc2626",
    summary:
      "Build an automated gatekeeper that scans AI-generated (vibe-coded) repos and produces a structured Go/No-Go production readiness report covering secrets, compliance, and dependencies.",
    full: `THE VIBE-AUDIT

CHALLENGE
Build an automated "Production-Ready" gatekeeper for applications developed through Vibe Coding (natural language generation).

THE PROBLEM
AI-generated applications may appear well-designed but often overlook critical aspects such as security, PII compliance, and cost efficiency.

THE GOAL
Develop a tool that scans a "vibe-coded" repository and generates a structured Go/No-Go production readiness report covering:
• Hardcoded secrets and prompt injection risks
• Compliance gaps (GDPR / SOC2)
• Hallucinated or insecure dependencies

OUTCOME
A comprehensive "Vibe-to-Value" score along with actionable auto-remediation prompts.`,
  },
  {
    id: 2,
    org: "Curvet AI",
    title: "The SME-Plug",
    subtitle: "Hot-Swappable Expert Plugin",
    tag: "AI / Agents",
    accent: "#71717a",
    summary:
      "Design a universal skill plugin that injects specialized domain knowledge and structured reasoning into any AI agent framework, enforcing source-of-truth citations and domain-specific decision trees.",
    full: `THE SME-PLUG

CHALLENGE
Develop a "hot-swappable" Subject Matter Expert (SME) plugin for AI agents.

THE PROBLEM
General-purpose AI agents often lack deep domain expertise and may hallucinate when handling highly technical or niche tasks.

THE GOAL
Design a universal skill plugin that injects specialized knowledge and structured reasoning logic into any AI agent.

THE DELIVERABLE
A modular plugin that:
• Enforces "Source of Truth" citations
• Injects domain-specific decision trees (e.g., "Think like a Structural Engineer")
• Works across multiple agent frameworks (LangChain, AutoGPT, etc.)

OUTCOME
A scalable, plug-and-play expert module adaptable to complex industry use cases.`,
  },
  {
    id: 3,
    org: "Prasad Food Divine",
    title: "Banquet Management",
    subtitle: "End-to-End Event Platform",
    tag: "SaaS / Ops",
    accent: "#e11d48",
    summary:
      "Build a centralized multi-branch banquet management platform covering lead tracking, real-time booking, event coordination, vendor management, billing automation, and analytics dashboards.",
    full: `BANQUET MANAGEMENT SYSTEM

BACKGROUND
Banquet halls operating across multiple branches often depend on manual registers, spreadsheets, and disconnected tools to manage leads, bookings, billing, and event execution. This fragmented system leads to operational inefficiencies, revenue leakage, missed follow-ups, booking conflicts, and limited visibility for owners.

PROBLEM DEFINITION
Multi-branch banquet businesses face:
• Inconsistent lead tracking and missed follow-ups
• Double bookings due to lack of real-time availability tracking
• Manual coordination between sales, kitchen, operations, and vendors
• Inaccurate or delayed billing and payment tracking
• No centralized branch-wise reporting or performance visibility
• Lack of menu planning

OBJECTIVE
Develop a comprehensive banquet management software that is simple and user-friendly for non-technical managers.

MANDATORY FEATURES (MVP)
Multi-Branch Management
• Centralized owner dashboard
• Branch-level access control
• Branch-wise performance tracking

Lead Management
• Lead capture and manual entry
• Complete lifecycle: Call → Property Visit → Food Tasting → Advance Payment → Menu Finalization → Decoration & Event Finalization → Full Payment → Post-Event Settlement → Feedback
• Lead status pipeline (New → Converted / Lost)
• Follow-up reminders and assignment

Booking & Calendar Management
• Real-time availability calendar
• Conflict prevention mechanism
• Advance and balance payment tracking

Event Management
• Guest count, menu, and add-on selection
• Vendor allocation (internal/third-party)
• Event checklist and execution tracking

Billing & Payments
• Invoice generation
• Automated tax calculation
• Online and cash payment tracking
• Outstanding reminders

Reports & Analytics
• Revenue reports (overall & branch-wise)
• Conversion rate tracking
• Occupancy and outstanding summaries

Raw Material Management
• Real-time tracking with low-stock alerts
• Auto stock deduction based on menu and guest count
• Purchase order management with supplier tracking

BONUS FEATURES
• AI-based lead scoring
• WhatsApp automation for follow-ups
• Dynamic pricing engine
• Customer self-service portal
• Staff mobile application`,
  },
  {
    id: 4,
    org: "Prasad Food Divine",
    title: "Review Management",
    subtitle: "Centralized Feedback Intelligence",
    tag: "Analytics / CX",
    accent: "#ea580c",
    summary:
      "Develop a centralized platform that aggregates reviews from Google, Zomato, and internal forms, auto-categorizes feedback, generates AI-assisted responses, and provides branch/staff performance insights.",
    full: `REVIEW MANAGEMENT SYSTEM

BACKGROUND
Organizations receive customer reviews from multiple sources including internal feedback forms, staff interactions, and third-party platforms such as Google and Zomato. These reviews are scattered across different systems with no centralized visibility.

PROBLEM DEFINITION
Multi-branch businesses face:
• No centralized platform to view all reviews in one place
• Reviews distributed across internal systems and third-party platforms
• Lack of structured review collection from customers
• Difficulty in categorizing reviews (food, service, staff, ambience, etc.)
• Delayed or inconsistent responses to feedback
• No branch-wise or staff-wise performance insights

OBJECTIVE
Develop a centralized Review Management System that aggregates reviews, enables structured collection through a mobile app, categorizes automatically, and provides automated reply options.

MANDATORY FEATURES (MVP)
Centralized Review Dashboard
• Unified view of all reviews (internal + external platforms)
• Branch-level filtering and access control
• Real-time review updates

Review Collection Mobile App
• Simple mobile app for post-event feedback
• QR code / link-based review submission
• Rating + category-based feedback form
• Staff tagging option
• Direct sync to central dashboard

Review Categorization
• Auto-categorization (Food, Service, Staff Behavior, Cleanliness, etc.)
• Manual override option
• Tag-based classification

Response Management
• Predefined automated reply templates
• AI-assisted response suggestions
• Response tracking and history

Analytics & Reporting
• Sentiment analysis (Positive / Neutral / Negative)
• Branch-wise rating comparison
• Staff performance insights
• Monthly trend reports

BONUS FEATURES
• AI-based deep sentiment insights
• Escalation workflow for negative reviews
• WhatsApp/SMS alerts for critical feedback
• Competitor review benchmarking
• Customer satisfaction score (CSAT) tracking`,
  },
  {
    id: 5,
    org: "Cosmeon",
    title: "FS-Lite",
    subtitle: "Orbital File System Simulation",
    tag: "Distributed",
    accent: "#0284c7",
    summary:
      "Build a lightweight distributed file system simulation that splits files into chunks, distributes them across simulated satellite nodes, and reconstructs files on demand with integrity checks and failure simulation.",
    full: `COSMEON FS-LITE (ORBITAL FILE SYSTEM SIMULATION)

PROBLEM SUMMARY
COSMEON requires a lightweight, distributed file-system simulation to demonstrate how data may be stored across multiple orbital nodes. The goal is to create a minimal distributed file system (FS-Lite) that splits files into chunks, distributes them across nodes, and reconstructs them on request.

MINIMUM REQUIREMENTS
• Implement file upload functionality where a file is divided into multiple chunks
• Simulate multiple "satellite nodes" (folders, processes, containers, etc.)
• Assign each file chunk to different nodes using a simple distribution strategy
• Maintain metadata describing chunk locations
• Implement file download functionality that fetches all chunks and reconstructs the original file
• Provide a simple mechanism to simulate node failure and demonstrate system behavior
• Include a basic integrity check (checksums or hash validation)

OPTIONAL ENHANCEMENTS
• Automatic rebalancing of chunks when nodes fail or return
• A small dashboard or CLI logs showing chunk distribution and node status
• Caching mechanisms for faster retrieval`,
  },
  {
    id: 6,
    org: "Cosmeon",
    title: "Satellite Insight Engine",
    subtitle: "Climate Risk from Orbital Data",
    tag: "ML / Geo",
    accent: "#059669",
    summary:
      "Build a pipeline that ingests open satellite imagery (Sentinel/Landsat), performs automated flood detection and environmental risk analysis using ML, and outputs structured decision-ready climate risk insights.",
    full: `SATELLITE DATA TO INSIGHT ENGINE FOR CLIMATE RISK

PROBLEM SUMMARY
Earth observation satellites continuously generate massive volumes of imagery and environmental data. However, most of this data remains underutilized because it requires advanced processing to convert raw imagery into actionable intelligence. Governments, insurers, urban planners, and agricultural stakeholders need automated systems that can detect flood events, infrastructure exposure, and environmental risk in near real time.

MINIMUM REQUIREMENTS
• Ingest publicly available satellite imagery such as Sentinel 1, Sentinel 2, or Landsat datasets
• Perform automated detection of flood-affected regions or environmental risk zones using image processing or ML models
• Implement change detection comparing historical and recent satellite data
• Generate structured output such as affected area statistics, district-level summaries, or risk classification labels
• Maintain a state table or structured data store showing timestamps, geographic regions, and detected risk status
• Provide detailed logs demonstrating data ingestion, processing steps, and detection outputs

OPTIONAL ENHANCEMENTS
• Integrate external datasets such as rainfall, elevation, or population density for enhanced risk modeling
• Implement predictive modeling to forecast potential flood risk based on historical trends
• Provide an API endpoint for retrieving processed insights programmatically
• Build an interactive dashboard visualizing affected zones over time
• Implement confidence scoring for detected risk areas`,
  },
];

function PSModal({ ps, onClose }) {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        {/* Modal container */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl flex flex-col"
          style={{ maxHeight: "85vh", height: "85vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent bar */}
          <div
            className="h-1 rounded-t-xl flex-shrink-0"
            style={{ backgroundColor: ps.accent }}
          />

          {/* Header — fixed, does NOT scroll */}
          <div className="px-6 pt-5 pb-4 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-zinc-400 tracking-widest">
                PS-{String(ps.id).padStart(2, "0")}
              </span>
              <span
                className="text-xs border rounded-full px-2.5 py-0.5 font-medium"
                style={{ borderColor: ps.accent, color: ps.accent }}
              >
                {ps.tag}
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tight uppercase">
              {ps.title}
            </h2>
            <p className="text-sm text-zinc-500 mt-0.5">{ps.org}</p>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="border-t border-zinc-100 flex-shrink-0" />

          {/* Scrollable content */}
          <div
            className="overflow-y-auto flex-1 px-6 py-5"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <pre className="font-mono text-sm whitespace-pre-wrap text-zinc-700 leading-relaxed">
              {ps.full.split("\n").map((line, i) => {
                const isSectionHeader =
                  /^[A-Z][A-Z\s\(\)\/&\-]+$/.test(line.trim()) &&
                  line.trim().length > 2 &&
                  !line.trim().startsWith("•");
                return (
                  <span key={i}>
                    {isSectionHeader ? (
                      <strong className="text-zinc-900">{line}</strong>
                    ) : (
                      line
                    )}
                    {"\n"}
                  </span>
                );
              })}
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PSCard({ ps, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      onClick={onClick}
      className="relative bg-white border border-zinc-200 rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300"
    >
      {/* Top accent stripe */}
      <div className="h-1" style={{ backgroundColor: ps.accent }} />

      {/* Left subtle accent */}
      <div
        className="absolute left-0 top-1 bottom-0 w-0.5 opacity-30"
        style={{ backgroundColor: ps.accent }}
      />

      <div className="p-5">
        {/* Row 1: PS number left, tag badge right */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-zinc-400 tracking-widest">
            PS-{String(ps.id).padStart(2, "0")}
          </span>
          <span
            className="text-xs border rounded-full px-2.5 py-0.5 font-medium"
            style={{ borderColor: ps.accent, color: ps.accent }}
          >
            {ps.tag}
          </span>
        </div>

        {/* Org */}
        <p className="text-xs text-zinc-400 mb-1">{ps.org}</p>

        {/* Title */}
        <h3 className="text-lg font-black tracking-tight uppercase text-zinc-900 mb-0.5">
          {ps.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm font-medium text-zinc-500 mb-3">{ps.subtitle}</p>

        {/* Summary */}
        <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
          {ps.summary}
        </p>

        {/* CTA */}
        <div
          className="mt-4 text-xs font-semibold tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
          style={{ color: ps.accent }}
        >
          View Full PS →
        </div>
      </div>
    </motion.div>
  );
}

export default function ProblemStatements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activePS, setActivePS] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-50 py-16 px-4">
      {/* Racing stripes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-zinc-400 to-green-600" />

      {/* Header */}
      <div ref={ref} className="max-w-5xl mx-auto mb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2"
        >
          HackX 4.0 · Official Release
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 uppercase"
        >
          Problem Statements
        </motion.h1>
      </div>

      {/* Responsive card grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {problems.map((ps, i) => (
          <PSCard key={ps.id} ps={ps} index={i} onClick={() => setActivePS(ps)} />
        ))}
      </div>

      {/* Modal */}
      {activePS && (
        <PSModal ps={activePS} onClose={() => setActivePS(null)} />
      )}
    </div>
  );
}