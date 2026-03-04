"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

const scholarships = [
    {
        name: "Merit Scholarship",
        color: "#d4a017",
        icon: "🏆",
        waiver: "High Scholarship Support",
        desc: "Awarded to students based on their Class 12 board examination score.",
        criteria: [
            "Class 12 percentage ≥ 85% → Top tier support",
            "Class 12 percentage 75–84% → Mid tier support",
            "Class 12 percentage 65–74% → Basic support",
        ],
        process: "Submit marksheet. Automatically evaluated on admission.",
    },
    {
        name: "GVCI Aptitude Test Scholarship",
        color: "#22a15a",
        icon: "📝",
        waiver: "Performance Based Support",
        desc: "An in-house scholarship test conducted every March and September.",
        criteria: [
            "Score ≥ 90% in aptitude test → Maximum support",
            "Score 75–89% → Significant support",
            "Score 60–74% → Standard support",
        ],
        process: "Register for scholarship test. Held online + offline.",
    },
    {
        name: "EWS (Economically Weaker Section)",
        color: "#8b5cf6",
        icon: "🤝",
        waiver: "Financial Assistance",
        desc: "Supporting meritorious students from economically challenged backgrounds.",
        criteria: [
            "Annual household income based evaluation",
            "Minimum 60% in Class 12",
            "Must provide income & domicile certificate",
        ],
        process: "Submit income certificate + self-declaration form at admission.",
    },
];

const faqs = [
    { q: "Can I apply for multiple scholarships?", a: "Yes, but only the highest applicable award will be granted." },
    { q: "Is the scholarship test available online?", a: "Yes, the GVCI Aptitude Test can be taken online. Register on our enquiry form." },
    { q: "When is the next scholarship test?", a: "Scholarship tests are held every March and September. Contact us for the next date." },
    { q: "Are scholarships renewal-based?", a: "Yes, merit-based scholarships are reviewed annually based on internal test performance." },
    { q: "Does the scholarship cover all costs?", a: "The scholarship applies primarily to tuition support. Enquire for a complete breakdown." },
];

export default function ScholarshipPage() {
    return (
        <main>
            <Navbar />
            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Financial Support</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    Scholarships That <span className="gold-text">Empower You</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "560px", margin: "0 auto 2.5rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Talent should never be limited by circumstances. Hundreds of scholarships awarded to deserving students since 2015. You could be next.
                </p>
                <Link href="/admission#form" className="btn-gold" style={{ fontSize: "1.05rem" }}>Apply for Scholarship →</Link>
            </section>

            {/* Stats */}
            <section style={{ padding: "4rem 1.5rem", background: "rgba(15,61,36,0.2)" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
                    {[
                        { v: "500+", l: "Scholarships Awarded" },
                        { v: "300+", l: "Students Supported" },
                        { v: "Top Tier", l: "Scholarship Support" },
                        { v: "3 Types", l: "of Scholarships" },
                    ].map((s) => (
                        <div key={s.l}>
                            <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)" }}>{s.v}</div>
                            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginTop: "0.4rem" }}>{s.l}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scholarship Cards */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <span className="section-label">Available Scholarships</span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800 }}>
                        Find Your <span className="green-text">Scholarship Type</span>
                    </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                    {scholarships.map((s) => (
                        <div key={s.name} className="card" style={{ borderColor: `${s.color}30` }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{s.icon}</div>
                            <h3 style={{ fontWeight: 800, color: s.color, fontSize: "1.1rem", marginBottom: "0.4rem" }}>{s.name}</h3>
                            <div style={{ background: `${s.color}20`, color: s.color, padding: "0.3rem 0.75rem", borderRadius: "50px", fontSize: "0.8rem", fontWeight: 700, display: "inline-block", marginBottom: "1rem" }}>{s.waiver}</div>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>{s.desc}</p>
                            <div>
                                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Eligibility Criteria</div>
                                <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
                                    {s.criteria.map((c) => (
                                        <li key={c} style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>
                                            <span style={{ color: s.color }}>→</span> {c}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ padding: "0.75rem 1rem", background: "rgba(255,255,255,0.04)", borderRadius: "10px", color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
                                    <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>How to Apply: </span>{s.process}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scholarship Eligibility Checker */}
            <section style={{ padding: "6rem 1.5rem", background: "rgba(212,160,23,0.05)", borderRadius: "32px", margin: "2rem auto", maxWidth: "800px", border: "1px solid rgba(212,160,23,0.1)" }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <span className="section-label" style={{ background: "rgba(212,160,23,0.2)", color: "var(--gold)" }}>Interactive Tool</span>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>Check Your <span className="gold-text">Eligibility</span></h2>
                    <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem" }}>Select your score range to see potential scholarship supports.</p>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "2.5rem", borderRadius: "24px", backdropFilter: "blur(10px)" }}>
                    <div style={{ marginBottom: "2rem" }}>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.7)", marginBottom: "1rem", fontWeight: 600 }}>Your Predicted Class 12th Marks:</label>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "1rem" }}>
                            {["95%+", "90-95%", "85-90%", "80-85%"].map((range) => (
                                <button
                                    key={range}
                                    onClick={() => alert(`Wait for our team to contact you! With ${range}, you are eligible for our Top Tier Scholarship Support.`)}
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "#fff",
                                        padding: "1rem",
                                        borderRadius: "12px",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        fontWeight: 700
                                    }}
                                    onMouseOver={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; (e.target as HTMLElement).style.color = "#000"; }}
                                    onMouseOut={(e) => { (e.target as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.target as HTMLElement).style.color = "#fff"; }}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Link href="/enquiry-form" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>Book Your Scholarship Test Now →</Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "5rem 1.5rem 7rem", background: "rgba(5,15,9,0.6)" }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-label">Support</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800 }}>Scholarship <span className="gold-text">FAQs</span></h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {faqs.map((f) => (
                            <details key={f.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "1.25rem 1.5rem", cursor: "pointer" }}>
                                <summary style={{ fontWeight: 700, color: "#fff", fontSize: "0.95rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                                    {f.q}
                                    <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>+</span>
                                </summary>
                                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginTop: "0.85rem", lineHeight: 1.7 }}>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
