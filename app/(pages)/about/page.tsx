/* eslint-disable */
"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const milestones = [
    { year: "2011", title: "Institute Founded", desc: "Started with a dream of excellence in agricultural education in Sehore.", icon: "🌱" },
    { year: "2014", title: "First PAT Toppers", desc: "Students from GVCI's early batches secured top ranks in MP PAT.", icon: "🏅" },
    { year: "2018", title: "BHU & ICAR Coaching Launched", desc: "Added specialized BHU & ICAR coaching after high demand from students.", icon: "📚" },
    { year: "2020", title: "Historic PAT Results", desc: "Rohit Purbiya secured BHU All India Rank 38 & PAT All MP Rank 5.", icon: "🏆" },
    { year: "2021", title: "Consistent MP Ranks", desc: "Secured PAT All MP Rank 12, continuing the tradition of top results.", icon: "🌟" },
    { year: "2023", title: "Scholarship & Mentorship", desc: "Established the Green Valley Guardian system and expanded comprehensive scholarship programs.", icon: "🎓" },
    { year: "2026", title: "14 Years of Excellence", desc: "Celebrating 14 years of 75%+ students selected in top colleges of Madhya Pradesh consistently.", icon: "⭐" },
];

const leaders = [
    {
        name: "Sunil Parmar Sir",
        role: "Founder",
        img: "/gallery/faculty/Sunil Parmar Sir-Founder.png",
        bio: "Visionary founder of GVCI, dedicated to transforming agricultural education and empowering students across Madhya Pradesh."
    },
    {
        name: "Ashish Parmar Sir",
        role: "Director",
        img: "/gallery/faculty/Ashish Parmar Sir-Director.png",
        bio: "Leading the institute with strategic excellence and a commitment to academic quality and student success."
    },
    {
        name: "Varsha Parmar Mam",
        role: "Co-Director",
        img: "/gallery/faculty/Varsha Parmar Mam-Co-Director.png",
        bio: "Ensuring smooth operations and academic coordination to provide the best learning environment for our students."
    }
];

const faculty = [
    { name: "Anubhav Sir", role: "Expert Faculty", img: "/gallery/Faculty/Anubhav Sir.png" },
    { name: "Atul Yadav Sir", role: "Expert Faculty", img: "/gallery/Faculty/Atul Yadav Sir.png" },
    { name: "Buddhi Prakash Sir", role: "Expert Faculty", img: "/gallery/Faculty/Buddhi Prakash Sir.png" },
    { name: "Chandrabhan Sir", role: "Expert Faculty", img: "/gallery/Faculty/Chandrabhan Sir.png" },
    { name: "Manish Dhangar Sir", role: "Expert Faculty", img: "/gallery/Faculty/Manish Dhangar Sir.png" },
    { name: "Rohit Patel Sir", role: "Expert Faculty", img: "/gallery/Faculty/Rohit Patel Sir.png" },
    { name: "Vinit Patidar Sir", role: "Expert Faculty", img: "/gallery/Faculty/Vinit Patidar Sir.png" },
];

