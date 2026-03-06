"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Link from "next/link";
import StudentReviewsSection from "./components/ui/StudentReviewsSection";
import AchievementsSection from "./components/ui/AchievementsSection";
import LifeAtGreenValley from "./components/ui/LifeAtGreenValley";

const AdmissionTabs = dynamic(() => import("./components/ui/AdmissionTabs"), { ssr: false });

const courses = [
  {
    id: "pat",
    name: "PAT",
    full: "Pre-Agriculture Test",
    color: "#22a15a",
    bg: "rgba(34,161,90,0.1)",
    border: "rgba(34,161,90,0.25)",
    emoji: "🌾",
    desc: "Comprehensive preparation for MP PAT with expert faculty, weekly tests, and personalized mentoring.",
  },
  {
    id: "pvt",
    name: "PVT",
    full: "Pre-Veterinary Test",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
    emoji: "🌱",
    desc: "Specialized PVT coaching with national-level test series and all-India rank prediction.",
  },
  {
    id: "bhu",
    name: "BHU",
    full: "Banaras Hindu University Entrance",
    color: "#d4a017",
    bg: "rgba(212,160,23,0.1)",
    border: "rgba(212,160,23,0.25)",
    emoji: "📚",
    desc: "Elite preparation for BHU UET with experienced faculty who are BHU alumni themselves.",
  },
];

const scholarships = [
  { name: "Merit Scholarship", icon: "🏆", desc: "Awarded to students based on Class 12 board scores (85%+)." },
  { name: "Aptitude Test", icon: "📝", desc: "Performance-based support through our in-house exam." },
  { name: "EWS Support", icon: "🤝", desc: "Financial assistance for meritorious students from EWS backgrounds." },
];

const homeFeatures = [
  {
    icon: "📉",
    title: "Test Series",
    desc: "Curated mock tests with detailed analytics. Dedicated Saturday doubt classes plus special topper meets over dinner for top performers.",
    stats: "Real Exam Practice",
  },
  {
    icon: "📖",
    title: "Study Material",
    desc: "Subject-wise printed notes covering 24 years of previous questions.",
    stats: "Comprehensive Coverage",
  },
  {
    icon: "📚",
    title: "Library Facility",
    desc: "24-hour access to the GVCI Library with essential competitive exam books.",
    stats: "24/7 Access",
  },
  {
    icon: "👩‍🔬",
    title: "Doubt Class",
    desc: "Saturday extra doubt classes plus special topper meets over dinner (Top 3 awards).",
    stats: "Expert Faculty",
  },
  {
    icon: "🎓",
    title: "Awarded Institute",
    desc: "Recognized by Hon. CM Shivraj Singh Chouhan for excellence in agriculture coaching.",
    stats: "Deserving Support",
  },
  {
    icon: "🤝",
    title: "Mentorship & Counseling",
    desc: "Green Valley Guardian System: 1:10 mentors, motivational classes, and career counseling support.",
    stats: "1-on-1 Guidance",
  },
  {
    icon: "🧠",
    title: "Concept First Teaching",
    desc: "Visualizing complex science concepts to ensure lifelong understanding.",
    stats: "Interactive Learning",
  },
];

