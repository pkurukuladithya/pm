import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HappyBirthdayPage from "./HappyBirthdayPage";
import AboutPage from "./AboutPage";

function ThemedRoutes({ onToggleMusic, isPlaying }) {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("theme-date", "theme-verify", "theme-secret", "theme-about", "theme-birthday");
    if (location.pathname === "/about") {
      document.body.classList.add("theme-about");
    } else {
      document.body.classList.add("theme-birthday");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HappyBirthdayPage onToggleMusic={onToggleMusic} isPlaying={isPlaying} />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

function App() {
  const [audio] = useState(() => new Audio("/audio/background-music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    const handlePlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };
    document.addEventListener("click", handlePlay, { once: true });
    return () => {
      audio.pause();
      document.removeEventListener("click", handlePlay);
    };
  }, [audio]);

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  return (
    <>
      <Router>
        <ThemedRoutes onToggleMusic={toggleMusic} isPlaying={isPlaying} />
      </Router>

      <Analytics />
    </>
  );
}

export default App;
