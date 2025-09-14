import React from "react";
import { useNavigate } from "react-router-dom";

function SecretMessagePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-4 flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-lg p-8 text-center">
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold hover:from-violet-700 hover:to-purple-700 transition"
          >
            🔙 Back
          </button>
          <button
            onClick={() => navigate("/about")}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold hover:from-rose-600 hover:to-pink-600 transition"
          >
            👨‍💻 About
          </button>
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-8">🥺 I am sorry... 🎉</h1>

        <div className="text-white leading-relaxed text-center text-lg">
          <p className="mb-4">✨ සුභ පැතුම්! ඔබ නිවැරදි විස්තර ඇතුළත් කළ නිසා මෙම රහස් පණිවිඩය හුරුවෙයි. ✨</p>
          <p className="mb-6">කරුණාකර මෙය පෞද්ගලිකව පමණක් කියවන්න — මෙම පණිවිඩය ඔබ සඳහා විශේෂයි. 💖</p>
        </div>
      </div>
    </div>
  );
}

export default SecretMessagePage;
