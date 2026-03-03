"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const milestones = [
    { year: "2015", title: "Institute Founded", desc: "Started with 12 students and a dream of excellence in agricultural education in Sehore.", icon: "🌱" },
    { year: "2016", title: "First PAT Toppers", desc: "3 students from GVCI's inaugural batch secured top 20 ranks in MP PAT.", icon: "🏅" },
    { year: "2018", title: "BHU Coaching Launched", desc: "Added specialized BHU coaching after high demand from students targeting Banaras Hindu University.", icon: "📚" },
    { year: "2020", title: "Online Doubt Portal", desc: "Launched a digital doubt-clearing system enabling 24x7 academic support for students.", icon: "💻" },
    { year: "2021", title: "₹50 Lakh Scholarship Fund", desc: "Created the GVCI Scholarship Fund to support economically weaker meritorious students.", icon: "🎓" },
    { year: "2022", title: "CPAT & CPET Programs", desc: "Expanded offerings to include CPAT and CPET, making GVCI a one-stop destination.", icon: "🧪" },
    { year: "2023", title: "AIR 1 in CPAT", desc: "Anjali Patel from GVCI secured All-India Rank 1 in CPAT 2023 – a historic achievement.", icon: "🏆" },
    { year: "2024", title: "500+ Enrolled, ₹2Cr Scholarships", desc: "Over 500 students enrolled and ₹2 Crore in scholarships awarded cumulatively.", icon: "⭐" },
];

const faculty = [
    {
        name: "Dr. Suresh Kumar Sharma",
        role: "Founder & Director | Biology & Agriculture",
        exp: "18 Years Experience",
        edu: "M.Sc. Agriculture, PhD (Agronomy), JNKVV Jabalpur",
        img: "/gallery/475057395_1033857868759469_5485895748089860725_n.jpg",
        bio: "Dr. Sharma founded GVCI with the vision of making quality agriculture coaching accessible to rural Madhya Pradesh students.",
    },
    {
        name: "Prof. Anita Verma",
        role: "Head of Chemistry",
        exp: "12 Years Experience",
        edu: "M.Sc. Chemistry, IIT Indore",
        img: "/gallery/475147427_9164457446948055_1901613602895446739_n.jpg",
        bio: "Prof. Verma has trained 200+ students who qualified in BHU and CPAT with chemistry as a scoring subject.",
    },
    {
        name: "Mr. Rahul Mishra",
        role: "Physics & Mathematics Expert",
        exp: "9 Years Experience",
        edu: "B.Tech Physics, MANIT Bhopal",
        img: "/gallery/492542904_1106057028206219_1656244274025712674_n.jpg",
        bio: "Mr. Mishra's simplified approach to tough physics problems has been credited by 50+ PAT toppers.",
    },
    {
        name: "Ms. Priyanka Joshi",
        role: "Counselor & Academic Coordinator",
        exp: "7 Years Experience",
        edu: "M.A. Psychology, Barkatullah University",
        img: "/gallery/492350792_1103358641809391_594765889162382026_n.jpg",
        bio: "Ms. Joshi ensures every student's mental wellbeing and personal learning growth throughout their journey at GVCI.",
    },
];

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Our Story</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    A Decade of <span className="gold-text">Cultivating Excellence</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    From a small classroom in Sehore to a premier destination for agriculture & science entrance coaching in Madhya Pradesh — this is the GVCI story.
                </p>
            </section>

            {/* Mission / Vision */}
            <section style={{ padding: "5rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
                    {[
                        { icon: "🎯", title: "Our Mission", text: "To provide affordable, world-class coaching for agricultural and science entrance exams, nurturing students from Madhya Pradesh into top university selections." },
                        { icon: "🌟", title: "Our Vision", text: "A future where every talented student from rural MP has the knowledge, confidence, and support to crack any national-level entrance examination." },
                        { icon: "💡", title: "Our Values", text: "Integrity, discipline, and student-first thinking. We believe every student has potential — it's our job to help them unlock it." },
                    ].map((item) => (
                        <div key={item.title} className="card" style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1.25rem" }}>{item.icon}</div>
                            <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section style={{ padding: "5rem 1.5rem", background: "rgba(15,61,36,0.15)", position: "relative" }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                        <span className="section-label">Milestones</span>
                        <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800 }}>
                            Our <span className="green-text">Journey</span> of Growth
                        </h2>
                    </div>
                    <div style={{ position: "relative" }}>
                        {/* Center line */}
                        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, var(--green-500), var(--gold))", transform: "translateX(-50%)" }} />
                        {milestones.map((m, i) => (
                            <div
                                key={m.year}
                                style={{
                                    display: "flex",
                                    justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                                    marginBottom: "2.5rem",
                                    position: "relative",
                                }}
                            >
                                <div style={{ width: "45%", position: "relative" }}>
                                    <div className="card" style={{ padding: "1.25rem 1.5rem" }}>
                                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.5rem" }}>
                                            <span style={{ fontSize: "1.5rem" }}>{m.icon}</span>
                                            <span style={{ color: "var(--gold)", fontWeight: 900, fontSize: "1.1rem" }}>{m.year}</span>
                                        </div>
                                        <h4 style={{ fontWeight: 700, color: "#fff", marginBottom: "0.4rem" }}>{m.title}</h4>
                                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.6 }}>{m.desc}</p>
                                    </div>
                                </div>
                                {/* Center dot */}
                                <div style={{ position: "absolute", left: "50%", top: "1.2rem", width: "14px", height: "14px", borderRadius: "50%", background: "var(--gold)", transform: "translateX(-50%)", boxShadow: "0 0 10px rgba(212,160,23,0.7)" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <span className="section-label">Meet the Team</span>
                    <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800 }}>
                        Our Expert <span className="gold-text">Faculty</span>
                    </h2>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.5rem" }}>
                    {faculty.map((f) => (
                        <div key={f.name} className="card" style={{ textAlign: "center" }}>
                            <div style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", margin: "0 auto 1.25rem", border: "3px solid rgba(212,160,23,0.4)" }}>
                                <Image src={f.img} alt={f.name} width={80} height={80} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                            </div>
                            <h3 style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fff", marginBottom: "0.3rem" }}>{f.name}</h3>
                            <p style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.role}</p>
                            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginBottom: "0.75rem" }}>{f.edu}</p>
                            <span style={{ background: "rgba(34,161,90,0.15)", color: "var(--green-400)", fontSize: "0.75rem", padding: "0.2rem 0.7rem", borderRadius: "50px", fontWeight: 600 }}>{f.exp}</span>
                            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.6, marginTop: "1rem" }}>{f.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "5rem 1.5rem", background: "rgba(15,61,36,0.2)", textAlign: "center" }}>
                <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.75rem)", fontWeight: 800, marginBottom: "1.25rem" }}>
                    Become Part of <span className="gold-text">Our Story</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>Join hundreds of successful GVCI alumni who are now at top universities across India.</p>
                <Link href="/admission" className="btn-gold">Apply for Admission →</Link>
            </section>

            <Footer />
        </main>
    );
}
