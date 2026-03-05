"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesPage() {
    const featureCards = [
        {
            title: "Small Batch Sizes",
            icon: "👨‍🏫",
            desc: "Individual attention ensured for every student with limited batch strength, preventing students from getting lost in the crowd.",
            img: "/gallery/features/Small Batches.jpeg",
            stats: "Focused Learning"
        },
        {
            title: "Expert Faculty",
            icon: "👩‍🔬",
            desc: "Multiple experienced and qualified teachers available for every subject. Special doubt-solving sessions available beyond regular class hours.",
            img: "/gallery/features/expert faculty.jpeg",
            stats: "Expert Faculty"
        },
        {
            title: "Green Valley Guardian",
            icon: "🤝",
            desc: "A unique 1:10 mentorship system. One dedicated GVCI member is assigned to every 10 students to resolve academic and personal queries promptly.",
            img: "/gallery/features/Guardian.jpeg",
            stats: "1-on-1 Guidance"
        },
        {
            title: "GVCI Library",
            icon: "📚",
            desc: "Available 24 hours. All exam-relevant books, previous year papers, and reference materials are available free of cost for our enrolled students.",
            img: "/gallery/features/library.png",
            stats: "24/7 Access"
        },
        {
            title: "Printed Notes",
            icon: "📖",
            desc: "Chapter-wise printed notes for every subject containing 24 years of solved questions and thousands of expected questions.",
            img: "/gallery/features/Printed Notes.png",
            stats: "Comprehensive Coverage"
        },
        {
            title: "Comprehensive Test Series",
            icon: "📉",
            desc: "Weekly Sunday tests, chapter completion tests, surprise tests, DTS/CTS series during revisions, and full mock exams to simulate the real environment.",
            img: "/gallery/features/Test series.jpeg",
            stats: "Real Exam Practice"
        },
        {
            title: "Doubt Clearing Classes",
            icon: "❓",
            desc: "Regular doubt-clearing sessions beyond regular class hours. Every question is answered with detailed explanations until complete clarity is achieved.",
            img: "/gallery/features/doubt classes.jpeg",
            stats: "Query Resolution"
        },
        {
            title: "Motivational Sessions",
            icon: "🏆",
            desc: "Regular motivation by toppers, subject experts, and achievers. Top 5 students are honored every Sunday during weekly tests to maintain competitive spirit.",
            img: "/gallery/features/Motivation classes.jpeg",
            stats: "Constant Encouragement"
        },
        {
            title: "Personal Guidance",
            icon: "🎯",
            desc: "One-on-one counselling sessions to understand each student's strengths, weaknesses, and goals. Personalized study plans and career guidance provided.",
            img: "/gallery/features/Personal guidance.jpeg",
            stats: "Tailored Support"
        },
        {
            title: "Career Counselling",
            icon: "💼",
            desc: "Expert counselling sessions for course selection and career planning. Get guidance from senior faculty on which exam is best suited for you.",
            img: "/gallery/features/counselling.jpeg",
            stats: "Career Planning"
        },
        {
            title: "Celebrate Small Wins",
            icon: "🌟",
            desc: "We celebrate every achievement of our students. Weekly recognition programs, awards, and appreciation to boost confidence and maintain motivation.",
            img: "/gallery/features/celebrate small wins to motivate.jpeg",
            stats: "Recognition"
        },
        {
            title: "Celebrate Rituals & Culture",
            icon: "🎭",
            desc: "Regular cultural events, celebrations of festivals, and rituals throughout the year. Balanced lifestyle combining studies with cultural traditions.",
            img: "/gallery/features/Celebrate rituals .jpeg",
            stats: "Holistic Growth"
        },
        {
            title: "Annual Travel & Adventure",
            icon: "🚌",
            desc: "Annual educational and recreational trips for students to refresh their minds. Nature exposure combined with team-building activities and bonding.",
            img: "/gallery/features/Annual Travel.jpeg",
            stats: "Mental Refresh"
        }
    ];

    return (
        <main style={{ background: "var(--dark)", color: "#fff", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero Section */}
            <section style={{
                paddingTop: "140px",
                paddingBottom: "8rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                background: "radial-gradient(ellipse at top, rgba(15,61,36,0.6) 0%, var(--dark) 70%)",
                textAlign: "center",
                position: "relative"
            }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,160,23,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(212,160,23,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

                <span className="section-label" style={{ marginBottom: "1rem" }}>The GVCI Difference</span>
                <h1 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 950, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: "2rem" }}>
                    Advanced <span className="gold-text">Features</span><br />
                    for Modern Students
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "800px", margin: "0 auto 4rem", fontSize: "1.25rem", lineHeight: 1.8 }}>
                    We provide more than just coaching; we provide a complete ecosystem for your academic and personal growth.
                </p>
                <div style={{ width: "120px", height: "4px", background: "var(--gold)", margin: "0 auto", borderRadius: "2px" }} />
            </section>

            {/* Feature Cards Grid */}
            <section style={{ padding: "0 1.5rem 8rem", maxWidth: "1400px", margin: "0 auto", marginTop: "-4rem", position: "relative", zIndex: 10 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                    {featureCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="premium-feature-card"
                            style={{
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "32px",
                                overflow: "hidden",
                                transition: "all 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
                                position: "relative"
                            }}
                        >
                            {/* Photo on Top */}
                            <div style={{
                                position: "relative",
                                width: "100%",
                                height: "260px",
                                overflow: "hidden",
                                borderBottom: "1px solid rgba(255,255,255,0.1)"
                            }}>
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    style={{ objectFit: "cover", transition: "transform 0.8s ease" }}
                                    className="feature-img"
                                />
                                <div style={{
                                    position: "absolute",
                                    bottom: "1rem",
                                    left: "1rem",
                                    background: "rgba(5, 15, 9, 0.7)",
                                    backdropFilter: "blur(10px)",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(212, 160, 23, 0.4)",
                                    fontSize: "0.8rem",
                                    fontWeight: 800,
                                    color: "var(--gold)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em"
                                }}>
                                    {card.stats}
                                </div>
                            </div>

                            {/* Details Below */}
                            <div style={{ padding: "2.5rem" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                                    <span style={{ fontSize: "2rem" }}>{card.icon}</span>
                                    <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>{card.title}</h3>
                                </div>
                                <p className="feature-desc" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "2rem" }}>
                                    {card.desc}
                                </p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.1)" }} />
                                    <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>GVCI Excellence</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Motivational Banner */}
            <section style={{
                padding: "8rem 1.5rem",
                background: "linear-gradient(to bottom, transparent, rgba(15,61,36,0.2), transparent)",
                textAlign: "center"
            }}>
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "2rem" }}>🏆</div>
                    <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, marginBottom: "2rem", letterSpacing: "-0.03em" }}>
                        Where Goals Turn into <span className="gold-text">Achievements</span>
                    </h2>
                    <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)", marginBottom: "3.5rem" }}>
                        Join the community that produced AIR 1 in PVT and hundreds of successful university selections across India.
                    </p>
                    <Link href="/admission" className="btn-gold" style={{ padding: "1.2rem 3.5rem", fontSize: "1.1rem" }}>Start Your Journey →</Link>
                </div>
            </section>

            {/* Comparison Table */}
            <section style={{ padding: "6rem 1.5rem 10.5rem" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">Institutional Analysis</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 950 }}>
                            Why Choose <span className="gold-text">GVCI?</span>
                        </h2>
                    </div>
                    <div className="table-wrapper" style={{
                        borderRadius: "32px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(20px)",
                        overflow: "hidden"
                    }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="th-feature">Feature</th>
                                    <th className="th-gvci">GVCI Standards</th>
                                    <th className="th-industry">Industry Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Batch Strength", "Max 40 (Focused)", "100+ (Crowded)"],
                                    ["Weekly Testing", "✅ Every Sunday", "Monthly/Bi-monthly"],
                                    ["Doubt Support", "✅ On-Spot & Digital", "Classroom Only"],
                                    ["Library Access", "✅ 24/7 Silent Zone", "Limited Hours"],
                                    ["Mentorship", "✅ Dedicated Mentor", "❌ Not Available"],
                                ].map(([f, gv, oth], i) => (
                                    <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                        <td className="td-feature">{f}</td>
                                        <td className="td-gvci">{gv}</td>
                                        <td className="td-industry">{oth}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                .premium-feature-card:hover {
                    transform: translateY(-15px);
                    background: rgba(255,255,255,0.04) !important;
                    border-color: var(--gold) !important;
                    box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 20px rgba(212,160,23,0.1);
                }
                .premium-feature-card:hover .feature-img {
                    transform: scale(1.1);
                }
                .section-label {
                    font-size: 0.85rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    color: var(--gold);
                    margin-bottom: 2rem;
                    display: block;
                }
                
                .feature-desc {
                    font-size: 1rem;
                }
                
                /* Table Styles */
                .table-wrapper th, .table-wrapper td {
                    padding: 1.5rem 1rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                }
                .th-feature { text-align: left; color: rgba(255,255,255,0.4); font-size: 0.85rem; }
                .th-gvci { text-align: center; color: var(--gold); font-size: 1rem; font-weight: 950; background: rgba(212,160,23,0.08); }
                .th-industry { text-align: center; color: rgba(255,255,255,0.3); font-size: 0.85rem; }
                
                .td-feature { color: rgba(255,255,255,0.7); font-weight: 600; font-size: 0.95rem; }
                .td-gvci { text-align: center; color: var(--green-400); font-weight: 750; background: rgba(34,161,90,0.05); font-size: 0.95rem; }
                .td-industry { text-align: center; color: rgba(255,255,255,0.3); font-size: 0.85rem; }

                @media (max-width: 768px) {
                    .feature-desc { font-size: 0.9rem; }
                    .table-wrapper th, .table-wrapper td {
                        padding: 0.8rem 0.4rem !important;
                        font-size: 0.7rem !important;
                    }
                    .th-gvci { font-size: 0.8rem !important; }
                    .td-gvci { font-weight: 800 !important; }
                    .table-wrapper {
                        border-radius: 20px !important;
                    }
                }
                @media (max-width: 480px) {
                    .table-wrapper th, .table-wrapper td {
                        padding: 0.6rem 0.25rem !important;
                        font-size: 0.62rem !important;
                    }
                    .th-gvci { font-size: 0.65rem !important; }
                    .td-feature { font-size: 0.65rem !important; }
                }
            `}</style>
        </main>
    );
}
