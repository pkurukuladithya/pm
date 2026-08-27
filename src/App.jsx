import { useState, useEffect } from "react";

const REDIRECT_URL = "https://praveenahdk.online";
const COUNTDOWN_START = 10;

export default function App() {
  const [count, setCount] = useState(COUNTDOWN_START);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (count <= 0) {
      window.location.href = REDIRECT_URL;
      return;
    }
    const timer = setTimeout(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
      setCount((c) => c - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  const progress = ((COUNTDOWN_START - count) / COUNTDOWN_START) * 100;
  const circumference = 2 * Math.PI * 54;
  const dashOffset = circumference - (circumference * (count / COUNTDOWN_START));

  return (
    <div style={styles.root}>
      {/* Background particles */}
      <div style={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{ ...styles.particle, ...getParticleStyle(i) }} />
        ))}
      </div>

      <div style={styles.card}>
        {/* Name heading */}
        <p style={styles.name}>Nishaya Abeygunaratne</p>

        {/* Main message */}
        <h1 style={styles.heading}>Now Its Over !!</h1>

        <div style={styles.divider} />

        {/* Countdown circle */}
        <div style={styles.countdownWrapper}>
          <svg width="120" height="120" style={styles.svg}>
            {/* Track */}
            <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
            {/* Progress arc */}
            <circle
              cx="60" cy="60" r="54"
              fill="none"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              transform="rotate(-90 60 60)"
              style={{ transition: "stroke-dashoffset 0.8s ease" }}
            />
          </svg>
          <div style={{ ...styles.countNumber, transform: pulse ? "scale(1.25)" : "scale(1)", transition: "transform 0.15s ease" }}>
            {count}
          </div>
        </div>

        <p style={styles.redirectText}>
          Redirecting to owner's page in <strong>{count}s</strong>
        </p>

        {/* Manual link */}
        <a href={REDIRECT_URL} style={styles.link}>
          <span style={styles.linkIcon}>→</span>
          praveenahdk.online
        </a>
      </div>
    </div>
  );
}

function getParticleStyle(i) {
  const size = 2 + (i % 4);
  return {
    width: size,
    height: size,
    left: `${(i * 13 + 7) % 100}%`,
    top: `${(i * 17 + 11) % 100}%`,
    animationDuration: `${4 + (i % 5)}s`,
    animationDelay: `${(i * 0.4) % 4}s`,
    opacity: 0.15 + (i % 3) * 0.1,
  };
}

const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(ellipse at center, #0d0d0d 0%, #000 100%)",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    position: "relative",
    overflow: "hidden",
  },
  particles: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
  },
  particle: {
    position: "absolute",
    background: "#fff",
    borderRadius: "50%",
    animation: "float linear infinite",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    padding: "3rem 2.5rem",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  name: {
    fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
    fontFamily: "'Georgia', serif",
    fontWeight: "400",
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    margin: 0,
  },
  heading: {
    fontSize: "clamp(3rem, 10vw, 8rem)",
    fontWeight: "900",
    color: "#fff",
    margin: 0,
    lineHeight: 1.05,
    letterSpacing: "0.02em",
    textShadow: "0 0 60px rgba(255,255,255,0.15)",
  },
  divider: {
    width: "80px",
    height: "1px",
    background: "rgba(255,255,255,0.2)",
    margin: "0.5rem 0",
  },
  countdownWrapper: {
    position: "relative",
    width: 120,
    height: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  countNumber: {
    fontSize: "2.6rem",
    fontWeight: "700",
    color: "#fff",
    lineHeight: 1,
    position: "relative",
    zIndex: 2,
  },
  redirectText: {
    fontSize: "clamp(0.85rem, 2vw, 1rem)",
    color: "rgba(255,255,255,0.45)",
    margin: 0,
    letterSpacing: "0.05em",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#fff",
    textDecoration: "none",
    fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
    letterSpacing: "0.08em",
    border: "1px solid rgba(255,255,255,0.25)",
    padding: "0.65rem 1.5rem",
    borderRadius: "2px",
    transition: "background 0.2s ease, border-color 0.2s ease",
    marginTop: "0.25rem",
  },
  linkIcon: {
    fontSize: "1.1rem",
  },
};
