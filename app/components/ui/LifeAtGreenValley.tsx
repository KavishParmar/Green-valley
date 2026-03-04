"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const galleryImages = [
    { src: "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.18 PM.jpeg", caption: "Annual Student Trip" },
    { src: "/gallery/ganesh utsav/WhatsApp Image 2026-03-03 at 4.14.00 PM.jpeg", caption: "Cultural Events" },
    { src: "/gallery/top 3 dinner/WhatsApp Image 2026-03-03 at 4.19.30 PM.jpeg", caption: "Test Winners" },
    { src: "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.14 PM.jpeg", caption: "Nature Trips" },
];

export default function LifeAtGreenValley({ isHomePage = false }: { isHomePage?: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            sectionRef.current.querySelectorAll(".reveal-item"),
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            id="life-at-gvci"
            style={{ padding: "4rem 1.5rem", background: "rgba(10,30,20,0.5)", position: "relative" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <span className="section-label">Beyond Academics</span>
                    <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 950, letterSpacing: "-0.03em" }}>
                        Life at <span className="gold-text">Green Valley</span>
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
                    <div className="reveal-item">
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "2rem" }}>
                            {[
                                {
                                    title: "Adventure & Refreshment",
                                    text: "Annual educational and recreational trips for mental refreshment and exposure."
                                },
                                {
                                    title: "Cultural Traditions",
                                    text: "Ganesh Puja and national festivals with stage events and rituals."
                                },
                                {
                                    title: "Hall of Fame",
                                    text: "Weekly test series with awards and photos on our Hall of Fame."
                                }
                            ].map((item, i) => (
                                <li key={i} style={{ display: "flex", gap: "1.25rem" }}>
                                    <div style={{
                                        minWidth: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        background: "rgba(212,160,23,0.1)",
                                        border: "1px solid rgba(212,160,23,0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1rem",
                                        color: "var(--gold)"
                                    }}>
                                        {i === 0 ? "🚌" : i === 1 ? "🎭" : "🏆"}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "0.4rem" }}>{item.title}</h4>
                                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="reveal-item" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                style={{
                                    position: "relative",
                                    borderRadius: "16px",
                                    overflow: "hidden",
                                    aspectRatio: "1/1",
                                    border: "1px solid rgba(255,255,255,0.05)"
                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.caption}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    unoptimized
                                />
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    padding: "1rem"
                                }}>
                                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fff" }}>{img.caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isHomePage && (
                    <div style={{ textAlign: "center", marginTop: "3rem" }}>
                        <Link href="/life-at-green-valley" className="btn-gold" style={{ padding: "0.8rem 2.5rem", fontSize: "0.9rem" }}>
                            View More Moments →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
