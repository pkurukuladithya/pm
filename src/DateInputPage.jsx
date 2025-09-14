import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function DateInputPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isBirthdayVerified, setIsBirthdayVerified] = useState(false);
  const [birthdayMonth, setBirthdayMonth] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [secretMonth, setSecretMonth] = useState("");
  const [secretDate, setSecretDate] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleBirthdaySubmit = (e) => {
    e.preventDefault();
    const monthNumber = String(months.indexOf(birthdayMonth) + 1).padStart(2, '0');
    const dateNumber = String(birthdayDate).padStart(2, '0');
    
    if (monthNumber === "12" && dateNumber === "19") {
      setIsBirthdayVerified(true);
      setError("");
    } else {
      setError("Incorrect birthday. Please try again.");
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleSecretDateSubmit = (e) => {
    e.preventDefault();
    const monthNumber = String(secretMonth).padStart(2, '0');
    const dateNumber = String(secretDate).padStart(2, '0');
    
    if (monthNumber === "03" && dateNumber === "31") {
      navigate("/verify");
    } else {
      setError("Incorrect date. Please try again.");
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center 
      bg-gradient-to-br from-rose-300 via-rose-200 to-rose-100">
      <div className="content-container w-full max-w-md rounded-3xl p-8">
        
        {/* Celebration Header */}
        <div className="text-center mb-8">
          <h1 className="font-dancing text-5xl text-rose-600 mb-3">
            Congratulations!
          </h1>
          <h2 className="font-playfair text-3xl text-navy-800 mb-4">
            Ms. Nishaya
          </h2>
          <div className="space-y-2 font-poppins">
            <p className="text-navy-600">You've successfully received our surprise present!</p>
            <p className="text-sm font-medium text-navy-600/80">
              A special message awaits you...
            </p>
          </div>
        </div>

        {!isBirthdayVerified ? (
          <div className="space-y-6">
            <div className="nested-container p-5">
              <p className="text-navy-700 text-center font-poppins relative z-20">
                Please verify your birthday to continue
              </p>
            </div>
            
            <form onSubmit={handleBirthdaySubmit} className="nested-container p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-navy-700 mb-2">Month</label>
                  <select
                    value={birthdayMonth}
                    onChange={(e) => setBirthdayMonth(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 text-navy-800"
                    required
                  >
                    <option value="">Select</option>
                    {months.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy-700 mb-2">Date</label>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    value={birthdayDate}
                    onChange={(e) => setBirthdayDate(e.target.value)}
                    placeholder="DD"
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 text-navy-800"
                    required
                  />
                </div>
              </div>
              <div className="text-right text-navy-600 text-sm">Year: 2002</div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 
                text-white font-semibold shadow-md hover:from-rose-500 hover:to-pink-600"
              >
                Verify Birthday ✨
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="nested-container p-5">
              <p className="font-playfair text-lg text-rose-700 mb-2 relative z-20">
                Someone Special Has A Message...
              </p>
              <p className="text-navy-700 font-poppins text-sm leading-relaxed">
                They've prepared something private just for you. To unlock it, 
                think back to that meaningful date in 2020 - the day you received 
                their very first message. 
              </p>
              <p className="text-rose-600 font-poppins text-sm mt-3 italic">
                Hint: The beginning of everything... ✨
              </p>
            </div>
            
            <form onSubmit={handleSecretDateSubmit} className="nested-container p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-poppins font-medium text-navy-700 mb-2">
                    Month
                  </label>
                  <input
                    type="number" min="1" max="12"
                    value={secretMonth}
                    onChange={(e) => setSecretMonth(e.target.value)}
                    placeholder="MM"
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 
                    text-navy-800 focus:ring-2 focus:ring-rose-300 focus:border-rose-300
                    shadow-sm transition-all font-poppins"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-navy-700 mb-2">
                    Date
                  </label>
                  <input
                    type="number" min="1" max="31"
                    value={secretDate}
                    onChange={(e) => setSecretDate(e.target.value)}
                    placeholder="DD"
                    className="w-full p-3 rounded-xl bg-white border border-rose-200 
                    text-navy-800 focus:ring-2 focus:ring-rose-300 focus:border-rose-300
                    shadow-sm transition-all font-poppins"
                    required
                  />
                </div>
              </div>

              <div className="text-right text-navy-600 text-sm font-poppins">
                Year: 2020
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-400 to-pink-500 
                text-white font-poppins font-semibold shadow-md hover:from-rose-500 hover:to-pink-600 
                transform transition-all hover:scale-[1.02]"
              >
                Unlock Your Special Message ✨
              </button>
            </form>
          </div>
        )}

        {error && (
          <div className="mt-6 nested-container p-4 text-rose-700 text-sm text-center 
            animate-bounce relative z-20">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default DateInputPage;