export default function AboutPage() {
    return (
        <main style={{ background: "var(--dark)", color: "#fff" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Our Story</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    14 Years of <span className="gold-text">Cultivating Excellence</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    From a small classroom in Sehore to a premier destination for agriculture & science entrance coaching in Madhya Pradesh. 14 years of unwavering dedication to our students.
                </p>
            </section>

            {/* Founders & Directors */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Our Leadership</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}>
                        The Minds behind <span className="gold-text">GVCI</span>
                    </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
                    {leaders.map((leader) => (
                        <div key={leader.name} className="leader-card" style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "32px",
                            padding: "2.5rem",
                            textAlign: "center",
                            transition: "all 0.3s ease"
                        }}>
                            <div style={{ width: "140px", height: "140px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.5rem", border: "3px solid var(--gold)" }}>
                                <Image src={leader.img} alt={leader.name} width={140} height={140} style={{ objectFit: "cover" }} />
                            </div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: 900, color: "#fff", marginBottom: "0.5rem" }}>{leader.name}</h3>
                            <span style={{ color: "var(--gold)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.9rem", display: "block", marginBottom: "1.25rem" }}>{leader.role}</span>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.7 }}>{leader.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto", background: "rgba(255,255,255,0.02)", borderRadius: "40px", marginBottom: "6rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
                    {[
                        { icon: "🎯", title: "Our Mission", text: "To provide affordable, world-class coaching for agricultural and science entrance exams, nurturing students from Madhya Pradesh into top university selections." },
                        { icon: "🌟", title: "Our Vision", text: "A future where every talented student from rural MP has the knowledge, confidence, and support to crack any national-level entrance examination." },
                        { icon: "💡", title: "Our Values", text: "Integrity, discipline, and student-first thinking. We believe every student has potential — it's our job to help them unlock it." },
                    ].map((item) => (
                        <div key={item.title} className="card" style={{ textAlign: "center", border: "none", background: "transparent" }}>
                            <div style={{ fontSize: "3.5rem", marginBottom: "1.5rem" }}>{item.icon}</div>
                            <h3 style={{ color: "var(--gold)", fontWeight: 900, fontSize: "1.5rem", marginBottom: "1rem" }}>{item.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: 1.8 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Culture & Traditions */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Campus Life</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}> Our <span className="gold-text">Culture & Traditions</span></h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
                    <div>
                        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.8, marginBottom: "3rem" }}>
                            At Green Valley, we combine disciplined academics with a value-based environment. We celebrate Ganesh Puja, Teachers’ Day, Children’s Day, and national festivals like Independence Day and Republic Day with speeches, rituals, and stage activities. These events reduce exam stress, build confidence, and create a sense of belonging among students.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {[
                                "Annual trips for mental development and bonding",
                                "Festival events with student speeches and performances",
                                "Motivational classes and career counseling sessions"
                            ].map((point, i) => (
                                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    <div style={{ minWidth: "24px", height: "24px", borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "var(--dark)" }}>✓</div>
                                    <span style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ position: "relative", borderRadius: "32px", overflow: "hidden", aspectRatio: "16/10" }}>
                        <Image
                            src="/gallery/ganesh utsav/WhatsApp Image 2026-03-03 at 4.14.00 PM.jpeg"
                            alt="Culture at GVCI"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </section>

            {/* Expert Faculty */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Expert Mentors</span>
                    <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}>
                        Meet the <span className="gold-text">Academic Team</span>
                    </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
                    {faculty.map((f) => (
                        <div key={f.name} className="faculty-mini-card" style={{
                            background: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.05)",
                            borderRadius: "24px",
                            padding: "1.5rem",
                            textAlign: "center",
                            transition: "all 0.3s ease"
                        }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 1rem", border: "2px solid rgba(212,160,23,0.3)" }}>
                                <Image src={f.img} alt={f.name} width={80} height={80} style={{ objectFit: "cover" }} />
                            </div>
                            <h3 style={{ fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: "0.25rem" }}>{f.name}</h3>
                            <p style={{ color: "var(--gold)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>{f.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Journey Timeline */}
            <section style={{ padding: "8rem 1.5rem", background: "rgba(15,61,36,0.1)", position: "relative" }}>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <span className="section-label">Milestones</span>
                        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900 }}>
                            Our <span className="green-text">Journey</span> of Growth
                        </h2>
                    </div>
                    <div style={{ position: "relative" }}>
                        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, var(--green-500), var(--gold))", transform: "translateX(-50%)" }} />
                        {milestones.map((m, i) => (
                            <div
                                key={m.year}
                                style={{
                                    display: "flex",
                                    justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                                    marginBottom: "4rem",
                                    position: "relative",
                                }}
                            >
                                <div style={{ width: "45%", position: "relative" }}>
                                    <div style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: "24px",
                                        padding: "1.5rem 2rem",
                                        transition: "all 0.3s ease"
                                    }}>
                                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                                            <span style={{ fontSize: "1.75rem" }}>{m.icon}</span>
                                            <span style={{ color: "var(--gold)", fontWeight: 900, fontSize: "1.25rem" }}>{m.year}</span>
                                        </div>
                                        <h4 style={{ fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>{m.title}</h4>
                                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6 }}>{m.desc}</p>
                                    </div>
                                </div>
                                <div style={{ position: "absolute", left: "50%", top: "1.5rem", width: "16px", height: "16px", borderRadius: "50%", background: "var(--gold)", transform: "translateX(-50%)", boxShadow: "0 0 15px rgba(212,160,23,0.8)", zIndex: 10 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "8rem 1.5rem", background: "linear-gradient(to bottom, transparent, rgba(15,61,36,0.2), transparent)", textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, marginBottom: "2rem", letterSpacing: "-0.03em" }}>
                    Become Part of <span className="gold-text">Our Story</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "700px", margin: "0 auto 3.5rem", fontSize: "1.25rem" }}>Join hundreds of successful GVCI alumni who are now at top universities across India.</p>
                <Link href="/admission" className="btn-gold" style={{ padding: "1.2rem 3.5rem", fontSize: "1.1rem" }}>
                    Apply for Admission →
                </Link>
            </section>

            <Footer />

            <style jsx>{`
                .leader-card:hover, .faculty-mini-card:hover {
                    transform: translateY(-10px);
                    background: rgba(255,255,255,0.05) !important;
                    border-color: var(--gold) !important;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
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
                .green-text { color: var(--green-400); }
                @media (max-width: 768px) {
                    section { padding: 4rem 1.25rem !important; }
                    div[style*="width: 45%"] { width: 100% !important; margin-left: 2rem !important; }
                    div[style*="left: 50%"] { left: 1rem !important; }
                    div[style*="justify-content: flex-end"] { justify-content: flex-start !important; }
                }
            `}</style>
        </main>
    );
}
