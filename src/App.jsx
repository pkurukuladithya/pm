import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import DateInputPage from "./DateInputPage";
import ExtraVerifyPage from "./ExtraVerifyPage";
import SecretMessagePage from "./SecretMessagePage";
import AboutPage from "./AboutPage";


/* small wrapper so we can use useLocation at top level and control body theme */
function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Clear previous theme classes, then add the one for current route.
    document.body.classList.remove(
      "theme-date",
      "theme-verify",
      "theme-secret",
      "theme-about"
    );

    if (location.pathname === "/") {
      document.body.classList.add("theme-date");      // blush / pink
    } else if (location.pathname === "/verify") {
      document.body.classList.add("theme-verify");    // deep plum
    } else if (location.pathname === "/secret") {
      document.body.classList.add("theme-secret");    // warm gold / elegant
    } else if (location.pathname === "/about") {
      document.body.classList.add("theme-about");     // professional navy
    } else {
      document.body.classList.add("theme-date");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<DateInputPage />} />
      <Route path="/verify" element={<ExtraVerifyPage />} />
      <Route path="/secret" element={<SecretMessagePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

function App() {
  const [audio] = useState(new Audio('/audio/background-music.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    const handlePlay = () => {
      audio.play().catch(() => {});
      setIsPlaying(true);
    };
    document.addEventListener("click", handlePlay, { once: true });
    return () => {
      audio.pause();
      document.removeEventListener("click", handlePlay);
    };
  }, [audio]);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => {
            if (isPlaying) { audio.pause(); } else { audio.play().catch(() => {}); }
            setIsPlaying(!isPlaying);
          }}
          className="p-3 rounded-full bg-rose-800/40 border border-rose-500/20 text-white shadow-lg flex items-center space-x-2"
        >
          <span className="text-lg">{isPlaying ? "🔊" : "🔇"}</span>
          <span className="text-sm font-semibold">{isPlaying ? "Playing Music" : "Play Music"}</span>
        </button>
      </div>

      <Router>
        <AppRoutes />
      </Router>

      <Analytics />
    </>
  );
}

export default App;