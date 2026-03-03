"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ContactForm from "./components/ContactForm";
import Link from "next/link";

const BookPreloader = dynamic(() => import("./components/ui/BookPreloader"), { ssr: false });
const AdmissionTabs = dynamic(() => import("./components/ui/AdmissionTabs"), { ssr: false });

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    id: "cpat",
    name: "CPAT",
    full: "Central Pre-Agriculture Test",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
    border: "rgba(59,130,246,0.25)",
    emoji: "🌱",
    desc: "Specialized CPAT coaching with national-level test series and all-India rank prediction.",
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
  {
    id: "cpet",
    name: "CPET",
    full: "Combined Pre-Science Exam Test",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.1)",
    border: "rgba(139,92,246,0.25)",
    emoji: "🔬",
    desc: "Science-focused CPET preparation with biology, chemistry, and physics deep dives.",
  },
];

const scholarships = [
  { name: "Merit Scholarship", icon: "🏆", desc: "Awarded to students based on Class 12 board scores (85%+)." },
  { name: "Aptitude Test", icon: "📝", desc: "Performance-based support through our in-house exam." },
  { name: "EWS Support", icon: "🤝", desc: "Financial assistance for meritorious students from EWS backgrounds." },
];

const homeFeatures = [
  {
    icon: "👨‍🏫",
    title: "Small Batches",
    desc: "Max 40 students per batch for direct faculty attention and personalized progress tracking.",
    stats: "3x More Attention",
  },
  {
    icon: "📊",
    title: "Weekly Mock Tests",
    desc: "Regular standardized tests with deep performance analytics and batch-ranking reports.",
    stats: "52 Tests / Year",
  },
  {
    icon: "🧠",
    title: "Concept-First Teaching",
    desc: "Visualizing complex science and agriculture concepts to ensure lifelong understanding.",
    stats: "98% Clarity Rate",
  },
  {
    icon: "🤝",
    title: "Personal Mentoring",
    desc: "Assigned faculty mentors provide academic guidance and emotional support to every student.",
    stats: "1:10 Mentor Ratio",
  },
];

