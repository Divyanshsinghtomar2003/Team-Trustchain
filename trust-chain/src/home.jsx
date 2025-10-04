// src/Home.jsx
import React from "react";
import logo from "./logo.png"; // place your logo here: src/assets/logo.png

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Top Navigation */}
      <header style={styles.nav}>
        <div style={styles.brand}>
          <img src={logo} alt="RBI Connect Logo" style={styles.logoImage} />
          <div style={styles.brandTag}>Decentralized Banking • Trusted • Secure</div>
        </div>

        <nav style={styles.navLinks}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/signup" style={styles.link}>Signup</a>
          <a href="/login" style={styles.link}>Login</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={styles.hero}>
        <h1 style={styles.title}>RBI Connect</h1>
        <p style={styles.subtitle}>
          A decentralized Indian banking platform — secure, transparent, and audit-ready.
        </p>

        <div style={styles.ctaRow}>
          <button style={styles.primaryBtn} onClick={() => (window.location.href = "/signup")}>
            Create Account
          </button>
          <button style={styles.ghostBtn} onClick={() => (window.location.href = "/login")}>
            Sign In
          </button>
        </div>

        {/* Quick Features */}
        <div style={styles.features}>
          <Feature title="Verified KYC" desc="Secure identity verification & compliance" />
          <Feature title="Transparent Ledger" desc="All transactions auditable & secure" />
          <Feature title="RBI-Compliant" desc="Policy-controlled & regulated" />
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLeft}>
          <div style={{ fontWeight: 700 }}>RBI Connect</div>
          <div style={{ fontSize: 12, color: "#94a3b8" }}>
            © {new Date().getFullYear()} RBI Connect — All rights reserved
          </div>
        </div>

        <div style={styles.footerRight}>
          <a href="/privacy" style={styles.fLink}>Privacy</a>
          <a href="/terms" style={styles.fLink}>Terms</a>
          <a href="/support" style={styles.fLink}>Support</a>
        </div>
      </footer>
    </div>
  );
}

/* Feature Component */
function Feature({ title, desc }) {
  return (
    <div style={styles.featureCard}>
      <div style={styles.featureDot} />
      <div>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <div style={{ fontSize: 13, color: "#94a3b8" }}>{desc}</div>
      </div>
    </div>
  );
}

/* Styles */
const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f0f4f8 0%, #dbeafe 100%)",
    color: "#1e293b",
    fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    zIndex: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    background: "#1e293b",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    borderRadius: 6,
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logoImage: {
    width: 80,
    borderRadius: 50,
    objectFit: "contain",
  },
  brandName: { fontSize: 16, fontWeight: 700, color: "#1e293b" },
  brandTag: { fontSize: 15, color: "white", marginTop: -2 },
  navLinks: { display: "flex", gap: 18, alignItems: "center" },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: 18,
    padding: "6px 10px",
    transition: "0.2s",
  },

  hero: {
    zIndex: 3,
    marginTop: 40,
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
  },
  title: { fontSize: 46, margin: 0, letterSpacing: -1, color: "#1e293b" },
  subtitle: {
    maxWidth: 820,
    textAlign: "center",
    color: "#334155",
    fontSize: 18,
    lineHeight: 1.4,
    margin: "6px 0 18px 0",
  },
  ctaRow: { display: "flex", gap: 14, marginTop: 6 },
  primaryBtn: {
    background: "#3b82f6",
    color: "#ffffff",
    border: "none",
    padding: "12px 22px",
    borderRadius: 8,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(59,130,246,0.25)",
  },
  ghostBtn: {
    background: "transparent",
    color: "#1e293b",
    border: "1px solid #3b82f6",
    padding: "10px 20px",
    borderRadius: 8,
    cursor: "pointer",
  },
  features: {
    marginTop: 28,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 14,
    width: "96%",
    maxWidth: 980,
    zIndex: 3,
  },
  featureCard: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 8,
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
  },
  featureDot: { width: 12, height: 12, borderRadius: 6, background: "#3b82f6", marginTop: 6 },
  footer: {
    zIndex: 5,
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 40px",
    borderTop: "1px solid #e2e8f0",
    background: "#1e293b",
    borderRadius: 6,
  },
  footerLeft: { display: "flex", flexDirection: "column", gap: 4 },
  footerRight: { display: "flex", gap: 14, alignItems: "center" },
  fLink: { color: "#64748b", fontSize: 13, textDecoration: "none" },
};
