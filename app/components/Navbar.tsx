"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  { label: "Life at GVCI", href: "/life-at-gvci" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    router.push(href, { scroll: true });
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.35s ease",
          background: scrolled ? "rgba(5, 15, 9, 0.92)" : "transparent",
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
          <button
            onClick={() => handleNavClick("/")}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer", textDecoration: "none", background: "none", border: "none", padding: 0 }}
            aria-label="Go to home"
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
                src="/gallery/All images/others/logo.jpeg"
                alt="GVCI Logo"
                width={44}
                height={44}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div className="logo-text">
              <div style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.01em", color: "#fff" }}>Green Valley</div>
              <div style={{ fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.12em", fontWeight: 600, textTransform: "uppercase" }}>
                Coaching Institute
              </div>
            </div>
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
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
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "12px",
                        height: "2px",
                        background: "var(--gold)",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </button>
              );
            })}
            <a href="tel:9926205683" className="btn-gold" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem", marginLeft: "1rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
              Call Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
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
            aria-label="Open menu"
          >
            {menuOpen ? "X" : "☰"}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
        <aside className={`mobile-panel ${menuOpen ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <Image src="/gallery/All images/others/logo.jpeg" alt="GVCI Logo" width={36} height={36} style={{ borderRadius: "10px" }} />
              <div>
                <div style={{ fontWeight: 800, color: "#fff", fontSize: "0.95rem" }}>Green Valley</div>
                <div style={{ fontSize: "0.62rem", color: "var(--gold)", letterSpacing: "0.09em", textTransform: "uppercase" }}>Coaching Institute</div>
              </div>
            </div>
            <button onClick={() => setMenuOpen(false)} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", borderRadius: "8px", width: "34px", height: "34px", cursor: "pointer" }}>X</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: pathname === link.href ? "rgba(212,160,23,0.12)" : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: pathname === link.href ? "var(--gold)" : "rgba(255,255,255,0.9)",
                  textAlign: "left",
                  fontSize: "1rem",
                  fontWeight: 600,
                  padding: "0.82rem 0.95rem",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <a href="tel:9926205683" className="btn-gold" onClick={() => setMenuOpen(false)} style={{ padding: "0.85rem 1rem", fontSize: "1rem", textAlign: "center", textDecoration: "none", marginTop: "1rem", display: "block" }}>
            Call Now
          </a>
        </aside>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          zIndex: 999,
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "var(--dark)",
            color: "var(--gold)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
            border: "1px solid rgba(212,160,23,0.3)",
            cursor: "pointer",
            opacity: scrolled ? 1 : 0,
            visibility: scrolled ? "visible" : "hidden",
            transform: scrolled ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.3s ease",
            margin: "0 auto",
          }}
          title="Scroll to Top"
        >
          ^
        </button>

        <a
          href="tel:9926205683"
          style={{
            background: "var(--gold)",
            color: "var(--dark)",
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.1rem",
            fontWeight: 800,
            boxShadow: "0 10px 25px rgba(212,160,23,0.4)",
            textDecoration: "none",
            transition: "transform 0.3s ease",
          }}
          title="Call Green Valley"
        >
          Call
        </a>
      </div>

      <style>{`
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          z-index: 1200;
        }
        .mobile-overlay.show {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: min(88vw, 380px);
          height: 100dvh;
          background: rgba(5, 15, 9, 0.98);
          backdrop-filter: blur(14px);
          border-left: 1px solid rgba(212,160,23,0.18);
          padding: 1.2rem;
          transform: translateX(105%);
          transition: transform 0.26s ease;
          overflow-y: auto;
        }
        .mobile-panel.show {
          transform: translateX(0);
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
        @media (max-width: 480px) {
          .logo-text { display: none; }
          .mobile-panel {
            width: 100vw;
            border-left: none;
          }
        }
      `}</style>
    </>
  );
}
