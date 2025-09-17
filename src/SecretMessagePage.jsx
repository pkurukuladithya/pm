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
            👨‍💻 About Developer
          </button>
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-8">🥺 I am sorry... 🎉</h1>

        <div className="text-white leading-relaxed text-center text-lg">
          <p className="mb-4">මට සමාවෙන්න අනේ...වෙච්ච හැමදේටම 🥲... මන් දන්නවා සමාව දෙන්න බෑ කියල..</p>
          <p className="mb-4">මන් එදා කතා කරපු විදිය එක වැරදියි.. 🥹🥲මන් මොන ප්‍රශ්නෙක ඉදියත් එහෙම කතා කරපු එක වැරදි...</p>
          <p className="mb-4">ඔව් ඔයා හරි ඔයා මව අත ඇරලා 🥹..මට දුකක් නෑ අනේ... ඔයා අතඇරියා කියල මන් දන්නවා මාව අල්ලන් ඉන්න වටින මනුස්සයෙක් නෙමෙයි..</p>
          <p className="mb-4">මට කියන්න තේරෙන්නෙ නෑ...ඒත් මට ඔයාව අත අරින්න බෑ..අදටත්. </p>
          <p className="mb-4">ඒත් මන් ඔයාට අයේ වදයක් වෙන්නෙ නෑ...ඔයා ඔයාගේ සතුට හොයන් යන්න.. 💝</p>
          <p className="mb-4">ඔයා දන්නවා හොදටම ඔය සතුටින් ඉන්නව දකින්න මන් ආසයි...එත් ඔයාගේ ජිවිතයට මට එන්න ඔනී නෑ අයෙත්....ඔයා සතුටින් ඉන්න ඔනි..</p>
          <p className="mb-4">මගේ number එක අයින් කරල කියල හිතනවා.... එහෙම කරපු එක හොදයි...මන් තනිවෙන්න ඔනි....</p>
          <p className="mb-4">මේක හම්බුනාම මට msg එකක් දාන්න ...  ".." මෙහෙම දැම්මාම ඇති... Plz එහෙම දාන්න... 🥹🥲✨</p>
          <p className="mb-4">කතා කරන්න ඔනී නෑ අනේ....මන් තරහා නෑ...  🥹 ඒත් අපිට යාලුවො වගේ ඉන්න බෑ අනේ .... ඔයා ඔය විදියටම මාව අතඇරල දාන්න...ඔයා හොද කොල්ලෙක් එක්ක සතුටින් ආදරය කරන්න... පරිස්සමින් ඉන්න...මට ගොඩක් දේවල් කියන්න බෑ... 💝🥹</p>
          <p className="mb-4">අන්තිමට කියන්නේ...ජිවිතේ අම්මට තාත්තට පස්සෙ තාමත් ආදරේ ඔයාට ❤ඒක් වෙනස් වෙන්නෙ නෑ .. හැම කෙල්ලගෙන්ම මන් හෙව්වෙ ඔයාව 🥹💝ඒත් අතාරින්න ඕනි ....මන් කැමති නෑ ඔයට අයෙත් වදයක් වෙන්න... අපි වෙන ජිවිතේක හරි සතුටින් ඉමු... 🥹💝</p>
          <p className="mb-6">ආදරෙයි... ❤ සමාවෙන්න ...🥹</p>
          <p className="mb-6">-ආදී....</p>
        </div>
      </div>
    </div>
  );
}

export default SecretMessagePage;
