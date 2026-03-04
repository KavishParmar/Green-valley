"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

const allImages = [
    // --- TRIPS (Priority) ---
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.18 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.19 PM (1).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.19 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.21 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.24 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.26 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.27 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.28 PM (1).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.28 PM (2).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/25/WhatsApp Image 2026-03-03 at 4.43.28 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t22/WhatsApp Image 2026-03-03 at 4.09.43 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t22/WhatsApp Image 2026-03-03 at 4.09.44 PM (1).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t22/WhatsApp Image 2026-03-03 at 4.09.44 PM (2).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t22/WhatsApp Image 2026-03-03 at 4.09.44 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t22/WhatsApp Image 2026-03-03 at 4.09.45 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t23/WhatsApp Image 2026-03-03 at 4.17.12 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t23/WhatsApp Image 2026-03-03 at 4.17.27 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t23/WhatsApp Image 2026-03-03 at 4.18.15 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.14 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.19 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.20 PM (1).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.20 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.22 PM (2).jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.25 PM.jpeg", "folder": "Trips" },
    { "src": "/gallery/travel/t24/WhatsApp Image 2026-03-03 at 4.30.30 PM.jpeg", "folder": "Trips" },

    // --- FESTIVALS & EVENTS ---
    { "src": "/gallery/ganesh utsav/g22/WhatsApp Image 2026-03-03 at 4.07.43 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g22/WhatsApp Image 2026-03-03 at 4.08.21 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g23/WhatsApp Image 2026-03-03 at 4.14.12 PM (1).jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g23/WhatsApp Image 2026-03-03 at 4.14.12 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g23/WhatsApp Image 2026-03-03 at 4.14.13 PM (1).jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g23/WhatsApp Image 2026-03-03 at 4.14.13 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g23/WhatsApp Image 2026-03-03 at 4.15.07 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g24/WhatsApp Image 2026-03-03 at 4.26.25 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/ganesh utsav/g24/WhatsApp Image 2026-03-03 at 4.26.26 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/national festivals/WhatsApp Image 2026-03-03 at 4.02.22 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/national festivals/WhatsApp Image 2026-03-03 at 4.02.23 PM (1).jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/national festivals/WhatsApp Image 2026-03-03 at 4.02.23 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/seminar/WhatsApp Image 2026-03-03 at 4.22.48 PM (1).jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/seminar/WhatsApp Image 2026-03-03 at 4.22.48 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/seminar/WhatsApp Image 2026-03-03 at 4.22.49 PM (1).jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/batch/b23/WhatsApp Image 2026-03-03 at 4.11.46 PM.jpeg", "folder": "Festivals & Events" },
    { "src": "/gallery/classes/WhatsApp Image 2026-03-03 at 4.20.53 PM (1).jpeg", "folder": "Festivals & Events" },

    // --- TEST WINNERS & AWARDS ---
    { "src": "/gallery/achievements/Screenshot 2026-03-03 202922.png", "folder": "Test Winners & Awards" },
    { "src": "/gallery/achievements/Screenshot 2026-03-03 202945.png", "folder": "Test Winners & Awards" },
    { "src": "/gallery/achievements/Screenshot 2026-03-03 203049.png", "folder": "Test Winners & Awards" },
    { "src": "/gallery/achievements/Screenshot 2026-03-03 203054.png", "folder": "Test Winners & Awards" },
    { "src": "/gallery/achievements/Screenshot 2026-03-03 203229.png", "folder": "Test Winners & Awards" },
    { "src": "/gallery/top 3 dinner/WhatsApp Image 2026-03-03 at 4.19.30 PM.jpeg", "folder": "Test Winners & Awards" },
    { "src": "/gallery/top 3 dinner/WhatsApp Image 2026-03-03 at 4.19.45 PM.jpeg", "folder": "Test Winners & Awards" },
    { "src": "/gallery/top 3 dinner/WhatsApp Image 2026-03-03 at 4.20.03 PM.jpeg", "folder": "Test Winners & Awards" },
    { "src": "/gallery/posters/475147427_9164457446948055_1901613602895446739_n.jpg", "folder": "Test Winners & Awards" },
    { "src": "/gallery/posters/492542904_1106057028206219_1656244274025712674_n.jpg", "folder": "Test Winners & Awards" },
];
const experienceCategories = [
    "Trips",
    "Festivals & Events",
    "Test Winners & Awards"
];

