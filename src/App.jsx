import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import HappyBirthdayPage from "./HappyBirthdayPage";

function App() {
  const [audio] = useState(() => new Audio("/audio/background-music.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    document.body.classList.remove("theme-date", "theme-verify", "theme-secret", "theme-about");
    document.body.classList.add("theme-birthday");
    return () => {
      document.body.classList.remove("theme-birthday");
    };
  }, []);

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
      <div className="fixed top-4 right-4 z-50">
        <button
          type="button"
          onClick={toggleMusic}
          className="flex items-center space-x-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md hover:bg-white/15"
        >
          <span className="text-xs uppercase tracking-[0.18em]">{isPlaying ? "Music on" : "Music off"}</span>
          <span className="text-sm">{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>

      <HappyBirthdayPage onToggleMusic={toggleMusic} isPlaying={isPlaying} />

      <Analytics />
    </>
  );
}

export default App;
