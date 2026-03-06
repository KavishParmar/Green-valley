"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: string;
  color: string;
}

const defaultSteps: Step[] = [
  { step: "01", title: "Choose Your Course", desc: "Select from PAT, PVT, BHU, or CUET based on your goal and eligibility. Counseling available.", icon: "01", color: "#22a15a" },
  { step: "02", title: "Eligibility Check", desc: "Verify you have completed Class 12 (PCB/PCM). Submit your marksheet for review.", icon: "OK", color: "#3b82f6" },
  { step: "03", title: "Fill Application", desc: "Complete the online/offline admission form with personal and academic details.", icon: "FM", color: "#d4a017" },
  { step: "04", title: "Document Verification", desc: "Submit Class 10 & 12 marksheets, Aadhar card, passport photo, and migration certificate.", icon: "DV", color: "#8b5cf6" },
  { step: "05", title: "Counseling & Batch Allocation", desc: "Our team will guide you on the best course option and assign your batch.", icon: "CA", color: "#10b981" },
];

interface AdmissionTabsProps {
  steps?: Step[];
  onApplyClick?: () => void;
  wrapTabs?: boolean;
}

export default function AdmissionTabs({ steps = defaultSteps, wrapTabs = false }: AdmissionTabsProps) {
  const [activeTab, setActiveTab] = useState("how-to-apply");

  const tabs = [
    { id: "how-to-apply", label: "How to Apply", icon: "📝" },
    { id: "faq", label: "FAQ", icon: "❓" },
    { id: "scholarship", label: "Scholarship", icon: "🎓" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "how-to-apply":
        return (
          <div className="tab-content animate-fade">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h3 style={titleStyle}>5 Simple Steps to <span className="green-text">Get Admitted</span></h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative", marginBottom: "4rem" }}>
              <div style={{ position: "absolute", left: "2rem", top: "2rem", bottom: "2rem", width: "2px", background: "linear-gradient(180deg, var(--green-500), var(--gold))", borderRadius: "2px" }} />
              {steps.map((s) => (
                <div key={s.step} className="step-item" style={{ display: "flex", gap: "2rem", paddingLeft: "1rem" }}>
                  <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 800, flexShrink: 0, boxShadow: `0 0 20px ${s.color}55`, zIndex: 1 }}>
                    {s.icon}
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem", flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <span style={{ color: s.color, fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.1em" }}>STEP {s.step}</span>
                    </div>
                    <h4 style={{ fontWeight: 700, fontSize: "1.15rem", color: "#fff", marginBottom: "0.5rem" }}>{s.title}</h4>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "scholarship":
        return (
          <div className="tab-content animate-fade">
            <h3 style={titleStyle}>Scholarship Opportunities</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              We reward merit and support deserving students with financial aid to make quality coaching more accessible.
            </p>

            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem", marginBottom: "2.5rem" }}>
              <h4 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "1.25rem" }}>Scholarship Basis:</h4>
              <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                {[
                  "NEET / ICAR Entrance Marks",
                  "Class 12th Board Percentage",
                  "GVCI Entrance Test (GET) Score",
                  "Special Category (EWS/Orphan/Single Parent)",
                  "Sibling Discount for existing students",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", color: "rgba(255,255,255,0.75)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--gold)" }}>*</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ textAlign: "center" }}>
              <Link href="/scholarship" className="btn-gold" style={{ display: "inline-block" }}>
                View Full Scholarship Details -&gt;
              </Link>
            </div>
          </div>
        );
      case "faq":
        return (
          <div className="tab-content animate-fade">
            <h3 style={titleStyle}>Frequently Asked Questions</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <FaqItem
                q="What is the minimum eligibility for PAT/PVT batches?"
                a="Students must have completed Class 11/12 with Physics, Chemistry, and Biology (PCB) or Mathematics (PCM) from a recognized board."
              />
              <FaqItem
                q="Can I join after a batch has already started?"
                a="Yes, joining is allowed. We provide cover-up guidance for students who join late."
              />
              <FaqItem
                q="Is hostel support available?"
                a="Yes. We help students find reliable nearby hostel/PG options around Sehore campus."
              />
              <FaqItem
                q="Are weekend-only batches available?"
                a="Currently we run regular full-time batches for better consistency and performance tracking."
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "1100px", margin: "4rem auto" }}>
      <div
        className="tab-header"
        style={{
          display: "flex",
          background: "rgba(255,255,255,0.03)",
          borderRadius: "24px",
          padding: "0.6rem",
          marginBottom: "3rem",
          border: "1px solid rgba(255,255,255,0.08)",
          flexWrap: wrapTabs ? "wrap" : "nowrap",
          gap: "0.5rem",
          overflowX: wrapTabs ? "visible" : "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: "1 1 0",
              minWidth: "140px",
              padding: "0.9rem 0.75rem",
              borderRadius: "18px",
              border: "none",
              background: activeTab === tab.id ? "var(--gold)" : "transparent",
              color: activeTab === tab.id ? "var(--dark)" : "rgba(255,255,255,0.65)",
              fontWeight: 800,
              fontSize: "0.9rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.55rem",
              transition: "all 0.3s ease",
              boxShadow: activeTab === tab.id ? "0 10px 20px rgba(212,160,23,0.2)" : "none",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "32px",
          padding: "4rem 3rem",
          minHeight: "500px",
          boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
        }}
      >
        {renderContent()}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fadeIn 0.5s ease-out forwards; }
        .green-text { color: var(--green-400); }
        @media (max-width: 768px) {
          .tab-header { padding: 0.4rem; gap: 0.35rem; }
          .tab-header button { min-width: 120px; padding: 0.7rem 0.6rem; font-size: 0.78rem; }
          div[style*="padding: 4rem 3rem"] { padding: 2.5rem 1.35rem !important; }
        }
      `}</style>
    </div>
  );
}

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px", cursor: "pointer" }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: 800, color: "var(--gold)", fontSize: "1.05rem" }}>{q}</div>
        <span style={{ color: "var(--gold)", fontSize: "1.4rem", fontWeight: 700, flexShrink: 0, marginLeft: "1rem", transition: "transform 0.3s ease", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
      </div>
      {open && <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginTop: "0.85rem", lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
};

const titleStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: 900,
  color: "#fff",
  marginBottom: "2.5rem",
  letterSpacing: "-0.03em",
};