export default function Home() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const closeAnnouncement = () => {
    setShowAnnouncement(false);
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (showAnnouncement) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev;
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showAnnouncement]);

  return (
    <>
      <main>
        <Navbar />

        {showAnnouncement && (
          <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.58)", pointerEvents: "auto" }}>
            <div style={{ width: "min(92vw, 720px)", position: "absolute", left: "50%", top: "52%", transform: "translate(-50%, -50%)" }}>
              <div style={{ position: "relative", width: "100%", borderRadius: "14px", overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,0.55)" }}>
                <Image
                  src="/gallery/All images/others/WhatsApp Image 2026-03-03 at 4.41.49 PM.jpeg"
                  alt="Announcement"
                  width={1280}
                  height={1600}
                  priority
                  sizes="(max-width: 768px) 92vw, 720px"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <button
                  aria-label="Close announcement"
                  onClick={closeAnnouncement}
                  style={{ position: "absolute", top: "0.5rem", right: "0.5rem", width: "2rem", height: "2rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.7)", background: "rgba(5,15,9,0.75)", color: "#fff", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1, cursor: "pointer" }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── SIMPLE PREMIUM HERO ─── */}
        <section
          id="hero"
          style={{
            minHeight: "100vh",
            background: "radial-gradient(ellipse at center, rgba(15,61,36,0.4) 0%, var(--dark) 70%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1.5rem",
            paddingTop: "100px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "linear-gradient(rgba(212,160,23,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(212,160,23,0.03) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
            <span className="animate-in section-label" style={{ marginBottom: "1.5rem" }}>🌿 Established 2011 · Excellence in Agriculture</span>
            <h1 className="animate-in" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 950, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "2rem" }}>
              <span style={{ color: "#fff" }}>Green</span> <span className="gold-text">Valley</span><br />
              <span className="green-text" style={{ fontSize: "0.8em" }}>Coaching Institute</span>
            </h1>
            <p className="animate-in" style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "3.5rem", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
              The premier destination for PAT, CUET(ICAR), BHU, and PVT preparation in Sehore. Expert faculty, proven methodology, and a supportive environment for future agricultural leaders.
            </p>
            <div className="animate-in" style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="/admission" className="btn-gold" style={{ textDecoration: "none", padding: "1.1rem 2.8rem", fontSize: "1.1rem" }}>Explore Admission →</a>
            </div>

            <div className="animate-in" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                "State‑Level Awarded Institute (Hon. CM Shivraj Singh Chouhan)",
                "Annual Growth Trips & Cultural Events",
                "Topper Awards & Test Championship"
              ].map((text, i) => (
                <div key={i} style={{
                  padding: "0.5rem 1.25rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(5px)"
                }}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COURSES SECTION ─── */}
        <section id="courses" style={{ padding: "4rem 1.5rem", background: "rgba(5,15,9,0.8)", position: "relative" }}>
          {/* Background glow effects */}
          <div style={{ position: "absolute", top: "10%", left: "5%", width: "300px", height: "300px", background: "rgba(34,161,90,0.15)", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "400px", background: "rgba(212,160,23,0.1)", filter: "blur(150px)", borderRadius: "50%", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: "6rem" }}>
              <span className="section-label" style={{ marginBottom: "1rem" }}>Academic Programs</span>
              <h2 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 950, letterSpacing: "-0.03em", lineHeight: 1 }}>
                Our Specialty <span className="gold-text">Courses</span>
              </h2>
              <div style={{ width: "80px", height: "4px", background: "var(--gold)", margin: "2rem auto", borderRadius: "2px" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
              {courses.map((course) => (
                <div
                  key={course.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${course.border}`,
                    borderRadius: "32px",
                    padding: "4rem 3rem",
                    transition: "all 0.5s cubic-bezier(0.2, 1, 0.3, 1)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  className="course-card-premium"
                >
                  {/* Card specific glow */}
                  <div style={{ position: "absolute", top: "-20%", left: "-20%", width: "60%", height: "60%", background: `${course.bg}`, filter: "blur(60px)", opacity: 0.4, pointerEvents: "none" }} />

                  <div style={{
                    width: "80px",
                    height: "80px",
                    background: course.bg,
                    border: `1px solid ${course.border}`,
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    marginBottom: "2.5rem",
                    boxShadow: `0 10px 30px ${course.bg}`
                  }}>{course.emoji}</div>

                  <h3 style={{ fontSize: "2.5rem", fontWeight: 950, color: "#fff", marginBottom: "0.5rem", letterSpacing: "-0.02em" }}>{course.name}</h3>
                  <div style={{ fontSize: "0.9rem", color: course.color, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1.5rem" }}>{course.full}</div>

                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>{course.desc}</p>

                  <a href="/courses" style={{
                    color: "#fff",
                    fontWeight: 800,
                    textDecoration: "none",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    transition: "gap 0.3s ease"
                  }} className="course-link">
                    Explore Details <span style={{ color: course.color, fontSize: "1.2rem", transition: "transform 0.3s ease" }}>→</span>
                  </a>

                  {/* Aesthetic Corner Number */}
                  <div style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-10px",
                    fontSize: "8rem",
                    fontWeight: 950,
                    color: "rgba(255,255,255,0.03)",
                    pointerEvents: "none",
                    userSelect: "none"
                  }}>
                    {course.id.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <Link href="/courses" className="btn-gold">Explore Our Courses →</Link>
            </div>
          </div>
        </section>

        {/* ─── FEATURES SECTION ─── */}
        <section id="features" style={{ padding: "4rem 1.5rem", background: "var(--dark)", position: "relative" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span className="section-label">The GVCI Advantage</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.02em" }}>What Sets Us <span className="gold-text">Apart</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {homeFeatures.map((f) => (
                <div key={f.title} className="card-premium" style={{ position: "relative", overflow: "hidden", padding: "3rem 2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #22a15a, var(--gold))" }} />
                  <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{f.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: "1.25rem", color: "#fff", marginBottom: "1rem" }}>{f.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{f.desc}</p>
                  <div style={{ paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.06)", color: "var(--gold)", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    📈 {f.stats}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <Link href="/features" className="btn-outline">Read More →</Link>
            </div>
          </div>
        </section>

        {/* ─── LIFE AT GREEN VALLEY SECTION ─── */}
        <LifeAtGreenValley isHomePage={true} />

        {/* ─── ABOUT US SECTION (Condensed) ─── */}
        <section id="about-us" style={{ padding: "4rem 1.5rem", background: "rgba(15,61,36,0.15)", position: "relative" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
              <div>
                <span className="section-label">Since 2011</span>
                <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
                  Cultivating <span className="gold-text">Agricultural</span> Excellence
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  Started with just 12 students, GVCI has grown into the premier coaching hub for PAT and PVT in Sehore. Our mission is to bridge the gap between rural talent and India&apos;s top agricultural universities. We believe results come from strong concepts, disciplined testing, and a happy, motivated campus environment.
                </p>
                <div className="home-stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold)" }}>10Yrs</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Excellence</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--green-400)" }}>500+</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Success Stories</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gold)" }}>AIR 1</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Highest Rank</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "2rem", fontWeight: 900, color: "var(--green-400)" }}>50+</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Events & Trips</div>
                  </div>
                </div>
                <Link href="/about" className="btn-gold">Read Our Story →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ADMISSION SECTION ─── */}
        <section id="admission" style={{ padding: "6rem 1.5rem", background: "radial-gradient(circle at bottom right, rgba(212,160,23,0.05) 0%, transparent 50%)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span className="section-label">Enrollment Open</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.02em" }}>Admission <span className="gold-text">2026-27</span></h2>
            </div>
            <AdmissionTabs wrapTabs onApplyClick={() => { window.location.href = "/enquiry-form"; }} />
          </div>
        </section>

        {/* ─── SCHOLARSHIP SECTION ─── */}
        <section id="scholarship" style={{ padding: "4rem 1.5rem", background: "rgba(15,61,36,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-label">Financial Aid</span>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, letterSpacing: "-0.02em" }}>Scholarships & <span className="gold-text">Support</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {scholarships.map((s) => (
                <div key={s.name} style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "2rem" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#fff", marginBottom: "0.5rem" }}>{s.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{s.desc}</p>
                  <a href="/scholarship" className="btn-outline" style={{ display: "inline-block", textDecoration: "none", fontSize: "0.8rem", padding: "0.5rem 1.2rem" }}>View Criteria</a>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/enquiry-form" className="btn-gold">Apply for Scholarship -&gt;</Link>
            </div>
          </div>
        </section>

        {/* ─── ACHIEVEMENTS SECTION ─── */}
        <AchievementsSection />

        {/* ─── STUDENT REVIEWS SECTION ─── */}
        <StudentReviewsSection />

        {/* ─── CONTACT SECTION ─── */}
        <div id="contact">
          <ContactForm />
        </div>

        <Footer />
      </main>

      <style jsx global>{`
        :root {
          --dark: #050f09;
          --gold: #d4a017;
          --gold-light: #f1c40f;
          --green-900: #0f3d24;
          --green-800: #1a5c32;
        }
        body { background: var(--dark); color: #fff; scroll-behavior: smooth; overflow-x: hidden; }
        .gold-text { color: var(--gold); }
        .green-text { color: #22a15a; }
        .section-label { font-size: 0.85rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: var(--gold); display: block; }
        .btn-gold { background: var(--gold); color: var(--dark); border: none; padding: 1rem 2.25rem; border-radius: 60px; font-weight: 950; cursor: pointer; transition: all 0.4s ease; display: inline-block; border: 1px solid var(--gold); }
        .btn-gold:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(212,160,23,0.3); background: transparent; color: var(--gold); }
        .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: #fff; padding: 1rem 2.25rem; border-radius: 60px; font-weight: 800; cursor: pointer; transition: all 0.4s ease; display: inline-block; }
        .btn-outline:hover { background: rgba(255,255,255,0.08); border-color: #fff; transform: translateY(-5px); }
        .hover-lift { transition: all 0.4s ease; }
        .hover-lift:hover { transform: translateY(-12px); border-color: var(--gold) !important; background: rgba(212,160,23,0.04) !important; }
        
        .course-card-premium {
          transition: all 0.4s ease !important;
        }
        .course-card-premium:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: var(--gold) !important;
          background: rgba(255,255,255,0.05) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 20px rgba(212,160,23,0.1);
        }
        .course-card-premium:hover .course-link {
          color: var(--gold);
        }
        .course-card-premium:hover .course-link span {
          transform: translateX(8px);
        }

        .card-premium {
            transition: all 0.4s ease !important;
        }
        .card-premium:hover {
            transform: translateY(-10px);
            border-color: var(--gold) !important;
            background: rgba(255,255,255,0.04) !important;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
      `}</style>
    </>
  );
}
