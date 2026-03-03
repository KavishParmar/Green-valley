"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "4rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Get In Touch</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    We&lsquo;re <span className="gold-text">Here For You</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
                    Questions? Admissions? Scholarship queries? Reach out — our team replies within 24 hours.
                </p>
            </section>

            {/* Contact grid */}
            <section style={{ padding: "5rem 1.5rem 7rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }} className="contact-grid">
                    {/* Info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {[
                            {
                                icon: "📍",
                                title: "Visit Us",
                                lines: ["Green Valley Coaching Institute", "Englishpura, Sehore", "Madhya Pradesh – 466001"],
                            },
                            {
                                icon: "📞",
                                title: "Call Us",
                                lines: ["+91 94254 23001", "+91 98271 56840", "Mon–Sat: 7:00 AM – 8:00 PM"],
                            },
                            {
                                icon: "✉️",
                                title: "Email Us",
                                lines: ["info@greenvalley.edu.in", "admissions@greenvalley.edu.in"],
                            },
                            {
                                icon: "🕐",
                                title: "Office Hours",
                                lines: ["Monday – Saturday: 7:00 AM – 8:00 PM", "Sunday: 10:00 AM – 2:00 PM (Inquiry only)"],
                            },
                        ].map((item) => (
                            <div key={item.title} className="card" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                                <div style={{ fontSize: "1.75rem", flexShrink: 0 }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</h4>
                                    {item.lines.map((l) => (
                                        <p key={l} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{l}</p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Social */}
                        <div className="card">
                            <h4 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "1rem" }}>Follow GVCI</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                {[
                                    { label: "Facebook", url: "https://www.facebook.com/p/GREEN-Valley-Coaching-Institute-Sehore-MP-100064057958208/", color: "#1877f2" },
                                    { label: "Instagram @gvci_sehore", url: "https://www.instagram.com/gvci_sehore", color: "#e1306c" },
                                    { label: "YouTube Channel", url: "https://youtube.com/@greenvalleycoachinginstitu7729", color: "#ff0000" },
                                ].map((s) => (
                                    <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem", padding: "0.6rem 0.85rem", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.2s ease" }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = s.color; (e.currentTarget as HTMLElement).style.color = s.color; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                                    >
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form + Map */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {/* Map Embed */}
                        <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8!2d77.0867!3d23.2029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzEwLjQiTiA3N8KwMDUnMTIuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="260"
                                style={{ border: "none", display: "block" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GVCI Location - Englishpura, Sehore, MP"
                            />
                        </div>

                        {/* Contact Form */}
                        <form
                            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
                            onSubmit={(e) => { e.preventDefault(); alert("Message sent! We will get back to you within 24 hours."); }}
                        >
                            <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "#fff", marginBottom: "0.25rem" }}>Send a Message</h3>
                            {[
                                { label: "Your Name", type: "text", id: "cname", placeholder: "Full Name" },
                                { label: "Phone Number", type: "tel", id: "cphone", placeholder: "+91 XXXXX XXXXX" },
                                { label: "Email", type: "email", id: "cemail", placeholder: "example@email.com" },
                            ].map((f) => (
                                <div key={f.id}>
                                    <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{f.label}</label>
                                    <input
                                        type={f.type}
                                        id={f.id}
                                        placeholder={f.placeholder}
                                        required
                                        style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "0.75rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none" }}
                                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--gold)"; }}
                                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
                                    />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Message</label>
                                <textarea
                                    id="cmessage"
                                    rows={4}
                                    placeholder="Your query or message..."
                                    style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "0.75rem 1rem", color: "#fff", fontSize: "0.9rem", outline: "none", resize: "vertical" }}
                                />
                            </div>
                            <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

            <Footer />
        </main>
    );
}
