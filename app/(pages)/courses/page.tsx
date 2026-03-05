"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const courseDetails = [
    {
        id: "pat",
        name: "PAT",
        full: "Pre-Agriculture Test (MP PAT)",
        color: "#22a15a",
        emoji: "🌾",
        duration: "1 Year",
        seats: "Max 40 Students",
        examBody: "MP Vyapam",
        target: "B.Sc. Agriculture in MP State Universities",
        batches: ["Morning Batch: 7:00 AM – 2:00 PM", "Evening Batch: 1:00 PM – 7:00 PM"],
        syllabus: ["Ag-1 PCBM (Physics, Chemistry, Maths, Biology)", "Ag- 2 crop production", "Ag- 3 Animal husbandry"],
        highlights: [
            "10+ years of PAT-specific teaching methodology",
            "Weekly topic-wise tests + Monthly mock exams",
            "Complete printed study material (4 volumes)",
            "Daily doubt-clearing sessions",
            "Previous 10-year question papers",
        ],
        facilities: ["AC Classrooms", "Digital Boards", "Library Access", "Hostel Referral", "Online Resources"],
    },
    {
        id: "pvt",
        name: "PVT",
        full: "Pre-Veterinary Test",
        color: "#3b82f6",
        emoji: "🌱",
        duration: "1 Year",
        seats: "Max 35 Students",
        examBody: "ICAR / Central Universities",
        target: "B.Sc. Agriculture in Central & Deemed Universities",
        batches: ["Morning Batch: 7:00 AM – 2:00 PM", "Evening Batch: 1:00 PM – 7:00 PM"],
        syllabus: ["Physics", "Chemistry (Full)", "Biology", "Agriculture", "English & Reasoning"],
        highlights: [
            "Central University–focused strategy sessions",
            "All-India level online test series (Rank prediction)",
            "Video lectures + live interactive sessions",
            "Monthly parent-teacher interaction",
            "Interview & GD preparation",
        ],
        facilities: ["Separate Reading Room", "Smart Boards", "1:1 Mentoring", "Test Series Portal", "Result Dashboard"],
    },
    {
        id: "bhu",
        name: "BHU",
        full: "Banaras Hindu University UET",
        color: "#d4a017",
        emoji: "📚",
        duration: "11 Months",
        seats: "Max 30 Students",
        examBody: "Banaras Hindu University",
        target: "B.Sc. Agriculture / Sciences at BHU Varanasi",
        batches: ["Morning Batch: 7:00 AM – 2:00 PM", "Evening Batch: 1:00 PM – 7:00 PM"],
        syllabus: ["Physics (BHU Syllabus)", "Chemistry (BHU Pattern)", "Biology", "Mathematics", "English Proficiency"],
        highlights: [
            "Faculty include BHU alumni & past rankers",
            "BHU-specific pattern + previous papers",
            "Personal essay & SOP guidance",
            "Mock interview and entrance simulation",
            "Regular counseling sessions",
        ],
        facilities: ["BHU-Specific Resource Library", "Online Mock Platform", "Mentoring by BHU Toppers", "Hostel Guidance", "Scholarship Assistance"],
    },
    {
        id: "cuet",
        name: "CUET",
        full: "Common University Entrance Test",
        color: "#8b5cf6",
        emoji: "🔬",
        duration: "1 Year",
        seats: "Max 35 Students",
        examBody: "National Testing Agency",
        target: "B.Sc. in Central Universities",
        batches: ["Morning Batch: 7:00 AM – 2:00 PM", "Evening Batch: 1:00 PM – 7:00 PM"],
        syllabus: ["Physics (Class 11 & 12 NCERT)", "Chemistry (Full)", "Biology", "Mathematics", "English & Aptitude"],
        highlights: [
            "Strong focus on conceptual clarity",
            "Lab-based practical understanding",
            "Science Olympiad preparation (bonus)",
            "Chapter-wise test series with analytics",
            "NEET/JEE crossover benefits",
        ],
        facilities: ["Practical Lab Access", "Digital Notes", "Science Library", "Performance Analytics", "Doubt Chat Support"],
    },
];

