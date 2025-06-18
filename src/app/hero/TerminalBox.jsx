'use client';

import React from 'react';
import '../globals.css';

const TerminalBox = () => {
  return (
    <div className="terminal-container">
      <div className="term-simul">
        <div className="line">pip install vyn</div>
        <div className="output">
          Collecting vyn<br />
          Installing collected packages: vyn<br />
          Successfully installed vyn-1.0.0
        </div>
        <br />
        <div className="line">vyn</div>
        <div className="output">
          Welcome to vyn!<br />
          ▶ Ready for your commands...
        </div>
      </div>

      <div className="term-simul2">
        <div className="line">pip install vyn</div>
        <div className="output">
          Collecting vyn<br />
          Installing collected packages: vyn<br />
          Successfully installed vyn-1.0.0
        </div>
        <br />
        <div className="line">vyn</div>
        <div className="output">
          Welcome to vyn!<br />
          ▶ Ready for your commands...
        </div>
      </div>

      <style jsx>{`
        .terminal-container {
          position: relative;
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1;
          margin: 0 auto;
          perspective: 1000px;
        }

        .term-simul, .term-simul2 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--terminal-bg);
          color: var(--secondary-color);
          font-family: 'Fira Code', monospace;
          font-size: clamp(0.7rem, 1.2vw, 1rem);
          padding: 12%;
          box-sizing: border-box;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
          overflow-y: auto;
          white-space: pre-wrap;
          border: 1px solid #1B2733;
          transition: transform 0.6s ease, opacity 0.6s ease;
        }

        .term-simul2 {
          background-color: var(--terminal-bg2);
        }

        .term-simul {
          transform: rotate(-360deg) translate(-80px, -80px);
          animation: slideInLeft 1s ease forwards;
          z-index: 1;
        }

        .term-simul2 {
          transform: rotate(360deg) translate(280px, -250px);
          animation: slideInRight 1s ease forwards;
          z-index: 0;
        }

        .line::before {
          content: '$ ';
          color: #4A6FA5;
        }

        .output {
          margin-left: 1em;
          color: var(--output-color);
        }

        @keyframes slideInLeft {
          0% {
            transform: rotate(-20deg) translate(-100px, -50px);
            opacity: 0;
          }
          100% {
            transform: rotate(-6deg) translate(-20px, -10px);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: rotate(20deg) translate(100px, 50px);
            opacity: 0;
          }
          100% {
            transform: rotate(8deg) translate(30px, 20px);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .terminal-container {
            max-width: 220px;
            aspect-ratio: 1;
            margin-bottom: 20px;
          }

          .term-simul, .term-simul2 {
            padding: 10%;
            font-size: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .terminal-container {
            max-width: 180px;
          }

          .term-simul, .term-simul2 {
            font-size: 0.68rem;
            padding: 8%;
          }
        }
      `}</style>
    </div>
  );
};

export default TerminalBox;
