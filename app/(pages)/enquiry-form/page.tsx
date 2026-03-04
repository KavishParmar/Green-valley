"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function EnquiryFormPage() {
    const [submitting, setSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const message = `🌟 New Enquiry - Green Valley Coaching Institute 🌟
---
👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
📊 Marks: ${data.marks}%
🎓 Course: ${data.course}
💬 Message: ${data.message || "N/A"}`;

        try {
            // Alert
            alert("✅ New inquiry received! Opening WhatsApp & Email...");

            // WhatsApp
            const waText = encodeURIComponent(message);
            window.open(`https://wa.me/919302492158?text=${waText}`, "_blank");

            // Email
            const emailSubject = encodeURIComponent(`New Enquiry from ${data.name}`);
            const emailBody = encodeURIComponent(message);
            window.location.href = `mailto:kavishparmar2@gmail.com?subject=${emailSubject}&body=${emailBody}`;

            setShowToast(true);
            form.reset();
            setTimeout(() => setShowToast(false), 6000);
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: "140px", paddingBottom: "4rem", textAlign: "center", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.6) 0%, var(--dark) 70%)" }}>
                <span className="section-label">Contact Us</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, letterSpacing: "-0.04em", marginBottom: "1rem" }}>
                    Admission <span className="gold-text">Enquiry</span> Form
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
                    Please fill out the form below. Our academic counselors will get back to you within 24 hours.
                </p>
            </section>

            {/* Form Section */}
            <section style={{ padding: "4rem 1.5rem 8rem", maxWidth: "800px", margin: "0 auto" }}>
                <div style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "32px",
                    padding: "3.5rem",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
                }}>
                    <form
                        style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
                        onSubmit={handleSubmit}
                    >
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                            {[
                                { label: "Full Name", type: "text", placeholder: "Enter your full name", id: "name", name: "name" },
                                { label: "Mobile Number", type: "tel", placeholder: "+91 XXXXX XXXXX", id: "phone", name: "phone" },
                                { label: "Email Address", type: "email", placeholder: "your@email.com", id: "email", name: "email" },
                                { label: "Class 12 Percentage (%)", type: "number", placeholder: "e.g., 82.5", id: "marks", name: "marks" },
                            ].map((field) => (
                                <div key={field.id}>
                                    <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.6rem" }}>{field.label}</label>
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.name}
                                        required
                                        placeholder={field.placeholder}
                                        style={{
                                            width: "100%",
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.1)",
                                            borderRadius: "14px",
                                            padding: "1rem 1.25rem",
                                            color: "#fff",
                                            fontSize: "1rem",
                                            outline: "none",
                                            transition: "border-color 0.3s ease",
                                        }}
                                        className="form-input"
                                    />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.6rem" }}>Course Interest</label>
                            <select
                                id="course"
                                name="course"
                                required
                                style={{ width: "100%", background: "rgba(5,15,9,1)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "1rem 1.25rem", color: "#fff", fontSize: "1rem", outline: "none" }}
                            >
                                <option value="">Select a Course</option>
                                <option value="pat">PAT – Pre-Agriculture Test</option>
                                <option value="cpat">CPAT – Central Pre-Agriculture Test</option>
                                <option value="bhu">BHU – Banaras Hindu University Entrance</option>
                                <option value="cpet">CPET – Combined Pre-Science Examination</option>
                            </select>
                        </div>

                        <div>
                            <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.6rem" }}>Message / Details (Optional)</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Any specific questions or requirements..."
                                style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "1rem 1.25rem", color: "#fff", fontSize: "1rem", outline: "none", resize: "vertical" }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-gold"
                            disabled={submitting}
                            style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "1.1rem", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer", marginTop: "1rem" }}
                        >
                            {submitting ? "Processing Enquiry..." : "Submit My Application →"}
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Toast */}
            {showToast && (
                <div style={{
                    position: "fixed",
                    bottom: "3rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(34, 161, 90, 0.95)",
                    color: "#fff",
                    padding: "1.2rem 2.5rem",
                    borderRadius: "16px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    zIndex: 10000,
                    fontWeight: 800,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    animation: "slideUp 0.5s ease-out"
                }}>
                    ✅ Success! We have received your enquiry.
                </div>
            )}

            <Footer />

            <style jsx global>{`
                @keyframes slideUp {
                    from { transform: translate(-50%, 100%); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
                }
                .form-input:focus {
                    border-color: var(--gold) !important;
                    background: rgba(255,255,255,0.08) !important;
                }
                .section-label {
                    font-size: 0.85rem;
                    font-weight: 950;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    color: var(--gold);
                    margin-bottom: 1.5rem;
                    display: block;
                }
            `}</style>
        </main>
    );
}
