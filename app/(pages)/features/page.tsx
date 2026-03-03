"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function FeaturesPage() {
    const featureCards = [
        {
            title: "Smart Innovative Classes",
            icon: "💻",
            desc: "Our Smart Classes use advanced visualization methods to simplify complex biology and agriculture concepts. Teaching with high-end tech makes learning interactive and easy to retain.",
            img: "/gallery/classes/WhatsApp Image 2026-03-03 at 4.23.25 PM.jpeg",
            stats: "Interactive Learning"
        },
        {
            title: "Weekly Motivation Classes",
            icon: "🔥",
            desc: "Success isn't just about study; it's about mindset. Every week, we conduct sessions to keep students focused, consistent, and mentally prepared for national-level challenges.",
            img: "/gallery/seminar/WhatsApp Image 2026-03-03 at 4.23.08 PM.jpeg",
            stats: "Mindset & Growth"
        },
        {
            title: "Result-Oriented Test Series",
            icon: "📉",
            desc: "Highly curated mock tests with detailed analytics. We track your progress across topics, predicting your rank and identifying exact weak points for improvement.",
            img: "/gallery/testimonials results/Screenshot 2026-03-03 203229.png",
            stats: "Real Exam Practice"
        },
        {
            title: "Personal Mentorship",
            icon: "🤝",
            desc: "Beyond classroom hours, every student is guided by a personal mentor. We discuss academic strategy, university selection, and even organize dinners for top performers.",
            img: "/gallery/top 3 dinner/WhatsApp Image 2026-03-03 at 4.19.30 PM.jpeg",
            stats: "1-on-1 Guidance"
        },
        {
            title: "Celebrations & Festivals",
            icon: "🌟",
            desc: "At GVCI, we celebrate every milestone. From Ganesh Utsav to National festivals, our campus is a vibrant community that believes in holistic cultural growth.",
            img: "/gallery/ganesh utsav/g25/Screenshot 2026-03-03 203348.png",
            stats: "Vibrant Campus Life"
        },
        {
            title: "Curated Study Package",
            icon: "📖",
            desc: "Our in-house study material (4 volumes) is designed by experts to cover the entire entrance syllabus with shortcuts and solved examples for quick revision.",
            img: "/gallery/others/WhatsApp Image 2026-03-03 at 4.13.23 PM.jpeg",
            stats: "Expert Material"
        },
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
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "2.5rem" }}>
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
                                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>
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
                        Join the community that produced AIR 1 in CPAT and hundreds of successful university selections across India.
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
                        overflowX: "auto",
                        borderRadius: "32px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(20px)"
                    }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th style={{ padding: "1.75rem", textAlign: "left", color: "rgba(255,255,255,0.4)", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Feature</th>
                                    <th style={{ padding: "1.75rem", textAlign: "center", color: "var(--gold)", fontSize: "1.1rem", fontWeight: 950, borderBottom: "1px solid rgba(255,255,255,0.1)", background: "rgba(212,160,23,0.08)" }}>GVCI Standards</th>
                                    <th style={{ padding: "1.75rem", textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Industry Average</th>
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
                                        <td style={{ padding: "1.5rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>{f}</td>
                                        <td style={{ padding: "1.5rem", textAlign: "center", color: "var(--green-400)", fontWeight: 750, background: "rgba(34,161,90,0.05)" }}>{gv}</td>
                                        <td style={{ padding: "1.5rem", textAlign: "center", color: "rgba(255,255,255,0.3)" }}>{oth}</td>
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
            `}</style>
        </main>
    );
}