export default function GalleryPage() {
    const [activePrimaryTab, setActivePrimaryTab] = useState("All Photos");
    const [activeSubCategory, setActiveSubCategory] = useState("Traveling");

    const displayedImages = activePrimaryTab === "All Photos"
        ? allImages
        : allImages.filter(img => img.folder === activeSubCategory);

    return (
        <main style={{ background: "var(--dark)", minHeight: "100vh" }}>
            <Navbar />

            <section style={{ paddingTop: "130px", paddingBottom: "2rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", textAlign: "center" }}>
                <span className="section-label">Campus Life</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, marginBottom: "1.25rem" }}>
                    Life at <span className="gold-text">GVCI</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
                    From celebrations to serious study sessions – a glimpse into life at Green Valley Coaching Institute.
                </p>
            </section>

            <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 2rem" }}>
                {/* Primary Tabs */}
                <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                    <button
                        onClick={() => setActivePrimaryTab("All Photos")}
                        style={{
                            padding: "0.75rem 2rem",
                            borderRadius: "60px",
                            fontWeight: 800,
                            background: activePrimaryTab === "All Photos" ? "var(--gold)" : "transparent",
                            color: activePrimaryTab === "All Photos" ? "var(--dark)" : "rgba(255,255,255,0.7)",
                            border: `1px solid ${activePrimaryTab === "All Photos" ? "var(--gold)" : "rgba(255,255,255,0.2)"}`,
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        All Photos
                    </button>
                    <button
                        onClick={() => setActivePrimaryTab("View By Experience")}
                        style={{
                            padding: "0.75rem 2rem",
                            borderRadius: "60px",
                            fontWeight: 800,
                            background: activePrimaryTab === "View By Experience" ? "var(--gold)" : "transparent",
                            color: activePrimaryTab === "View By Experience" ? "var(--dark)" : "rgba(255,255,255,0.7)",
                            border: `1px solid ${activePrimaryTab === "View By Experience" ? "var(--gold)" : "rgba(255,255,255,0.2)"}`,
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    >
                        View By Experience
                    </button>
                </div>

                {/* Secondary Filters (Experience Categories) */}
                {activePrimaryTab === "View By Experience" && (
                    <div
                        className="hide-scrollbar"
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            flexWrap: "nowrap",
                            gap: "0.75rem",
                            marginBottom: "3rem",
                            overflowX: "auto",
                            paddingBottom: "1rem",
                            WebkitOverflowScrolling: "touch"
                        }}
                    >
                        {experienceCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveSubCategory(cat)}
                                style={{
                                    padding: "0.6rem 1.5rem",
                                    borderRadius: "40px",
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    background: activeSubCategory === cat ? "rgba(212,160,23,0.15)" : "rgba(255,255,255,0.03)",
                                    color: activeSubCategory === cat ? "var(--gold)" : "rgba(255,255,255,0.6)",
                                    border: `1px solid ${activeSubCategory === cat ? "var(--gold)" : "rgba(255,255,255,0.1)"}`,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    whiteSpace: "nowrap",
                                    flexShrink: 0
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Gallery Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                    gap: "1.25rem",
                    paddingBottom: "6rem",
                    marginTop: activePrimaryTab === "All Photos" ? "3rem" : "1rem"
                }}>
                    {displayedImages.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                position: "relative",
                                aspectRatio: "4/3",
                                cursor: "pointer",
                                border: "1px solid rgba(255,255,255,0.05)",
                                transition: "all 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget;
                                el.style.transform = "translateY(-6px)";
                                el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
                                el.style.borderColor = "rgba(212,160,23,0.3)";
                                (el.querySelector('.overlay') as HTMLElement).style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget;
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = "none";
                                el.style.borderColor = "rgba(255,255,255,0.05)";
                                (el.querySelector('.overlay') as HTMLElement).style.opacity = '0';
                            }}
                        >
                            {/* Force Next.js Image to unoptimized temporarily so many local images load smoothly without freezing local dev */}
                            <Image
                                src={img.src}
                                alt={`${img.folder} photo`}
                                fill
                                unoptimized
                                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="overlay" style={{
                                position: "absolute",
                                bottom: 0, left: 0, right: 0,
                                padding: "1.5rem 1rem 1rem",
                                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)",
                                opacity: 0,
                                transition: "opacity 0.3s ease",
                            }}>
                                <span style={{ color: "var(--gold)", fontSize: "0.85rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                    {img.folder}
                                </span>
                            </div>
                        </div>
                    ))}
                    {displayedImages.length === 0 && (
                        <div style={{ color: "rgba(255,255,255,0.5)", gridColumn: "1 / -1", textAlign: "center", padding: "4rem" }}>
                            No images found in this category.
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
