"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="/" className="logo"><span>GREEN</span><strong>PASTURES</strong></a>
        <nav className={open ? "nav-links active" : "nav-links"}>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/livestock" onClick={() => setOpen(false)}>Livestock</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#sustainability" onClick={() => setOpen(false)}>Sustainability</a>
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <a href="/contact" className="nav-button">Get in touch</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
      </div>
    </header>
  );
}