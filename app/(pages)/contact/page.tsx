"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function ContactPage() {
    const [submitting, setSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [formData, setFormData] = useState<Record<string, any>>({});

    const validateField = (name: string, value: any) => {
        const newErrors = { ...errors };
        if (name === "mobileNumber") {
            const isValid = /^\d{10}$/.test(value.toString().replace(/\D/g, ''));
            newErrors[name] = !isValid;
        } else if (name === "email") {
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            newErrors[name] = !isValid;
        }
        setErrors(newErrors);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error)) {
            alert("❌ Please fix errors");
            return;
        }
        setSubmitting(true);
        const msg = `Green Valley Inquiry\nName: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.mobileNumber}\nEmail: ${formData.email}\nCourse: ${formData.course||"N/A"}\nMessage: ${formData.message||"N/A"}`;
        try {
            window.open(`https://wa.me/919926205683?text=${encodeURIComponent(msg)}`, "_blank");
            setShowToast(true);
            setFormData({});
            setTimeout(() => setShowToast(false), 6000);
        } catch (e) {
            alert("Error sending message");
        } finally {
            setSubmitting(false);
        }
    };

    const inputStyle = (name?: string) => ({
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: errors[name || ""] ? "2px solid #ef4444" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        padding: "0.75rem 1rem",
        color: "#fff",
        fontSize: "1rem",
        outline: "none" as const,
    });

    return (
        <main style={{ background: "var(--dark)", color: "#fff" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Contact Us</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, marginBottom: "1rem" }}>
                    We&lsquo;re <span className="gold-text">Here For You</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
                    Questions? Reach out — our team replies within 24 hours.
                </p>
            </section>

            {/* Contact Grid + Map */}
            <section style={{ padding: "3rem 1.5rem 6rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem" }} className="contact-grid">
                    {/* Left: Info */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {[
                            { icon: "📍", title: "Visit", lines: ["Green Valley CI", "Englishpura, Sehore", "MP 466001"] },
                            { icon: "📞", title: "Call", lines: ["9926205683", "9340534982", "7am-8pm"] },
                            { icon: "✉️", title: "Email", lines: [ "info@greenvalley.edu.in"] },
                        ].map((item) => (
                            <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <div style={{ fontSize: "1.5rem" }}>{item.icon}</div>
                                <div>
                                    <h4 style={{ color: "var(--gold)", fontWeight: 700, marginBottom: "0.3rem" }}>{item.title}</h4>
                                    {item.lines.map((l) => (
                                        <p key={l} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>{l}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Map */}
                    <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", height: "400px" }}>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5404889748907!2d77.08670927346146!3d23.202909272036977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff0c8f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sGreen%20Valley%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1234567890"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: "none" }}
                        ></iframe>
                        <button
                            onClick={() => window.open("https://maps.app.goo.gl/hMZ2BWEF3FVcHG1P7", "_blank")}
                            style={{
                                position: "absolute",
                                top: "1rem",
                                left: "1rem",
                                background: "var(--gold)",
                                color: "var(--dark)",
                                border: "none",
                                padding: "0.5rem 1rem",
                                borderRadius: "8px",
                                fontWeight: 700,
                                cursor: "pointer",
                                fontSize: "0.85rem",
                            }}
                        >
                            View in Maps
                        </button>
                    </div>
                </div>
            </section>

            {/* Inquiry Form */}
            <section style={{ padding: "2rem 1.5rem 6rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{textAlign: "center", marginBottom: "2.5rem"}}>
                    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
                        Send us a <span className="gold-text">Message</span>
                    </h2>
                </div>

                <div style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "24px",
                    padding: "2rem 1.5rem",
                }}>
                    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }} onSubmit={handleSubmit}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                            <div>
                                <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>First Name *</label>
                                <input type="text" name="firstName" value={formData.firstName || ""} onChange={handleInputChange} required placeholder="First" style={inputStyle()} />
                            </div>
                            <div>
                                <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Last Name *</label>
                                <input type="text" name="lastName" value={formData.lastName || ""} onChange={handleInputChange} required placeholder="Last" style={inputStyle()} />
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                            <div>
                                <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Phone {errors.mobileNumber && "(10 digits)"}</label>
                                <input type="tel" name="mobileNumber" value={formData.mobileNumber || ""} onChange={handleInputChange} required placeholder="10 digits" style={inputStyle("mobileNumber")} maxLength={10} />
                            </div>
                            <div>
                                <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Email {errors.email &&  "(Invalid)"}</label>
                                <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} required placeholder="Email" style={inputStyle("email")} />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Course Interest</label>
                            <select name="course" value={formData.course || ""} onChange={handleInputChange} style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                <option value="">Select</option>
                                <option value="PAT">PAT</option>
                                <option value="CUET">CUET(ICAR)</option>
                                <option value="BHU">BHU</option>
                                <option value="PVT">PVT</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>Message</label>
                            <textarea name="message" value={formData.message || ""} onChange={handleInputChange} rows={3} placeholder="Your query..." style={{ ...inputStyle(), resize: "vertical" }} />
                        </div>

                        <button
                            type="submit"
                            className="btn-gold"
                            disabled={submitting}
                            style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem", padding: "0.9rem", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer" }}
                        >
                            {submitting ? "Sending..." : "Send Message →"}
                        </button>
                    </form>
                </div>

                {showToast && (
                    <div style={{
                        position: "fixed",
                        bottom: "2rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(34, 161, 90, 0.95)",
                        color: "#fff",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        fontWeight: 700,
                        zIndex: 10000,
                    }}>
                        ✅ Message sent!
                    </div>
                )}
            </section>

            <style>{`
                @media (max-width: 868px) {
                    .contact-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 480px) {
                    form > div { grid-template-columns: 1fr !important; }
                }
            `}</style>

            <Footer />
        </main>
    );
}
