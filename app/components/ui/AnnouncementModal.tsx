"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AnnouncementModal() {
    const [showAnnouncement, setShowAnnouncement] = useState(true);

    const closeAnnouncement = () => {
        setShowAnnouncement(false);
    };

    useEffect(() => {
        const prev = document.body.style.overflow;
        if (showAnnouncement) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = prev;
        }
        return () => {
            document.body.style.overflow = prev;
        };
    }, [showAnnouncement]);

    if (!showAnnouncement) return null;

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.58)", pointerEvents: "auto" }}>
            <div
                style={{
                    width: "min(92vw, 720px)",
                    maxHeight: "90vh",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <div style={{ position: "relative", width: "100%", maxHeight: "90vh", borderRadius: "14px", overflow: "hidden", boxShadow: "0 24px 70px rgba(0,0,0,0.55)" }}>
                    <Image
                        src="/Announcement.png"
                        alt="Announcement"
                        width={1280}
                        height={1600}
                        priority
                        sizes="(max-width: 768px) 92vw, 720px"
                        style={{ width: "100%", height: "auto", maxHeight: "90vh", objectFit: "contain", display: "block" }}
                    />
                    <button
                        aria-label="Close announcement"
                        onClick={closeAnnouncement}
                        style={{ position: "absolute", top: "0.5rem", right: "0.5rem", width: "2rem", height: "2rem", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.7)", background: "rgba(5,15,9,0.75)", color: "#fff", fontSize: "1.2rem", fontWeight: 700, lineHeight: 1, cursor: "pointer" }}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
}