export default function Home() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    // GSAP Animation for elements
    gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });

    if (heroTextRef.current) {
      gsap.fromTo(
        heroTextRef.current.querySelectorAll(".animate-in"),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.6 }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoading]);

  return (
    <>
      <BookPreloader onComplete={() => setIsLoading(false)} />
      <main style={{ filter: isLoading ? "blur(10px)" : "none", transition: "filter 1.2s cubic-bezier(0.2, 1, 0.3, 1)" }}>
        <Navbar />

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

          <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }} ref={heroTextRef}>
            <span className="animate-in section-label" style={{ marginBottom: "1.5rem" }}>🌿 Established 2015 · Excellence in Agriculture</span>
            <h1 className="animate-in" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 950, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: "2rem" }}>
              <span style={{ color: "#fff" }}>Green</span> <span className="gold-text">Valley</span><br />
              <span className="green-text" style={{ fontSize: "0.8em" }}>Coaching Institute</span>
            </h1>
            <p className="animate-in" style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "3.5rem", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
              The premier destination for PAT, CPAT, BHU, and CPET preparation in Sehore. Empowering future agricultural leaders with scientific methodology.
            </p>
            <div className="animate-in" style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/admission" className="btn-gold" style={{ textDecoration: "none", padding: "1.1rem 2.8rem", fontSize: "1.1rem" }}>Explore Admission →</a>
              <a href="/courses" className="btn-outline" style={{ textDecoration: "none", padding: "1.1rem 2.8rem", fontSize: "1.1rem" }}>Our Courses</a>
            </div>
          </div>
        </section>

        {/* ─── COURSES SECTION ─── */}
        <section id="courses" className="reveal-section" style={{ padding: "10rem 1.5rem", background: "rgba(5,15,9,0.8)", position: "relative" }}>
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
          </div>
        </section>

        {/* ─── FEATURES SECTION ─── */}
        <section id="features" className="reveal-section" style={{ padding: "10rem 1.5rem", background: "var(--dark)", position: "relative" }}>
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
              <Link href="/features" className="btn-outline">View All Features →</Link>
            </div>
          </div>
        </section>

        {/* ─── ABOUT SECTION (Condensed) ─── */}
        <section id="about" className="reveal-section" style={{ padding: "10rem 1.5rem", background: "rgba(15,61,36,0.15)", position: "relative" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "center" }}>
              <div>
                <span className="section-label">Since 2015</span>
                <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "2rem" }}>
                  Cultivating <span className="gold-text">Agricultural</span> Excellence
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                  Started with just 12 students, GVCI has grown into the premier coaching hub for PAT and CPAT in Sehore. Our mission is to bridge the gap between rural talent and India's top agricultural universities.
                </p>
                <div style={{ display: "flex", gap: "2rem", marginBottom: "3rem" }}>
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
                </div>
                <Link href="/about" className="btn-gold">Read Our Story →</Link>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", inset: "-20px", border: "2px solid var(--gold)", borderRadius: "32px", transform: "translate(20px, 20px)", pointerEvents: "none" }} />
                <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "24px", padding: "3rem", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🏆</div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "1rem" }}>Historic Achievement</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontStyle: "italic", marginBottom: "2rem" }}>
                    "Securing All-India Rank 1 in CPAT 2023 was only possible due to Dr. Sharma's concept-first methodology and the constant support of GVCI faculty."
                  </p>
                  <div style={{ fontWeight: 800, color: "var(--gold)" }}>— Anjali Patel</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>AIR 1, CPAT 2023</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ADMISSION SECTION ─── */}
        <section id="admission" className="reveal-section" style={{ padding: "10rem 1.5rem", background: "radial-gradient(circle at bottom right, rgba(212,160,23,0.05) 0%, transparent 50%)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span className="section-label">Enrollment Open</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.02em" }}>Admission <span className="gold-text">2026-27</span></h2>
            </div>
            <AdmissionTabs onApplyClick={() => { window.location.href = "/contact"; }} />
          </div>
        </section>

        {/* ─── SCHOLARSHIP SECTION ─── */}
        <section id="scholarship" className="reveal-section" style={{ padding: "10rem 1.5rem", background: "rgba(15,61,36,0.1)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "5rem" }}>
              <span className="section-label">Financial Aid</span>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.02em" }}>Scholarships & <span className="gold-text">Support</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
              {scholarships.map((s) => (
                <div key={s.name} style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "32px", padding: "3rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{s.icon}</div>
                  <h3 style={{ fontSize: "1.75rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>{s.name}</h3>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>{s.desc}</p>
                  <a href="/scholarship" className="btn-outline" style={{ display: "inline-block", textDecoration: "none", fontSize: "0.9rem", padding: "0.6rem 1.5rem" }}>View Criteria</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT SECTION ─── */}
        <div id="contact" className="reveal-section">
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
        .btn-gold { background: var(--gold); color: var(--dark); border: none; padding: 1rem 2.25rem; border-radius: 60px; font-weight: 950; cursor: pointer; transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1); display: inline-block; border: 1px solid var(--gold); }
        .btn-gold:hover { transform: translateY(-5px); box-shadow: 0 15px 35px rgba(212,160,23,0.3); background: transparent; color: var(--gold); }
        .btn-outline { background: transparent; border: 1px solid rgba(255,255,255,0.25); color: #fff; padding: 1rem 2.25rem; border-radius: 60px; font-weight: 800; cursor: pointer; transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1); display: inline-block; }
        .btn-outline:hover { background: rgba(255,255,255,0.08); border-color: #fff; transform: translateY(-5px); }
        .hover-lift:hover { transform: translateY(-12px); border-color: var(--gold) !important; background: rgba(212,160,23,0.04) !important; }
        
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
