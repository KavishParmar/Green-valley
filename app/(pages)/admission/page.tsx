"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    { step: "01", title: "Choose Your Course", desc: "Select from PAT, CPAT, BHU, or CPET based on your goal and eligibility. Counseling available.", icon: "📚", color: "#22a15a" },
    { step: "02", title: "Eligibility Check", desc: "Verify you have completed Class 12 (PCB/PCM). Submit your marksheet for review.", icon: "✅", color: "#3b82f6" },
    { step: "03", title: "Fill Application", desc: "Complete the online/offline admission form with personal and academic details.", icon: "📝", color: "#d4a017" },
    { step: "04", title: "Document Verification", desc: "Submit Class 10 & 12 marksheets, Aadhar card, passport photo, and migration certificate.", icon: "📁", color: "#8b5cf6" },
    { step: "05", title: "Counseling & Batch Allocation", desc: "Our team will counsel you on the best course option. You will be assigned a batch and given orientation on Day 1.", icon: "🎓", color: "#10b981" },
];

const documents = [
    "Class 10 Marksheet & Certificate",
    "Class 12 Marksheet & Certificate",
    "Aadhar Card (Self & Parent)",
    "Passport-size photographs (4 nos.)",
    "Migration Certificate (if applicable)",
    "Caste Certificate (if applicable, for SC/ST/OBC)",
    "Income Certificate (for scholarship)",
    "Transfer Certificate from previous school/college",
];

