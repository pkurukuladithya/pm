import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExtraVerifyPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [hisMonth, setHisMonth] = useState("");
  const [hisDate, setHisDate] = useState("");
  const [phone, setPhone] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const monthNumber = String(months.indexOf(hisMonth) + 1).padStart(2, "0");
    const dateNumber = String(hisDate).padStart(2, "0");
    const correctBirthday = monthNumber === "12" && dateNumber === "23";
    const correctPhone = phone === "0763521561";
    if (correctBirthday && correctPhone) {
      setIsVerified(true);
      setError("");
    } else {
      setError("Incorrect details. Please try again.");
      setTimeout(() => setError(""), 2200);
    }
  };

  const handleUnlock = () => {
    navigate("/secret");
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center 
      bg-gradient-to-br from-rose-300 via-rose-200 to-rose-100">
      <div className="content-container w-full max-w-md rounded-3xl p-8
        bg-white/60 backdrop-blur-xl shadow-xl border border-rose-200">
        
        {/* Romantic Header */}
        <div className="text-center mb-8">
          <h1 className="font-dancing text-4xl text-rose-600 mb-3">
            You're Getting Closer...
          </h1>
          <h2 className="font-playfair text-2xl text-navy-800 mb-4">
            To Your Special Message
          </h2>
          <div className="space-y-2 font-poppins">
            <p className="text-navy-600">
              You're on the right track! 💝
            </p>
          </div>
        </div>

        {!isVerified ? (
          <div className="space-y-6">
            <div className="nested-container p-5">
              <p className="font-playfair text-lg text-rose-700 mb-2">
                One Last Step...
              </p>
              <p className="text-navy-700 font-poppins text-sm leading-relaxed">
                To ensure this message reaches the right person, please verify 
                these details about the sender - their birthday and phone number.
              </p>
              <p className="text-rose-600 font-poppins text-sm mt-3 italic">
                This is someone who means a lot to you... ✨
              </p>
            </div>

            <form onSubmit={handleSubmit} className="nested-container p-6 space-y-5">
              <div>
                <label className="block text-sm font-poppins font-medium text-navy-700 mb-2">
                  Their Birthday
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={hisMonth}
                    onChange={(e) => setHisMonth(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 
                    text-navy-800 focus:ring-2 focus:ring-rose-300 focus:border-rose-300
                    shadow-sm transition-all font-poppins"
                    required
                  >
                    <option value="">Month</option>
                    {months.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={hisDate}
                    onChange={(e) => setHisDate(e.target.value)}
                    placeholder="DD"
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 
                    text-navy-800 focus:ring-2 focus:ring-rose-300 focus:border-rose-300
                    shadow-sm transition-all font-poppins"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-poppins font-medium text-navy-700 mb-2">
                  Their Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07XXXXXXXX"
                  className="w-full p-3 rounded-xl bg-white border border-rose-200 
                  text-navy-800 focus:ring-2 focus:ring-rose-300 focus:border-rose-300
                  shadow-sm transition-all font-poppins"
                  required
                  pattern="07[0-9]{8}"
                  maxLength={10}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 
                text-white font-poppins font-semibold shadow-md hover:from-rose-500 hover:to-pink-600 
                transform transition-all hover:scale-[1.02]"
              >
                Verify Details ✨
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="nested-container p-5 bg-emerald-50/10">
              <p className="font-playfair text-lg text-emerald-700 mb-2">
                Perfect Match! ✨
              </p>
              <p className="font-poppins text-sm text-emerald-800">
                You've confirmed your connection to the sender. Your special message awaits...
              </p>
              <p className="font-poppins text-xs text-emerald-600 mt-2 italic">
                Please ensure privacy when viewing this message
              </p>
            </div>

            <button
              onClick={handleUnlock}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 
              text-white font-poppins font-semibold shadow-lg hover:from-emerald-500 hover:to-emerald-600 
              transform transition-all hover:scale-[1.02] relative z-20"
            >
              🔓 Unlock Your Special Message
            </button>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 
          text-rose-700 text-sm text-center animate-bounce font-poppins">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default ExtraVerifyPage;