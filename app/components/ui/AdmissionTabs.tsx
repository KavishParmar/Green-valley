"use client";
import React, { useState } from "react";

export default function AdmissionTabs({ onApplyClick }: { onApplyClick?: () => void }) {
    // Actually using onApplyClick from parent for the internal buttons
    const [activeTab, setActiveTab] = useState("how-to-apply");

    const tabs = [
        { id: "how-to-apply", label: "How to Apply", icon: "📝" },
        { id: "faq", label: "Admission FAQ", icon: "❓" },
        { id: "terms", label: "Terms & Conditions", icon: "⚖️" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "how-to-apply":
                return (
                    <div className="tab-content animate-fade">
                        <h3 style={titleStyle}>The Admission Journey</h3>
                        <div style={{ display: "grid", gap: "1.5rem" }}>
                            <Step
                                num="01"
                                title="Online/Offline Enquiry"
                                desc="Start by filling out our enquiry form or visiting our Sehore campus. Our counsellors will guide you through the available courses based on your background."
                            />
                            <Step
                                num="02"
                                title="Counseling & Eligibility"
                                desc="Experience a free demo class. If you're seeking a scholarship, you'll need to appear for our GVCI Scholarship Test (GET)."
                            />
                            <Step
                                num="03"
                                title="Registration & Batch Fix"
                                desc="Submit basic documents (Marksheets, ID proof) and secure your seat. You'll receive your welcome kit and schedule immediately."
                            />
                        </div>
                    </div>
                );
            case "faq":
                return (
                    <div className="tab-content animate-fade">
                        <h3 style={titleStyle}>Common Questions</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <FaqItem q="Is there any entrance exam for basic admission?" a="No, basic admission is direct. However, the GET test is required for merit-based scholarships." />
                            <FaqItem q="Can I pay the fees in installments?" a="Please contact our accounts department at the campus for detailed fee structure and payment plans." />
                            <FaqItem q="What is the average batch size?" a="We maintain a strict limit of 40 students per batch to ensure individual attention." />
                            <FaqItem q="Are demo classes available?" a="Yes, we provide 2 days of complimentary demo classes for all prospective students." />
                        </div>
                    </div>
                );
            case "terms":
                return (
                    <div className="tab-content animate-fade">
                        <h3 style={titleStyle}>Institutional Guidelines</h3>
                        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                            <p style={{ marginBottom: "1rem" }}>• <strong>Attendance:</strong> Minimum 85% attendance is mandatory for appearing in internal mock tests.</p>
                            <p style={{ marginBottom: "1rem" }}>• <strong>Discipline:</strong> Students must adhere to the institute's code of conduct. Any form of indiscipline may lead to termination of admission.</p>
                            <p style={{ marginBottom: "1rem" }}>• <strong>Study Material:</strong> All provided material is intellectual property of GVCI and intended for personal use only.</p>
                            <p style={{ marginBottom: "1rem" }}>• <strong>Scholarships:</strong> Scholarship benefits are subject to consistent academic performance throughout the session.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
            {/* Desktop Tab Selectors */}
            <div className="desktop-tabs" style={{
                display: "flex",
                background: "rgba(255,255,255,0.03)",
                borderRadius: "20px",
                padding: "0.5rem",
                marginBottom: "3rem",
                border: "1px solid rgba(255,255,255,0.08)"
            }}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: 1,
                            padding: "1rem",
                            borderRadius: "15px",
                            border: "none",
                            background: activeTab === tab.id ? "var(--gold)" : "transparent",
                            color: activeTab === tab.id ? "var(--dark)" : "rgba(255,255,255,0.6)",
                            fontWeight: 700,
                            fontSize: "0.95rem",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.6rem",
                            transition: "all 0.3s ease"
                        }}
                    >
                        <span style={{ fontSize: "1.2rem" }}>{tab.icon}</span>
                        <span>{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Mobile Dropdown Selector */}
            <div className="mobile-dropdown" style={{ display: "none", marginBottom: "2rem" }}>
                <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "1.25rem",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--gold)",
                        color: "#fff",
                        fontSize: "1rem",
                        fontWeight: 700,
                        appearance: "none",
                        backgroundImage: "url(\"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.2em"
                    }}
                >
                    {tabs.map(tab => (
                        <option key={tab.id} value={tab.id} style={{ background: "var(--dark)" }}>
                            {tab.icon} {tab.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Content Area */}
            <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "32px",
                padding: "3rem",
                minHeight: "400px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}>
                {renderContent()}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                @media (max-width: 768px) {
                    .desktop-tabs { display: none !important; }
                    .mobile-dropdown { display: block !important; }
                    .tab-content { padding: 0.5rem; }
                }
            `}</style>
        </div>
    );
}

const Step = ({ num, title, desc }: { num: string; title: string; desc: string }) => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
        <div style={{
            fontSize: "1.25rem",
            fontWeight: 900,
            color: "var(--gold)",
            background: "rgba(212,160,23,0.1)",
            padding: "0.5rem 0.8rem",
            borderRadius: "12px",
            minWidth: "60px",
            textAlign: "center"
        }}>{num}</div>
        <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.4rem" }}>{title}</h4>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.6 }}>{desc}</p>
        </div>
    </div>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => (
    <div style={{ padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "16px" }}>
        <div style={{ fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>{q}</div>
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>{a}</div>
    </div>
);

const titleStyle: React.CSSProperties = {
    fontSize: "1.75rem",
    fontWeight: 800,
    color: "#fff",
    marginBottom: "2rem",
    letterSpacing: "-0.02em"
};
