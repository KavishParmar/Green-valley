"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { useState } from "react";
import AdmissionTabs from "../../components/ui/AdmissionTabs";

const steps = [
    { step: "01", title: "Choose Your Course", desc: "Select from PAT, PVT, BHU, or CUET based on your goal and eligibility. Counseling available.", icon: "📚", color: "#22a15a" },
    { step: "02", title: "Eligibility Check", desc: "Verify you have completed Class 12 (PCB/PCM). Submit your marksheet for review.", icon: "✅", color: "#3b82f6" },
    { step: "03", title: "Fill Application", desc: "Complete the online/offline admission form with personal and academic details.", icon: "📝", color: "#d4a017" },
    { step: "04", title: "Document Verification", desc: "Submit Class 10 & 12 marksheets, Aadhar card, passport photo, and migration certificate.", icon: "📁", color: "#8b5cf6" },
    { step: "05", title: "Counseling & Batch Allocation", desc: "Our team will counsel you on the best course option. You will be assigned a batch and given orientation on Day 1.", icon: "🎓", color: "#10b981" },
];

export default function AdmissionPage() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section style={{ paddingTop: "130px", paddingBottom: "5rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "radial-gradient(ellipse at top, rgba(15,61,36,0.5) 0%, var(--dark) 60%)", textAlign: "center" }}>
                <span className="section-label">Join GVCI</span>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
                    Your Journey to the <span className="gold-text">Top Rank</span> Starts Here
                </h1>
                <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "560px", margin: "0 auto 2rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Simple, transparent, and student-friendly admission process. New batches starting <strong style={{ color: 'var(--gold)' }}>15th March 2026</strong>.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/enquiry-form" className="btn-gold">Apply Now →</Link>
                </div>
            </section>

            <AdmissionTabs steps={steps} wrapTabs />

            <Footer />
        </main>
    );
}