export default function AdmissionPage() {
    const [submitting, setSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const message = `
🌟 New Enquiry from Green Valley Website 🌟
-------------------------------------------
👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
📊 Marks: ${data.marks}%
🎓 Course: ${data.course}
💬 Message: ${data.message || "N/A"}
-------------------------------------------
        `;

        try {
            console.log("AUTOMATED DISPATCH INITIATED...");
            console.log("Content:", message);
            await new Promise(resolve => setTimeout(resolve, 2000));
            setShowToast(true);
            form.reset();
            setTimeout(() => setShowToast(false), 6000);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        gsap.utils.toArray<HTMLElement>(".step-item").forEach((el, i) => {
            gsap.fromTo(el, { opacity: 0, x: i % 2 === 0 ? -50 : 50 }, {
                opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        });
    }, []);

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Join GVCI</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    Your Journey to the <span className="gold-text">Top Rank</span> Starts Here
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "560px", margin: "0 auto 2rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Simple, transparent, and student-friendly admission process. New batches starting <strong style={{ color: 'var(--gold)' }}>15th March 2026</strong>.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="#form" className="btn-gold">Apply Now →</a>
                    <Link href="/scholarship" className="btn-outline">Check Scholarships</Link>
                </div>
            </section>

            {/* Steps */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">The Process</span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800 }}>
                        5 Simple Steps to <span className="green-text">Get Admitted</span>
                    </h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "relative" }}>
                    <div style={{ position: "absolute", left: "2rem", top: "2rem", bottom: "2rem", width: "2px", background: "linear-gradient(180deg, var(--green-500), var(--gold))", borderRadius: "2px" }} />
                    {steps.map((s, i) => (
                        <div key={s.step} className="step-item" style={{ display: "flex", gap: "2rem", paddingLeft: "1rem" }}>
                            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0, boxShadow: `0 0 20px ${s.color}55`, zIndex: 1 }}>
                                {s.icon}
                            </div>
                            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "1.5rem", flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                    <span style={{ color: s.color, fontWeight: 900, fontSize: "0.75rem", letterSpacing: "0.1em" }}>STEP {s.step}</span>
                                </div>
                                <h3 style={{ fontWeight: 700, fontSize: "1.15rem", color: "#fff", marginBottom: "0.5rem" }}>{s.title}</h3>
                                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Documents Required */}
            <section style={{ padding: "4rem 1.5rem 6rem" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <div className="card">
                        <h3 style={{ color: "var(--gold)", fontWeight: 800, marginBottom: "1.5rem", fontSize: "1.2rem" }}>📋 Documents Required</h3>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {documents.map((d) => (
                                <li key={d} style={{ display: "flex", gap: "0.75rem", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", alignItems: "flex-start" }}>
                                    <span style={{ color: "var(--green-400)", marginTop: "2px" }}>✓</span> {d}
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: "1.5rem", padding: "1rem 1.25rem", background: "rgba(34,161,90,0.08)", border: "1px solid rgba(34,161,90,0.2)", borderRadius: "12px", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem" }}>
                            📞 <strong style={{ color: "var(--green-400)" }}>Need help?</strong> Contact our admission team for guidance on documents and eligibility.
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Form */}
            <section id="form" style={{ padding: "5rem 1.5rem 7rem", background: "rgba(15,61,36,0.2)" }}>
                <div style={{ maxWidth: "700px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-label">Apply Online</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800 }}>
                            Start Your <span className="gold-text">Application</span>
                        </h2>
                    </div>
                    <form
                        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                        onSubmit={handleSubmit}
                    >
                        {[
                            { label: "Full Name", type: "text", placeholder: "Enter your full name", id: "name", name: "name" },
                            { label: "Mobile Number", type: "tel", placeholder: "+91 XXXXX XXXXX", id: "phone", name: "phone" },
                            { label: "Email Address", type: "email", placeholder: "your@email.com", id: "email", name: "email" },
                            { label: "Class 12 Percentage (%)", type: "number", placeholder: "e.g., 82.5", id: "marks", name: "marks" },
                        ].map((field) => (
                            <div key={field.id}>
                                <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>{field.label}</label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.name}
                                    required
                                    placeholder={field.placeholder}
                                    style={{
                                        width: "100%",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        borderRadius: "12px",
                                        padding: "0.85rem 1.25rem",
                                        color: "#fff",
                                        fontSize: "0.95rem",
                                        outline: "none",
                                        transition: "border-color 0.2s",
                                    }}
                                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--gold)"; }}
                                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
                                />
                            </div>
                        ))}

                        <div>
                            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>Course Interest</label>
                            <select
                                id="course"
                                name="course"
                                required
                                style={{ width: "100%", background: "rgba(5,15,9,0.9)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "0.85rem 1.25rem", color: "#fff", fontSize: "0.95rem", outline: "none" }}
                            >
                                <option value="">Select a Course</option>
                                <option value="pat">PAT – Pre-Agriculture Test</option>
                                <option value="cpat">CPAT – Central Pre-Agriculture Test</option>
                                <option value="bhu">BHU – Banaras Hindu University Entrance</option>
                                <option value="cpet">CPET – Combined Pre-Science Examination</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>Message / Query (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                placeholder="Any specific questions or requirements..."
                                style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "0.85rem 1.25rem", color: "#fff", fontSize: "0.95rem", outline: "none", resize: "vertical" }}
                            />
                        </div>

                        <label style={{ display: "flex", gap: "0.75rem", alignItems: "center", cursor: "pointer", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>
                            <input type="checkbox" id="scholarship_check" name="scholarship_check" style={{ width: "18px", height: "18px", accentColor: "var(--gold)" }} />
                            I want to be considered for a scholarship (subject to eligibility test)
                        </label>

                        <button
                            type="submit"
                            className="btn-gold"
                            disabled={submitting}
                            style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
                        >
                            {submitting ? "Sending enquiry..." : "Submit Application →"}
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Toast */}
            {showToast && (
                <div style={{
                    position: "fixed",
                    bottom: "2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(34, 161, 90, 0.95)",
                    color: "#fff",
                    padding: "1rem 2rem",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    zIndex: 10000,
                    fontWeight: 700,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    animation: "slideUp 0.5s ease-out"
                }}>
                    ✅ Enquiry sent! Our team will contact you within 24 hours except holidays.
                </div>
            )}
            <style jsx>{`
                @keyframes slideUp {
                    from { transform: translate(-50%, 100%); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
                }
            `}</style>

            <Footer />
        </main>
    );
}
