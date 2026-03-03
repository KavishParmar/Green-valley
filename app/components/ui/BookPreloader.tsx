"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function BookPreloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Timer to fade out preloader (2.8 seconds)
    const timeout = setTimeout(() => {
      gsap.to(".preloader-container", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setIsVisible(false);
          onComplete();
        },
      });
    }, 2800);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="preloader-container">
      <div className="book-wrapper">
        <div className="book">
          <div className="book-back">
            <Image
              src="/gallery/475057395_1033857868759469_5485895748089860725_n.jpg"
              alt="GVCI"
              fill
              style={{ objectFit: 'cover', opacity: 0.8 }}
            />
          </div>

          <div className="book-page">
            <div className="page-side page-front">
              <div className="page-content">
                <span className="course-code">CPET</span>
                <span className="course-label">Combined Pre-Science</span>
              </div>
            </div>
            <div className="page-side page-back"></div>
          </div>

          <div className="book-page">
            <div className="page-side page-front">
              <div className="page-content">
                <span className="course-code">BHU</span>
                <span className="course-label">UET Preparation</span>
              </div>
            </div>
            <div className="page-side page-back"></div>
          </div>

          <div className="book-page">
            <div className="page-side page-front">
              <div className="page-content">
                <span className="course-code">CPAT</span>
                <span className="course-label">Science Entrance</span>
              </div>
            </div>
            <div className="page-side page-back"></div>
          </div>

          <div className="book-page">
            <div className="page-side page-front">
              <div className="page-content">
                <span className="course-code">PAT</span>
                <span className="course-label">Agriculture Test</span>
              </div>
            </div>
            <div className="page-side page-back"></div>
          </div>

          <div className="book-cover">
            <div className="page-side page-front cover-design">
              <div className="cover-content">
                <span className="logo-text">Green</span>
                <span className="logo-subtext">Valley</span>
              </div>
            </div>
            <div className="page-side page-back cover-back-inner"></div>
          </div>
        </div>
      </div>

      <div className="loading-text">Nurturing Excellence...</div>

      <style jsx>{`
        .preloader-container {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #050f09;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .book-wrapper {
          perspective: 1000px;
          margin-bottom: 2rem;
        }

        .book {
          width: 150px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateY(-20deg);
          animation: bookFloat 3s ease-in-out infinite;
        }

        @keyframes bookFloat {
          0%, 100% { transform: rotateX(20deg) rotateY(-20deg) translateY(0); }
          50% { transform: rotateX(20deg) rotateY(-20deg) translateY(-15px); }
        }

        .book-cover, .book-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #d4a017;
          border-radius: 4px 12px 12px 4px;
        }

        .book-cover {
          background: linear-gradient(135deg, #153d24 0%, #0a1f12 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          box-shadow: 10px 10px 25px rgba(0,0,0,0.5);
        }

        .book-back {
          background: #0a1f12;
          transform: translateZ(-2px);
          z-index: 1;
          overflow: hidden;
        }

        .cover-content {
           display: flex;
           flex-direction: column;
           align-items: center;
           border: 1px solid rgba(212,160,23,0.3);
           padding: 1rem;
           background: rgba(0,0,0,0.2);
           border-radius: 4px;
        }

        .logo-text {
          font-weight: 900;
          color: #fff;
          font-size: 1.25rem;
          line-height: 1;
        }

        .logo-subtext {
          color: #d4a017;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .book-page, .book-cover {
          position: absolute;
          width: 95%;
          height: 98%;
          top: 1%;
          right: 0;
          transform-style: preserve-3d;
          transform-origin: left center;
          animation: flipPage 2.5s infinite ease-in-out;
          z-index: 5;
        }

        .page-side {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          border-radius: 2px 8px 8px 2px;
        }

        .page-front {
          background: #f4f1ea;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.02) 1px, transparent 0),
            linear-gradient(to right, rgba(0,0,0,0.05) 0%, transparent 5%, transparent 95%, rgba(0,0,0,0.05) 100%);
          background-size: 20px 20px, 100% 100%;
          border: 1px solid #d4c5a1;
          box-shadow: inset 5px 0 15px rgba(0,0,0,0.1), 2px 2px 5px rgba(0,0,0,0.1);
          z-index: 2;
        }

        .page-back {
          background: #f4f1ea;
          transform: rotateY(180deg);
          border: 1px solid #d4c5a1;
          box-shadow: inset -5px 0 15px rgba(0,0,0,0.1);
        }

        .cover-design {
          background: linear-gradient(135deg, #153d24 0%, #0a1f12 100%);
          border: 2px solid #d4a017;
          box-shadow: 10px 10px 25px rgba(0,0,0,0.5);
        }

        .cover-back-inner {
          background: #153d24;
          transform: rotateY(180deg);
        }

        .page-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.5rem;
        }

        .course-code {
          color: #1a4d2e;
          font-weight: 900;
          font-size: 1.6rem;
          letter-spacing: 0.05em;
        }

        .course-label {
          color: #555;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .book-page:nth-child(2) { animation-delay: 2.0s; z-index: 6; }
        .book-page:nth-child(3) { animation-delay: 1.5s; z-index: 7; }
        .book-page:nth-child(4) { animation-delay: 1.0s; z-index: 8; }
        .book-page:nth-child(5) { animation-delay: 0.5s; z-index: 9; }
        .book-cover { 
          animation-delay: 0s; 
          z-index: 15;
          width: 100%;
          height: 100%;
          top: 0;
        }

        @keyframes flipPage {
          0% { transform: rotateY(0deg); }
          25% { transform: rotateY(0deg); }
          85%, 100% { transform: rotateY(-180deg); }
        }

        .loading-text {
          color: #d4a017;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.8;
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(0.98); }
          50% { opacity: 0.9; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
