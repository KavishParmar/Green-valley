"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const achievements = [
    {
        name: "Award by Hon. CM",
        rank: "Excellence in Agriculture Coaching",
        college: "Shivraj Singh Chouhan",
        img: "/gallery/achievements/Award by CM Shivraj singh chouhan.png"
    },
    {
        name: "Rohit Purbiya",
        rank: "BHU AIR 38, PAT MP 5th",
        college: "2020 Batch",
        img: "/gallery/achievements/Screenshot 2026-03-03 202922.png"
    },
    {
        name: "PAT Result 2021",
        rank: "All MP 12th & 2nd Rank",
        college: "Success Story",
        img: "/gallery/achievements/Screenshot 2026-03-03 202945.png"
    },
    {
        name: "Navya Solanki",
        rank: "Indore College",
        college: "Top Performer",
        img: "/gallery/achievements/Screenshot 2026-03-03 203049.png"
    },
    {
        name: "Deepak Prajapti",
        rank: "Sehore College",
        college: "Dedicated Learner",
        img: "/gallery/achievements/Screenshot 2026-03-03 203054.png"
    },
    {
        name: "Kanika Malviya",
        rank: "Pawarkheda College",
        college: "Success Story",
        img: "/gallery/achievements/Screenshot 2026-03-03 203104.png"
    }
];

export default function AchievementsSection() {
    return (
        <section
            style={{
                padding: "4rem 1.5rem",
                background: "rgba(15,61,36,0.05)",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <span className="section-label">Success Hall of Fame</span>
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 950, letterSpacing: "-0.02em", marginBottom: "1rem" }}>
                        Our <span className="gold-text">Achievements</span>
                    </h2>
                </div>

                <div className="marquee-container" style={{ width: "100%", overflow: "hidden" }}>
                    <div className="marquee-content-horizontal" style={{ display: "flex", gap: "1.5rem", width: "max-content" }}>
                        {[...achievements, ...achievements].map((item, idx) => (
                            <div
                                key={idx}
                                className="achievement-card-minimal"
                                style={{
                                    width: "220px",
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    transition: "all 0.4s ease",
                                    cursor: "pointer",
                                    flexShrink: 0
                                }}
                            >
                                <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        unoptimized
                                    />
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)"
                                    }} />
                                </div>
                                <div style={{ padding: "1rem" }}>
                                    <h3 style={{ fontSize: "1rem", fontWeight: 900, color: "#fff", marginBottom: "0.2rem" }}>{item.name}</h3>
                                    <div style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.75rem" }}>{item.rank}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <Link href="/gallery" className="btn-gold" style={{ padding: "0.8rem 2.5rem", fontSize: "0.9rem" }}>
                        View Full Gallery →
                    </Link>
                </div>
            </div>

            <style jsx>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-content-horizontal {
                    animation: scrollLeft 30s linear infinite;
                }
                .achievement-card-minimal:hover {
                    transform: translateY(-8px);
                    border-color: var(--gold) !important;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
                }
                .section-label {
                    font-size: 0.75rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    color: var(--gold);
                    margin-bottom: 1rem;
                    display: block;
                }
            `}</style>
        </section>
    );
}
