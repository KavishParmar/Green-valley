"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
    { src: "/gallery/475057395_1033857868759469_5485895748089860725_n.jpg", caption: "GVCI Result Celebration 2024" },
    { src: "/gallery/475147427_9164457446948055_1901613602895446739_n.jpg", caption: "Classroom Session – PAT Batch" },
    { src: "/gallery/492350792_1103358641809391_594765889162382026_n.jpg", caption: "CPAT Preparation Workshop" },
    { src: "/gallery/492542904_1106057028206219_1656244274025712674_n.jpg", caption: "Annual Prize Distribution" },
    { src: "/gallery/554763882_24714336294866919_4646227966759097779_n.jpg", caption: "Student Orientation Day" },
    { src: "/gallery/555580981_24722584784042070_3562386962401332557_n.jpg", caption: "BHU Toppers Felicitation" },
    { src: "/gallery/568336113_24961608810139665_3179627786325425270_n.jpg", caption: "Group Study Session" },
    { src: "/gallery/571200999_24963140809986465_1199795824963335497_n.jpg", caption: "Scholarship Award Ceremony" },
    { src: "/gallery/597816439_25412589441708264_5019190268825203934_n.jpg", caption: "GVCI Campus – Study Hall" },
];

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Campus Life</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    Life at <span className="gold-text">Green Valley</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
                    From celebrations to serious study sessions – a glimpse into life at GVCI.
                </p>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: "4rem 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                position: "relative",
                                aspectRatio: "4/3",
                                cursor: "pointer",
                                border: "1px solid rgba(255,255,255,0.07)",
                                transition: "all 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = "translateY(-6px)";
                                el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.6)";
                                el.style.borderColor = "rgba(212,160,23,0.3)";
                                const overlay = el.querySelector(".overlay") as HTMLElement;
                                if (overlay) overlay.style.opacity = "1";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = "none";
                                el.style.borderColor = "rgba(255,255,255,0.07)";
                                const overlay = el.querySelector(".overlay") as HTMLElement;
                                if (overlay) overlay.style.opacity = "0";
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.caption}
                                fill
                                style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                            />
                            <div
                                className="overlay"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                                    opacity: 0,
                                    transition: "opacity 0.3s ease",
                                    display: "flex",
                                    alignItems: "flex-end",
                                    padding: "1.25rem",
                                }}
                            >
                                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>{img.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social CTA */}
                <div style={{ textAlign: "center", marginTop: "4rem" }}>
                    <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>See more on our social media channels</p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="https://www.instagram.com/gvci_sehore" target="_blank" rel="noopener noreferrer" className="btn-gold">Follow on Instagram →</a>
                        <a href="https://www.facebook.com/p/GREEN-Valley-Coaching-Institute-Sehore-MP-100064057958208/" target="_blank" rel="noopener noreferrer" className="btn-outline">Visit Facebook Page</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
