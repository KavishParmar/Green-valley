"use client";

export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here if needed
    };

    return (
        <section id="contact" style={{ padding: "5rem 1.5rem", background: "var(--dark)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>
                    Send a <span className="gold-text">Message</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "3rem", fontSize: "1.05rem" }}>
                    Have questions about courses, admissions or scholarships? Fill out
                    the form and our team will call you back within 24 hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.5rem" }}>
                    <div style={{ display: "grid", gap: "0.5rem" }}>
                        <label
                            htmlFor="fullName"
                            style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}
                        >
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            required
                            placeholder="Your full name"
                            style={{
                                width: "100%",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "0.85rem 1.25rem",
                                color: "#fff",
                                fontSize: "0.95rem",
                                outline: "none",
                                transition: "all 0.3s ease"
                            }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>

                    <div style={{ display: "grid", gap: "0.5rem" }}>
                        <label
                            htmlFor="phone"
                            style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}
                        >
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            style={{
                                width: "100%",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "0.85rem 1.25rem",
                                color: "#fff",
                                fontSize: "0.95rem",
                                outline: "none",
                                transition: "all 0.3s ease"
                            }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>

                    <div style={{ display: "grid", gap: "0.5rem" }}>
                        <label
                            htmlFor="email"
                            style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="example@email.com"
                            style={{
                                width: "100%",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "0.85rem 1.25rem",
                                color: "#fff",
                                fontSize: "0.95rem",
                                outline: "none",
                                transition: "all 0.3s ease"
                            }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>

                    <div style={{ display: "grid", gap: "0.5rem" }}>
                        <label
                            htmlFor="message"
                            style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            placeholder="Your query or message..."
                            style={{
                                width: "100%",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                padding: "0.85rem 1.25rem",
                                color: "#fff",
                                fontSize: "0.95rem",
                                outline: "none",
                                transition: "all 0.3s ease",
                                resize: "vertical"
                            }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-gold"
                        style={{ width: "fit-content", padding: "1rem 2.5rem", fontSize: "1rem" }}
                    >
                        Send Message →
                    </button>
                </form>
            </div>
        </section>
    );
}
