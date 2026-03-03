"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Admission", href: "/admission" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: "all 0.4s ease",
                background: scrolled
                    ? "rgba(5, 15, 9, 0.92)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(20px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(212, 160, 23, 0.15)" : "none",
                padding: "0 1.5rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "72px",
                }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", textDecoration: "none" }}
                >
                    <div
                        style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            border: "2px solid rgba(212, 160, 23, 0.5)",
                            boxShadow: "0 0 15px rgba(212, 160, 23, 0.3)",
                        }}
                    >
                        <Image
                            src="/gallery/others/logo.jpeg"
                            alt="GVCI Logo"
                            width={44}
                            height={44}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="logo-text">
                        <div style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.01em", color: "#fff" }}>
                            Green Valley
                        </div>
                        <div style={{ fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}>
                            Coaching Institute
                        </div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }} className="desktop-nav">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    background: isActive ? "rgba(212,160,23,0.12)" : "transparent",
                                    border: "none",
                                    color: isActive ? "var(--gold)" : "rgba(255,255,255,0.8)",
                                    fontSize: "0.85rem",
                                    fontWeight: 700,
                                    padding: "0.5rem 0.75rem",
                                    borderRadius: "8px",
                                    transition: "all 0.2s ease",
                                    cursor: "pointer",
                                    position: "relative",
                                    textDecoration: "none"
                                }}
                            >
                                {link.label}
                                {isActive && (
                                    <span style={{
                                        position: "absolute",
                                        bottom: "4px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "12px",
                                        height: "2px",
                                        background: "var(--gold)",
                                        borderRadius: "2px"
                                    }} />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* MobileToggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        background: "none",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        cursor: "pointer",
                        padding: "0.5rem",
                        borderRadius: "8px",
                        display: "none",
                    }}
                    className="mobile-menu-btn"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    style={{
                        background: "rgba(5, 15, 9, 0.98)",
                        backdropFilter: "blur(20px)",
                        borderTop: "1px solid rgba(212, 160, 23, 0.15)",
                        padding: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        maxHeight: "80vh",
                        overflowY: "auto"
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                background: "none",
                                border: "1px solid rgba(255,255,255,0.06)",
                                color: pathname === link.href ? "var(--gold)" : "rgba(255,255,255,0.85)",
                                textAlign: "left",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "0.75rem 1rem",
                                borderRadius: "10px",
                                cursor: "pointer",
                                textDecoration: "none"
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                }
                @media (max-width: 480px) {
                    .logo-text { display: none; }
                }
            `}</style>
        </nav>
    );
}
