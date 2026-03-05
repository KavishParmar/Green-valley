"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Auto-scrolling carousel images
const carouselImages = [
    { src: "/gallery/Life at gvci/1 Trips.jpeg", title: "Annual Student Trips" },
    { src: "/gallery/Life at gvci/2 Cultural celebrations.jpeg", title: "Cultural Celebrations" },
    { src: "/gallery/Life at gvci/3 Class fun.jpeg", title: "Class Fun & Bonding" },
    { src: "/gallery/Life at gvci/4 nature Travel.jpeg", title: "Nature Travel Adventures" },
    { src: "/gallery/Life at gvci/5 Respecting rituals.jpeg", title: "Respecting Traditions" },
    { src: "/gallery/Life at gvci/6 Class gathering.jpeg", title: "Class Gatherings" },
    { src: "/gallery/Life at gvci/7 Win prizes.jpeg", title: "Winning & Celebrations" },
];

const galleryImages = [
    { src: "/gallery/Life at gvci/Annual student trips.jpeg", caption: "Annual Student Trip" },
    { src: "/gallery/Life at gvci/Cultural events.jpeg", caption: "Cultural Events" },
    { src: "/gallery/Life at gvci/Test winners.jpeg", caption: "Test Winners" },
    { src: "/gallery/Life at gvci/Nature trips.jpeg", caption: "Nature Trips" },
];

export default function LifeAtGreenValley({ isHomePage = false }: { isHomePage?: boolean }) {
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

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

    // Auto-scroll carousel
    useEffect(() => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const imageWidth = carousel.offsetWidth / 3; // Show 3 images at a time
        let scrollPosition = 0;

        const scrollCarousel = () => {
            scrollPosition -= 2; // Speed of scroll
            if (Math.abs(scrollPosition) >= carousel.scrollWidth / 2) {
                scrollPosition = 0; // Reset to beginning
            }
            carousel.style.transform = `translateX(${scrollPosition}px)`;
        };

        const interval = setInterval(scrollCarousel, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="life-at-gvci"
            style={{ padding: "4rem 1.5rem", background: "rgba(10,30,20,0.5)", position: "relative" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                {/* Auto-scrolling Carousel Section */}
                <div style={{ marginBottom: "6rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-label">Life at GVCI</span>
                        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 950, letterSpacing: "-0.03em" }}>
                            Moments That <span className="gold-text">Matter</span>
                        </h2>
                        <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "1rem auto 0", fontSize: "1rem" }}>
                            Experience the vibrant and dynamic culture at GVCI beyond academics
                        </p>
                    </div>

                    <div style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "400px"
                    }}>
                        <div
                            ref={carouselRef}
                            style={{
                                display: "flex",
                                gap: "1.5rem",
                                height: "100%",
                                padding: "1.5rem",
                                position: "relative",
                                willChange: "transform"
                            }}
                        >
                            {/* Duplicate carousel for seamless loop */}
                            {[...carouselImages, ...carouselImages].map((img, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        position: "relative",
                                        minWidth: "350px",
                                        height: "100%",
                                        borderRadius: "16px",
                                        overflow: "hidden",
                                        flexShrink: 0,
                                        border: "1px solid rgba(255,255,255,0.1)"
                                    }}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.title}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        unoptimized
                                    />
                                    <div style={{
                                        position: "absolute",
                                        inset: 0,
                                        background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        padding: "2rem"
                                    }}>
                                        <div>
                                            <p style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 700, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>GVCI Life</p>
                                            <h3 style={{ color: "#fff", fontSize: "1.3rem", fontWeight: 700 }}>{img.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Beyond Academics Section */}
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
                        <Link href="/life-at-gvci" className="btn-gold" style={{ padding: "0.8rem 2.5rem", fontSize: "0.9rem" }}>
                            View More Moments →
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
