"use client";
import dynamic from "next/dynamic";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LifeAtGreenValley = dynamic(() => import("../../components/ui/LifeAtGreenValley"), { ssr: false });

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const culturalEvents = [
    { name: "Annual Trips", icon: "🚌", desc: "For mental development and bonding" },
    { name: "Festival Events", icon: "🎭", desc: "With student speeches and performances" },
    { name: "Counseling Sessions", icon: "🤝", desc: "Motivational classes and career guidance" },
];

export default function LifeAtGVCIPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            ".animate-page",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <main style={{ background: "var(--dark)", minHeight: "100vh" }} ref={containerRef}>
            <Navbar />

            <section style={{ paddingTop: "150px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
                <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                    <div className="animate-page" style={{ textAlign: "center", marginBottom: "6rem" }}>
                        <span className="section-label">Beyond Books</span>
                        <h1 style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", fontWeight: 950, letterSpacing: "-0.04em", marginBottom: "2rem" }}>
                            Life at <span className="gold-text">Green Valley</span>
                        </h1>
                        <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.6)", maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}>
                            At Green Valley, we combine disciplined academics with a value-based environment. We believe results come from strong concepts, disciplined testing, and a happy, motivated campus environment.
                        </p>
                    </div>

                    <LifeAtGreenValley />

                    <section style={{ padding: "6rem 0" }}>
                        <div className="animate-page" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "48px", padding: "6rem 4rem", position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(circle at center, rgba(212,160,23,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

                            <div style={{ maxWidth: "800px", position: "relative", zIndex: 1 }}>
                                <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "2rem" }}>Our Culture & <span className="gold-text">Traditions</span></h2>
                                <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "4rem" }}>
                                    We celebrate Ganesh Puja, Teachers’ Day, Children’s Day, and national festivals like Independence Day and Republic Day with speeches, rituals, and stage activities. These events reduce exam stress, build confidence, and create a sense of belonging among students.
                                </p>

                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
                                    {culturalEvents.map((event) => (
                                        <div key={event.name} style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
                                            <div style={{ width: "60px", height: "60px", background: "rgba(212,160,23,0.1)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem" }}>
                                                {event.icon}
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.2rem" }}>{event.name}</h4>
                                                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)" }}>{event.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <Footer />
        </main>
    );
}
