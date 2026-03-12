"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    const usefulLinks = [
        { label: "Get Inquiry", href: "/enquiry-form" },
        { label: "Join Now", href: "/enquiry-form" },
        { label: "Why Green Valley", href: "/features" },
        { label: "Scholarship", href: "/scholarship" },
        { label: "Gallery", href: "/gallery" },
    ];

    const courses = [
        { label: "PAT", href: "/courses" },
        { label: "PVT", href: "/courses" },
        { label: "BHU Entrance", href: "/courses" },
        { label: "CUET(ICAR)", href: "/courses" },
        { label: "ICAR", href: "/courses" },
    ];

    const admissionLinks = [
        { label: "How to Apply", href: "/admission" },
        { label: "Admission FAQ", href: "/admission" },
    ];

    return (
        <footer
            style={{
                background: "linear-gradient(180deg, var(--green-900) 0%, var(--dark) 100%)",
                borderTop: "1px solid rgba(212, 160, 23, 0.15)",
                padding: "4rem 1.5rem 2rem",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "3rem",
                        marginBottom: "3rem",
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "14px",
                                    overflow: "hidden",
                                    border: "2px solid rgba(212, 160, 23, 0.5)",
                                }}
                            >
                                <Image
                                    src="/gallery/All images/others/logo.jpeg"
                                    alt="GVCI Logo"
                                    width={48}
                                    height={48}
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#fff" }}>Green Valley</div>
                                <div style={{ fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.1em", fontWeight: 600, textTransform: "uppercase" }}>
                                    Coaching Institute
                                </div>
                            </div>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                            Since 2011, nurturing future agricultural leaders. Expert coaching for PAT, CUET(ICAR), BHU, and PVT in Sehore, MP.
                        </p>
                        {/* Social Links */}
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            {[
                                {
                                    href: "https://www.facebook.com/p/GREEN-Valley-Coaching-Institute-Sehore-MP-100064057958208/",
                                    label: "Facebook",
                                    svg: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: "https://www.instagram.com/gvci_sehore",
                                    label: "Instagram",
                                    svg: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    ),
                                },
                                {
                                    href: "https://youtube.com/@greenvalleycoachinginstitu7729",
                                    label: "YouTube",
                                    svg: (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    ),
                                },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "10px",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.6)",
                                        transition: "all 0.3s ease",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "rgba(212,160,23,0.15)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                                        (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                                        (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                    }}
                                >
                                    {social.svg}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Group (Parallel) */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "2rem" }}>
                        {/* Useful Links */}
                        <div>
                            <h4 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                                Useful Links
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {usefulLinks.map((link) => (
                                    <li key={link.href + link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "rgba(255,255,255,0.55)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                transition: "color 0.2s ease",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                            }}
                                            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--gold)"; }}
                                            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Courses */}
                        <div>
                            <h4 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                                Our Courses
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {courses.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "rgba(255,255,255,0.55)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                transition: "color 0.2s ease",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                            }}
                                            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--gold)"; }}
                                            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Admission */}
                        <div>
                            <h4 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                                Admission
                            </h4>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                {admissionLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            style={{
                                                color: "rgba(255,255,255,0.55)",
                                                textDecoration: "none",
                                                fontSize: "0.9rem",
                                                transition: "color 0.2s ease",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.5rem",
                                            }}
                                            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--gold)"; }}
                                            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: "var(--gold)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                            Contact Us
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                {
                                    label: "Englishpura, Sehore,\nMadhya Pradesh 466001",
                                    icon: "📍",
                                },
                                { label: "9926205683\n9340534982", icon: "📞" },
                                { label: "info@greenvalley.edu.in\nadmissions@greenvalley.edu.in", icon: "✉️" },
                                { label: "Mon – Sat: 7:00 AM – 8:00 PM", icon: "🕐" },
                            ].map((item) => (
                                <div key={item.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                    <span style={{ fontSize: "1rem", marginTop: "2px" }}>{item.icon}</span>
                                    <span
                                        style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.6, whiteSpace: "pre-line" }}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "1rem",
                    }}
                >
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
                        © {year} Green Valley Coaching Institute, Sehore. All rights reserved.
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
                        Empowering Future Agricultural Leaders
                    </p>
                </div>
            </div>
        </footer>
    );
}
