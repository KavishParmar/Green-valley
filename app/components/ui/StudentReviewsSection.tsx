"use client";

import React from 'react';

const reviews = [
    {
        name: "Abhishek Rajput",
        rating: 5,
        text: "The weekly test rankings, awards, and festival events kept me motivated throughout the year. It never felt like just a typical coaching center.",
    },
    {
        name: "Priyanka Sharma",
        rating: 5,
        text: "The teachers not only cleared my doubts but also guided me in career decisions and kept my confidence high during low-scoring phases.",
    },
    {
        name: "Deepak Choudhary",
        rating: 5,
        text: "The library facilities and 24/7 access were crucial for my preparation. I could study peacefully without any distractions.",
    },
    {
        name: "Anjali Verma",
        rating: 5,
        text: "Green Valley's study material is the best in the industry. It's concise, covering all previous 24 years of exam questions.",
    },
    {
        name: "Rahul Meena",
        rating: 5,
        text: "The Saturday doubt classes helped me clear all my conceptual hurdles. The teachers are incredibly patient.",
    },
    {
        name: "Sandeep Patidar",
        rating: 5,
        text: "Coming from a rural background, I was worried about the competition. But the GVCI Guardian System provided me personalized mentorship.",
    },
    {
        name: "Karan Singh",
        rating: 5,
        text: "The focus on 'Concept First Teaching' made even the toughest science topics easy to visualize and understand.",
    },
    {
        name: "Megha Solanki",
        rating: 5,
        text: "The topper meets over dinner were a great initiative. It motivated me to rank in the top 3 during the weekly tests.",
    },
    {
        name: "Arjun Panwar",
        rating: 5,
        text: "The most awarded institute for a reason. Honored to have studied under such experienced faculty recognized statewide.",
    },
];

const StudentReviewsSection = () => {
    return (
        <section style={{
            padding: "5rem 1.5rem",
            background: "linear-gradient(180deg, var(--dark) 0%, rgba(13, 20, 16, 0.95) 100%)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Background elements to match GVCI theme */}
            <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(212, 160, 23, 0.05) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
                pointerEvents: "none"
            }} />
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(74, 160, 111, 0.05) 0%, transparent 70%)",
                transform: "translate(-30%, 30%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }} className="animate-in">
                    <h2 style={{
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 800,
                        color: "#fff",
                        lineHeight: 1.2,
                        marginBottom: "1rem"
                    }}>
                        What Our <span style={{ color: "var(--gold)" }}>Students Say</span>
                    </h2>
                    <p style={{
                        fontSize: "1.1rem",
                        color: "rgba(255,255,255,0.7)",
                        maxWidth: "600px",
                        margin: "0 auto",
                        lineHeight: 1.6
                    }}>
                        Real experiences from learners of Green Valley Coaching Institute.
                    </p>
                </div>

                {/* Marquee Container */}
                <div style={{
                    width: "100%",
                    overflow: "hidden",
                    position: "relative",
                    marginBottom: "3.5rem"
                }}>
                    <div className="marquee-content" style={{
                        display: "flex",
                        gap: "2rem",
                        width: "max-content",
                        padding: "1rem 0"
                    }}>
                        {/* Duplicate reviews array for infinite scroll effect */}
                        {[...reviews, ...reviews].map((review, index) => (
                            <div
                                key={index}
                                className="card-premium"
                                style={{
                                    width: "320px",
                                    flexShrink: 0,
                                    padding: "1.6rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.25rem",
                                    borderRadius: "16px",
                                    background: "rgba(255,255,255,0.045)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "0 16px 34px rgba(0,0,0,0.33)"
                                }}
                            >
                                {/* Stars */}
                                <div style={{ display: "flex", gap: "0.25rem" }}>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} style={{ color: "var(--gold)", fontSize: "1.1rem" }}>★</span>
                                    ))}
                                </div>

                                {/* Text */}
                                <p style={{
                                    color: "rgba(255,255,255,0.75)",
                                    fontSize: "0.9rem",
                                    lineHeight: 1.6,
                                    fontStyle: "italic",
                                    flexGrow: 1
                                }}>
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    borderTop: "1px solid rgba(255,255,255,0.1)",
                                    paddingTop: "1rem"
                                }}>
                                    <div style={{
                                        width: "36px",
                                        height: "36px",
                                        borderRadius: "50%",
                                        background: "rgba(212,160,23,0.15)",
                                        border: "1px solid rgba(212,160,23,0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--gold)",
                                        fontWeight: "bold",
                                        fontSize: "1rem"
                                    }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{review.name}</div>
                                        <div style={{ color: "var(--green-400)", fontSize: "0.75rem", fontWeight: 500 }}>Student</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for auto-scroll marquee */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes scrollLeft {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-content {
                        animation: scrollLeft 27s linear infinite;
                    }
                    @media (max-width: 640px) {
                        .marquee-content > div {
                            width: 280px !important;
                            padding: 1.25rem !important;
                        }
                    }
                `}} />

                {/* Google CTA */}
                <div style={{ textAlign: "center" }} className="animate-in">
                    <a
                        href="https://g.page/green-valley-coaching-institute-sehore/review"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            textDecoration: "none",
                            padding: "1rem 2.5rem",
                            fontSize: "1.05rem",
                        }}
                    >
                        Read More Reviews on Google
                        <span style={{ fontSize: "1.2rem" }}>↗</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default StudentReviewsSection;
