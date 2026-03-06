"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function ContactPage() {
    const [submitting, setSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showReference, setShowReference] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [formData, setFormData] = useState<Record<string, string>>({});

    const validateField = (name: string, value: string) => {
        const newErrors = { ...errors };

        if (name === "mobileNumber") {
            const isValid = /^\d{10}$/.test(value.toString().replace(/\D/g, ""));
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

        if (Object.values(errors).some((error) => error)) {
            alert("Please fix validation errors");
            return;
        }

        setSubmitting(true);

        const message = `New Registration - Green Valley Coaching Institute\n\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nMobile: ${formData.mobileNumber}\nEmail: ${formData.email}\nGender: ${formData.gender}\nApplying For: ${formData.applyingFor}\nBatch: ${formData.batch}\nStream: ${formData.stream}\nLast Qualified Exam: ${formData.lastQualifiedExam || "N/A"}\nQuestions: ${formData.questions || "N/A"}\nBest Time to Call: ${formData.callTime || "N/A"}\nReference: ${formData.reference}${formData.reference === "yes" ? `\nReference Name: ${formData.referenceName || "N/A"}\nReference Batch: ${formData.referenceBatch || "N/A"}\nReference Address: ${formData.referenceAddress || "N/A"}\nOther Details: ${formData.otherDetails || "N/A"}` : ""}`;

        try {
            window.open(`https://wa.me/919926205683?text=${encodeURIComponent(message)}`, "_blank");
            setShowToast(true);
            setFormData({});
            setShowReference(false);
            setTimeout(() => setShowToast(false), 6000);
        } finally {
            setSubmitting(false);
        }
    };

    const inputStyle = (name?: string) => ({
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: errors[name || ""] ? "2px solid #ef4444" : "1px solid rgba(255,255,255,0.1)",
        borderRadius: "14px",
        padding: "1rem 1.25rem",
        color: "#fff",
        fontSize: "1rem",
        outline: "none" as const,
        transition: "border-color 0.3s ease",
    });

    const labelStyle = {
        display: "block" as const,
        color: "rgba(255,255,255,0.7)",
        fontSize: "0.875rem",
        fontWeight: 600 as const,
        marginBottom: "0.6rem",
    };

    const iconWrap = { width: "30px", height: "30px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--gold)" } as const;

    return (
        <main style={{ background: "var(--dark)", color: "#fff" }}>
            <Navbar />

            <section style={{ paddingTop: "130px", paddingBottom: "3rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Contact Us</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, marginBottom: "1rem" }}>
                    We&lsquo;re <span className="gold-text">Here For You</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto", fontSize: "1.05rem" }}>
                    Questions? Reach out and our team replies quickly.
                </p>
            </section>

            <section style={{ padding: "2rem 1.5rem 4rem", maxWidth: "1280px", margin: "0 auto" }}>
                <div className="contact-info-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                    {[
                        { key: "visit", title: "Visit", lines: ["Green Valley CI", "Englishpura, Sehore", "MP 466001"] },
                        { key: "call", title: "Call", lines: ["9926205683", "9340534982", "7am - 8pm"] },
                        { key: "email", title: "Email", lines: ["info@greenvalley.edu.in"] },
                    ].map((item) => (
                        <div key={item.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.2rem", textAlign: "center", boxShadow: "0 10px 24px rgba(0,0,0,0.28)" }}>
                            <div style={{ marginBottom: "0.5rem" }}>
                                {item.key === "visit" && (
                                    <span style={iconWrap}>
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
                                            <circle cx="12" cy="10" r="2.5" />
                                        </svg>
                                    </span>
                                )}
                                {item.key === "call" && (
                                    <span style={iconWrap}>
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 3 .3.8.1 1.7-.5 2.3l-1.2 1.2a16 16 0 0 0 5.6 5.6l1.2-1.2c.6-.6 1.5-.8 2.3-.5 1 .4 2 .7 3 .8A2 2 0 0 1 22 16.9Z" />
                                        </svg>
                                    </span>
                                )}
                                {item.key === "email" && (
                                    <span style={iconWrap}>
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="5" width="18" height="14" rx="2" />
                                            <path d="m4 7 8 6 8-6" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                            <h4 style={{ color: "var(--gold)", fontWeight: 800, marginBottom: "0.3rem" }}>{item.title}</h4>
                            {item.lines.map((l) => (
                                <p key={l} style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.88rem" }}>{l}</p>
                            ))}
                        </div>
                    ))}
                </div>

                <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", height: "360px" }}>
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        src="https://www.google.com/maps?q=Green+Valley+Coaching+Institute+Sehore&output=embed"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: "none" }}
                    />
                </div>
            </section>

            <section style={{ padding: "1rem 1rem 5rem", maxWidth: "1000px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, marginBottom: "0.5rem" }}>
                        Inquiry <span className="gold-text">Form</span>
                    </h2>
                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "2rem 1.2rem" }}>
                    <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={handleSubmit}>
                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>First Name *</label>
                                <input type="text" name="firstName" value={formData.firstName || ""} onChange={handleInputChange} required placeholder="Enter first name" style={inputStyle("firstName")} />
                            </div>
                            <div>
                                <label style={labelStyle}>Last Name *</label>
                                <input type="text" name="lastName" value={formData.lastName || ""} onChange={handleInputChange} required placeholder="Enter last name" style={inputStyle("lastName")} />
                            </div>
                        </div>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>Mobile Number * {errors.mobileNumber && <span style={{ color: "#ef4444" }}>(10 digits required)</span>}</label>
                                <input type="tel" name="mobileNumber" value={formData.mobileNumber || ""} onChange={handleInputChange} required placeholder="9926205683" style={inputStyle("mobileNumber")} maxLength={10} />
                            </div>
                            <div>
                                <label style={labelStyle}>Email Address * {errors.email && <span style={{ color: "#ef4444" }}>(Invalid format)</span>}</label>
                                <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} required placeholder="your@email.com" style={inputStyle("email")} />
                            </div>
                        </div>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>Gender *</label>
                                <select name="gender" value={formData.gender || ""} onChange={handleInputChange} required style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label style={labelStyle}>Applying For *</label>
                                <select name="applyingFor" value={formData.applyingFor || ""} onChange={handleInputChange} required style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                    <option value="">Select Option</option>
                                    <option value="offline">Offline</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
                            <div>
                                <label style={labelStyle}>Batch *</label>
                                <select name="batch" value={formData.batch || ""} onChange={handleInputChange} required style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                    <option value="">Select Batch</option>
                                    <option value="Foundation Course">Foundation Course</option>
                                    <option value="Regular Course">Regular Course</option>
                                    <option value="Droppers Course">Droppers Course</option>
                                    <option value="Capsule Course">Capsule Course</option>
                                    <option value="PCBM Special">PCBM Special</option>
                                    <option value="Crash Course">Crash Course</option>
                                </select>
                            </div>
                            <div>
                                <label style={labelStyle}>Stream *</label>
                                <select name="stream" value={formData.stream || ""} onChange={handleInputChange} required style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                    <option value="">Select Stream</option>
                                    <option value="PAT">PAT</option>
                                    <option value="CUET(ICAR)">CUET(ICAR)</option>
                                    <option value="BHU">BHU</option>
                                    <option value="PVT">PVT</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label style={labelStyle}>Last Qualified Exam</label>
                            <select name="lastQualifiedExam" value={formData.lastQualifiedExam || ""} onChange={handleInputChange} style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                <option value="">Select Exam</option>
                                <option value="10th Board">10th Board</option>
                                <option value="12th Board">12th Board</option>
                                <option value="Diploma">Diploma</option>
                            </select>
                        </div>

                        <div>
                            <label style={labelStyle}>Any Questions or Concerns?</label>
                            <textarea name="questions" value={formData.questions || ""} onChange={handleInputChange} rows={3} placeholder="Write your query here..." style={{ ...inputStyle(), resize: "vertical" }} />
                        </div>

                        <div>
                            <label style={labelStyle}>Best Time to Call</label>
                            <select name="callTime" value={formData.callTime || ""} onChange={handleInputChange} style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                <option value="">Select Time</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>

                        <div>
                            <label style={labelStyle}>Reference *</label>
                            <select
                                name="reference"
                                value={formData.reference || ""}
                                onChange={(e) => {
                                    handleInputChange(e);
                                    setShowReference(e.target.value === "yes");
                                }}
                                required
                                style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}
                            >
                                <option value="">Select Option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        {showReference && (
                            <div className="reference-box" style={{ background: "rgba(212,160,23,0.05)", padding: "1.1rem", borderRadius: "16px", border: "1px solid rgba(212,160,23,0.2)" }}>
                                <h3 style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: "1rem", fontWeight: 700 }}>Reference Details</h3>

                                <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                                    <div>
                                        <label style={labelStyle}>Reference Name</label>
                                        <input type="text" name="referenceName" value={formData.referenceName || ""} onChange={handleInputChange} placeholder="Reference Name" style={inputStyle()} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Reference Batch</label>
                                        <select name="referenceBatch" value={formData.referenceBatch || ""} onChange={handleInputChange} style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                            <option value="">Select Batch</option>
                                            <option value="2011">2011</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2014-2024">2014 to 2024</option>
                                            <option value="2025">2025</option>
                                            <option value="not sure">Not sure</option>
                                        </select>
                                    </div>
                                </div>

                                <div style={{ marginTop: "1rem" }}>
                                    <label style={labelStyle}>Reference Address</label>
                                    <textarea name="referenceAddress" value={formData.referenceAddress || ""} onChange={handleInputChange} rows={2} placeholder="Reference address" style={{ ...inputStyle(), resize: "vertical" }} />
                                </div>

                                <div style={{ marginTop: "1rem" }}>
                                    <label style={labelStyle}>Other Details</label>
                                    <textarea name="otherDetails" value={formData.otherDetails || ""} onChange={handleInputChange} rows={2} placeholder="Any other details about reference..." style={{ ...inputStyle(), resize: "vertical" }} />
                                </div>
                            </div>
                        )}

                        <button type="submit" className="btn-gold" disabled={submitting} style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer", marginTop: "0.4rem" }}>
                            {submitting ? "Processing..." : "Submit Registration ->"}
                        </button>
                    </form>
                </div>
            </section>

            {showToast && (
                <div style={{ position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)", background: "rgba(34, 161, 90, 0.95)", color: "#fff", padding: "1rem 2rem", borderRadius: "12px", fontWeight: 700, zIndex: 10000 }}>
                    Message sent successfully
                </div>
            )}

            <style>{`
                @media (max-width: 960px) {
                    .contact-info-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 768px) {
                    .form-grid-2 { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 480px) {
                    .reference-box { padding: 0.8rem !important; }
                    input, select, textarea { font-size: 16px !important; }
                }
            `}</style>

            <Footer />
        </main>
    );
}
