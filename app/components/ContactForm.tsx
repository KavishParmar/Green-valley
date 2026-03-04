"use client";
import { useState } from "react";

export default function ContactForm() {
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setSuccessMessage("");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const message = `🌟 Callback Request - Green Valley Coaching Institute 🌟
---
👤 Name: ${data.fullName}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
📊 Marks: ${data.marks ? data.marks + '%' : 'N/A'}
🎓 Course: ${data.course || 'N/A'}
💬 Message: ${data.message || "No message provided"}`;

        try {
            const waText = encodeURIComponent(message);
            window.open(`https://wa.me/919926205683?text=${waText}`, "_blank");
            setSuccessMessage("✅ We will call you back within 24 hours.");
            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
            setSuccessMessage("❌ Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "12px",
        padding: "0.85rem 1.25rem",
        color: "#fff",
        fontSize: "0.95rem",
        outline: "none",
        transition: "all 0.3s ease"
    };

    return (
        <section id="contact" style={{ padding: "5rem 1.5rem", background: "var(--dark)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>
                    Request a <span className="gold-text">Callback</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "3rem", fontSize: "1.05rem" }}>
                    Fill out the form and our team will call you back within 24 hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.5rem" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        <div style={{ display: "grid", gap: "0.5rem" }}>
                            <label htmlFor="ct-fullName" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Full Name</label>
                            <input id="ct-fullName" name="fullName" type="text" required placeholder="Your full name" style={inputStyle}
                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                            />
                        </div>
                        <div style={{ display: "grid", gap: "0.5rem" }}>
                            <label htmlFor="ct-phone" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Phone Number</label>
                            <input id="ct-phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" style={inputStyle}
                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                            />
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        <div style={{ display: "grid", gap: "0.5rem" }}>
                            <label htmlFor="ct-email" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Email</label>
                            <input id="ct-email" name="email" type="email" required placeholder="example@email.com" style={inputStyle}
                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                            />
                        </div>
                        <div style={{ display: "grid", gap: "0.5rem" }}>
                            <label htmlFor="ct-marks" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Class 12 Percentage (%)</label>
                            <input id="ct-marks" name="marks" type="number" placeholder="e.g., 82.5" style={inputStyle}
                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                            />
                        </div>
                    </div>

                    <div style={{ display: "grid", gap: "0.5rem" }}>
                        <label htmlFor="ct-course" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Course Interest</label>
                        <select id="ct-course" name="course" style={{ ...inputStyle, background: "rgba(5,15,9,1)" }}>
                            <option value="">Select a Course</option>
                            <option value="PAT">PAT – Pre-Agriculture Test</option>
                            <option value="CPAT">CPAT – Central Pre-Agriculture Test</option>
                            <option value="BHU">BHU – Banaras Hindu University</option>
                            <option value="CPET">CPET – Combined Pre-Science Examination</option>
                        </select>
                    </div>

                    <div style={{ display: "grid", gap: "0.5rem" }}>
                        <label htmlFor="ct-message" style={{ fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Message</label>
                        <textarea id="ct-message" name="message" rows={3} placeholder="Your query or message..." style={{ ...inputStyle, resize: "vertical" }}
                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-gold"
                        disabled={submitting}
                        style={{ width: "fit-content", padding: "1rem 2.5rem", fontSize: "1rem", opacity: submitting ? 0.7 : 1 }}
                    >
                        {submitting ? "Processing..." : "Request a Callback →"}
                    </button>
                    {successMessage && (
                        <p style={{ marginTop: "1rem", color: successMessage.includes("✅") ? "var(--gold)" : "#ef4444", fontSize: "0.95rem", fontWeight: 600 }}>
                            {successMessage}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