export default function CoursesPage() {
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    useEffect(() => {
        gsap.utils.toArray<HTMLElement>(".course-card").forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, y: 60 }, {
                opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: "power2.out",
                scrollTrigger: { trigger: card, start: "top 85%" }
            });
        });
    }, []);

    return (
        <main>
            <Navbar />
            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Our Programs</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    Expert Coaching for <span className="gold-text">Top Entrance Exams</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "580px", margin: "0 auto 2rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Comprehensive, structured coaching programs designed by experts. Each course is tailored to give you the best chance at your target exam.
                </p>
                <Link href="/enquiry-form" className="btn-gold">Apply for a Course →</Link>
            </section>

            {/* Courses */}
            <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
                    {courseDetails.map((course, idx) => {
                        const isExpanded = expandedCourse === course.id;
                        return (
                            <div key={course.id} className="course-card" style={{ background: `${course.color}0d`, border: `1px solid ${course.color}30`, borderRadius: "24px", overflow: "hidden" }}>
                                {/* Header */}
                                <div style={{ padding: "2.5rem 2.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{course.emoji}</div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                                            <span style={{ fontSize: "2.5rem", fontWeight: 900, color: course.color }}>{course.name}</span>
                                            <span style={{ background: `${course.color}22`, color: course.color, padding: "0.3rem 0.85rem", borderRadius: "50px", fontSize: "0.82rem", fontWeight: 700 }}>{course.duration}</span>
                                            <span style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", padding: "0.3rem 0.85rem", borderRadius: "50px", fontSize: "0.82rem" }}>{course.seats}</span>
                                        </div>
                                        <p style={{ color: "rgba(255,255,255,0.45)", marginTop: "0.3rem" }}>{course.full}</p>
                                    </div>
                                    <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
                                        <div>
                                            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>Exam Body: {course.examBody}</div>
                                            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{course.target}</div>
                                        </div>
                                        <Link href="/enquiry-form" style={{ background: course.color, color: "#fff", padding: "0.6rem 1.5rem", borderRadius: "50px", fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", whiteSpace: "nowrap" }}>
                                            Apply Now →
                                        </Link>
                                    </div>
                                </div>

                                {/* Collapsible Body */}
                                <div className={`course-body ${isExpanded ? "expanded" : ""}`}>
                                    <div style={{ padding: "2rem 2.5rem 2.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
                                        {/* Syllabus */}
                                        <div>
                                            <h4 style={{ color: course.color, fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Syllabus Covered</h4>
                                            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                                {course.syllabus.map((s) => (
                                                    <li key={s} style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                                                        <span style={{ color: course.color }}>📌</span> {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Highlights */}
                                        <div>
                                            <h4 style={{ color: course.color, fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Key Highlights</h4>
                                            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                                {course.highlights.map((h) => (
                                                    <li key={h} style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
                                                        <span style={{ color: course.color }}>✓</span> {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Batches & Facilities */}
                                        <div>
                                            <h4 style={{ color: course.color, fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Batch Timings</h4>
                                            {course.batches.map((b) => (
                                                <div key={b} style={{ background: `${course.color}15`, border: `1px solid ${course.color}25`, borderRadius: "8px", padding: "0.6rem 0.85rem", marginBottom: "0.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
                                                    🕐 {b}
                                                </div>
                                            ))}
                                            <h4 style={{ color: course.color, fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", margin: "1.25rem 0 0.75rem" }}>Facilities</h4>
                                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                                                {course.facilities.map((f) => (
                                                    <span key={f} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.65)", fontSize: "0.78rem", padding: "0.3rem 0.7rem", borderRadius: "50px" }}>{f}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* View More toggle (mobile only) */}
                                <div className="view-more-btn-wrapper">
                                    <button
                                        onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                                        style={{
                                            background: `${course.color}15`,
                                            border: `1px solid ${course.color}30`,
                                            color: course.color,
                                            padding: "0.6rem 1.5rem",
                                            borderRadius: "50px",
                                            fontSize: "0.85rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        {isExpanded ? "View Less ▲" : "View More Details ▼"}
                                    </button>
                                </div>

                                {/* Footer */}
                                <div style={{ borderTop: `1px solid ${course.color}20`, padding: "1.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>New batch starts: April 1, 2025 — Limited seats, early enrollment advised</p>
                                    <Link href="/enquiry-form" style={{ background: course.color, color: "#fff", padding: "0.75rem 2rem", borderRadius: "50px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
                                        Enroll in {course.name} →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile collapse styles */}
                <style>{`
                    .view-more-btn-wrapper {
                        display: none;
                        text-align: center;
                        padding: 1rem 0;
                    }
                    @media (max-width: 768px) {
                        .course-body {
                            max-height: 0;
                            overflow: hidden;
                            transition: max-height 0.4s ease;
                        }
                        .course-body.expanded {
                            max-height: 2000px;
                        }
                        .view-more-btn-wrapper {
                            display: block;
                        }
                    }
                `}</style>
            </section>

            {/* Batches Sub-section */}
            <section style={{ padding: "0 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Enrollment Options</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>Available <span className="gold-text">Batches</span></h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                    {[
                        { title: "Foundation Course", eligibility: "Class 10th Pass", duration: "2 Years", batch: "15th of March 2026", color: "#22a15a" },
                        { title: "Regular Course", eligibility: "Class 11th Pass", duration: "1 Year", batch: "15th of March 2026", color: "#3b82f6" },
                        { title: "Droppers Course", eligibility: "Class 12th Pass", duration: "1 Year", batch: "15th of March 2026", color: "#d4a017" },
                        { title: "Capsule Course", eligibility: "Targeted Students", duration: "6 Months", batch: "15th of March 2026", color: "#8b5cf6" },
                        { title: "PCMB Special", eligibility: "All Students", duration: "4 Months", batch: "15th of March 2026", color: "#e34a6f" },
                        { title: "Crash Course", eligibility: "After 12th Board", duration: "3-4 Months", batch: "15th of March 2026", color: "#0ea5e9" }
                    ].map(b => (
                        <div key={b.title} style={{ background: "var(--dark)", border: `1px solid ${b.color}40`, borderRadius: "16px", padding: "2rem", transition: "all 0.3s ease", cursor: "pointer", boxShadow: `0 4px 20px ${b.color}10` }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 10px 30px ${b.color}20`; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 20px ${b.color}10`; }}>
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: b.color, marginBottom: "1.25rem" }}>{b.title}</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><strong style={{ color: "#fff" }}>Eligibility:</strong> <span>{b.eligibility}</span></div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}><strong style={{ color: "#fff" }}>Duration:</strong> <span>{b.duration}</span></div>
                                <div style={{ marginTop: "1rem", padding: "0.75rem", background: "rgba(212,160,23,0.1)", borderRadius: "8px", color: "var(--gold)", fontWeight: 700, textAlign: "center", border: "1px dashed rgba(212,160,23,0.3)" }}>
                                    Batch Starts: {b.batch}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-label">Quick Compare</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>Program <span className="gold-text">Comparison</span></h2>
                    </div>

                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem" }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                                    <th style={{ padding: "1.5rem", textAlign: "left", color: "var(--gold)" }}>Feature</th>
                                    {courseDetails.map(c => <th key={c.id} style={{ padding: "1.5rem", textAlign: "center", color: c.color }}>{c.name}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { label: "Target Exam", key: "target" },
                                    { label: "Duration", key: "duration" },
                                    { label: "Batch Size", key: "seats" },
                                    { label: "Exam Body", key: "examBody" }
                                ].map((row, i) => (
                                    <tr key={row.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                                        <td style={{ padding: "1.25rem", fontWeight: 600 }}>{row.label}</td>
                                        {courseDetails.map(c => (
                                            <td key={c.id} style={{ padding: "1.25rem", textAlign: "center" }}>
                                                {/* @ts-ignore */}
                                                {c[row.key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Course FAQs */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Common Questions</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800 }}>Course <span className="gold-text">Queries</span></h2>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                        { q: "Which course is best for B.Sc. Agriculture?", a: "If you are focusing on Madhya Pradesh, MP-PAT is the go-to exam. For top-tier central universities, PVT and BHU Entrance are highly recommended." },
                        { q: "Do you provide online batches as well?", a: "Yes, we provide hybrid learning options. All our students get access to recorded lectures and digital notes via our portal." },
                        { q: "Is there a crash course available?", a: "We typically launch intensive 45-day crash courses 2 months before the exam dates. Enquire now to get notified." },
                        { q: "How are the scholarship tests conducted?", a: "Scholarship tests are conducted every Sunday at our main center. The test covers basic Aptitude and General Science." }
                    ].map((faq, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                                style={{
                                    width: "100%",
                                    padding: "1.5rem",
                                    background: expandedFAQ === i ? "rgba(212,160,23,0.15)" : "rgba(255,255,255,0.04)",
                                    border: `1px solid ${expandedFAQ === i ? "rgba(212,160,23,0.3)" : "rgba(255,255,255,0.08)"}`,
                                    borderRadius: "16px",
                                    color: "var(--gold)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    textAlign: "left",
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <span>Q: {faq.q}</span>
                                <span style={{ fontSize: "1.3rem", minWidth: "30px", textAlign: "center" }}>
                                    {expandedFAQ === i ? "−" : "+"}
                                </span>
                            </button>
                            {expandedFAQ === i && (
                                <div style={{
                                    padding: "1.5rem",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(212,160,23,0.2)",
                                    borderTop: "none",
                                    borderRadius: "0 0 16px 16px",
                                    color: "rgba(255,255,255,0.6)",
                                    lineHeight: 1.6,
                                    marginBottom: "0.5rem"
                                }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
