"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function EnquiryFormPage() {
    const [submitting, setSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [showReference, setShowReference] = useState(false);
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [formData, setFormData] = useState<Record<string, any>>({});

    const validateField = (name: string, value: any) => {
        const newErrors = { ...errors };
        
        if (name === "mobileNumber") {
            // Only 10 digits allowed
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
            alert("❌ Please fix the validation errors");
            return;
        }

        setSubmitting(true);

        const message = `🌟 New Registration - Green Valley Coaching Institute 🌟
---
👤 First Name: ${formData.firstName}
👤 Last Name: ${formData.lastName}
📞 Mobile: ${formData.mobileNumber}
📧 Email: ${formData.email}
👥 Gender: ${formData.gender}
🎓 Applying For: ${formData.applyingFor}
🎯 Batch: ${formData.batch}
📚 Stream: ${formData.stream}
🏆 Last Qualified Exam: ${formData.lastQualifiedExam || "N/A"}
❓ Questions: ${formData.questions || "N/A"}
🕐 Best Time to Call: ${formData.callTime || "N/A"}
👥 Reference: ${formData.reference}
${formData.reference === "yes" ? `
📝 Reference Name: ${formData.referenceName || "N/A"}
📅 Reference Batch: ${formData.referenceBatch || "N/A"}
📍 Reference Address: ${formData.referenceAddress || "N/A"}
📌 Other Details: ${formData.otherDetails || "N/A"}` : ""}`;

        try {
            const waText = encodeURIComponent(message);
            window.open(`https://wa.me/919926205683?text=${waText}`, "_blank");
            
            alert("✅ Registration received! Opening WhatsApp...");
            setShowToast(true);
            setFormData({});
            setShowReference(false);
            setTimeout(() => setShowToast(false), 6000);
        } catch (error) {
            console.error("Submission error:", error);
            alert("❌ Something went wrong. Please try again.");
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

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: "140px", paddingBottom: "4rem", textAlign: "center", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.6) 0%, var(--dark) 70%)" }}>
                <span className="section-label">Registration</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 950, letterSpacing: "-0.04em", marginBottom: "1rem" }}>
                    Register In <span className="gold-text">GVCI</span>
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
                    Complete the form below and our team will contact you within 24 hours.
                </p>
            </section>

            {/* Form Section */}
            <section style={{ padding: "2rem 1rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
                <div style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "32px",
                    padding: "2rem 1.5rem",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
                }}>
                    <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={handleSubmit}>
                        {/* First Name & Last Name */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                            <div>
                                <label style={labelStyle}>First Name *</label>
                                <input type="text" name="firstName" value={formData.firstName || ""} onChange={handleInputChange} required placeholder="Enter first name" style={inputStyle("firstName")} />
                            </div>
                            <div>
                                <label style={labelStyle}>Last Name *</label>
                                <input type="text" name="lastName" value={formData.lastName || ""} onChange={handleInputChange} required placeholder="Enter last name" style={inputStyle("lastName")} />
                            </div>
                        </div>

                        {/* Mobile & Email */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
                            <div>
                                <label style={labelStyle}>Mobile Number * {errors.mobileNumber && <span style={{ color: '#ef4444' }}>(10 digits required)</span>}</label>
                                <input type="tel" name="mobileNumber" value={formData.mobileNumber || ""} onChange={handleInputChange} required placeholder="9926205683" style={inputStyle("mobileNumber")} maxLength={10} />
                            </div>
                            <div>
                                <label style={labelStyle}>Email Address * {errors.email && <span style={{ color: '#ef4444' }}>(Invalid format)</span>}</label>
                                <input type="email" name="email" value={formData.email || ""} onChange={handleInputChange} required placeholder="your@email.com" style={inputStyle("email")} />
                            </div>
                        </div>

                        {/* Gender & Applying For */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
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

                        {/* Batch & Stream */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
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

                        {/* Last Qualified Exam */}
                        <div>
                            <label style={labelStyle}>Last Qualified Exam</label>
                            <select name="lastQualifiedExam" value={formData.lastQualifiedExam || ""} onChange={handleInputChange} style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                <option value="">Select Exam</option>
                                <option value="10th Board">10th Board</option>
                                <option value="12th Board">12th Board</option>
                                <option value="Diploma">Diploma</option>
                            </select>
                        </div>

                        {/* Questions Text Box */}
                        <div>
                            <label style={labelStyle}>Any Questions or Concerns?</label>
                            <textarea name="questions" value={formData.questions || ""} onChange={handleInputChange} rows={3} placeholder="Write your query here..." style={{ ...inputStyle(), resize: "vertical" }} />
                        </div>

                        {/* Best Time to Call */}
                        <div>
                            <label style={labelStyle}>Best Time to Call</label>
                            <select name="callTime" value={formData.callTime || ""} onChange={handleInputChange} style={{ ...inputStyle(), background: "rgba(5,15,9,1)" }}>
                                <option value="">Select Time</option>
                                <option value="Morning">Morning</option>
                                <option value="Afternoon">Afternoon</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>

                        {/* Reference */}
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

                        {/* Conditional Reference Fields */}
                        {showReference && (
                            <div style={{ background: "rgba(212,160,23,0.05)", padding: "2rem", borderRadius: "16px", border: "1px solid rgba(212,160,23,0.2)" }}>
                                <h3 style={{ color: "var(--gold)", marginBottom: "1.5rem", fontSize: "1.1rem", fontWeight: 700 }}>Reference Details</h3>
                                
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
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

                                <div style={{ marginTop: "1.5rem" }}>
                                    <label style={labelStyle}>Reference Address</label>
                                    <textarea name="referenceAddress" value={formData.referenceAddress || ""} onChange={handleInputChange} rows={2} placeholder="Reference address" style={{ ...inputStyle(), resize: "vertical" }} />
                                </div>

                                <div style={{ marginTop: "1.5rem" }}>
                                    <label style={labelStyle}>Other Details</label>
                                    <textarea name="otherDetails" value={formData.otherDetails || ""} onChange={handleInputChange} rows={2} placeholder="Any other details about reference..." style={{ ...inputStyle(), resize: "vertical" }} />
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn-gold"
                            disabled={submitting}
                            style={{ width: "100%", justifyContent: "center", fontSize: "1.1rem", padding: "1.1rem", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer", marginTop: "1rem" }}
                        >
                            {submitting ? "Processing..." : "Submit Registration →"}
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
                    ✅ Success! We have received your registration.
                </div>
            )}

            <Footer />

            <style jsx global>{`
                @keyframes slideUp {
                    from { transform: translate(-50%, 100%); opacity: 0; }
                    to { transform: translate(-50%, 0); opacity: 1; }
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
                @media (max-width: 768px) {
                    main { overflow-x: hidden; }
                    form { gap: 1rem !important; }
                    form > div { gap: 1rem !important; }
                    input, select, textarea {
                        font-size: 16px !important;
                    }
                }
                @media (max-width: 480px) {
                    section { padding-left: 1rem !important; padding-right: 1rem !important; }
                    form > div {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
}

