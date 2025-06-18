"use client";

import { useEffect, useRef } from "react";
import "./about.css";

import {
  FaBug,
  FaShieldAlt,
  FaExclamationTriangle,
  FaLock,
} from "react-icons/fa";
import {
  SiPython,
  SiFlask,
  SiDjango,
  SiFastapi,
} from "react-icons/si";


const compatibilityIcons = [
  { id: 'python', icon: <SiPython className="icon-python" /> },
  { id: 'flask', icon: <SiFlask className="icon-flask" /> },
  { id: 'django', icon: <SiDjango className="icon-django" /> },
  { id: 'fastapi', icon: <SiFastapi className="icon-fastapi" /> },
];



const scannerErrors = [
  {
    icon: <FaBug />,
    title: "SQL Injection",
    desc: "Improper input sanitization leading to arbitrary queries.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "XSS",
    desc: "Malicious scripts injected into pages viewed by others.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Insecure Deserialization",
    desc: "Untrusted data can abuse logic or escalate privileges.",
  },
  {
    icon: <FaLock />,
    title: "Broken Authentication",
    desc: "Flaws that allow attackers to take over user accounts.",
  },
  {
    icon: <FaBug />,
    title: "Command Injection",
    desc: "User input can execute system-level commands.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "CSRF",
    desc: "Unwanted user actions via trusted web apps.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Missing Security Headers",
    desc: "Critical headers absent, exposing vulnerabilities.",
  },
  {
    icon: <FaLock />,
    title: "Sensitive Data Exposure",
    desc: "Weak encryption or no protection of personal data.",
  },
];

export default function Compatibility() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    let scrollX = 0;
    const scroll = () => {
      if (marqueeRef.current) {
        scrollX -= 1;
        marqueeRef.current.style.transform = `translateX(${scrollX}px)`;
        if (Math.abs(scrollX) > marqueeRef.current.scrollWidth / 2) scrollX = 0;
        requestAnimationFrame(scroll);
      }
    };
    scroll();
  }, []);

  return (
    <div className="compatibility-wrapper">
      <h2 className="compatibility-heading">Compatible With</h2>

      <div className="compatibility-marquee-container">
        <div className="compatibility-marquee-box">
          <div className="compatibility-marquee-scroll" ref={marqueeRef}>
          {compatibilityIcons.concat(compatibilityIcons).map((item) => (
  <span key={item.id + Math.random()} className="language-icon">{item.icon}</span>
))}

          </div>
        </div>
      </div>

      <h3 className="compatibility-errors-heading">
        AI-Powered Security Scan Errors
      </h3>
      <div className="compatibility-errors-grid">
       {scannerErrors.map((err) => (
  <div className="compatibility-error-card" key={err.title}>
    <div className="compatibility-error-icon">{err.icon}</div>
    <strong>{err.title}</strong>
    <p className="compatibility-error-desc">{err.desc}</p>
  </div>
))}
      </div>
    </div>
  );
}
