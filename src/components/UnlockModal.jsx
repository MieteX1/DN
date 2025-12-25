import React, { useState } from "react";

export default function UnlockModal({ onClose, onUnlock }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const success = onUnlock(code.trim());
    if (!success) {
      setError("Taki kod nie istnieje");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className="
          w-[90%] max-w-sm rounded-2xl p-6
          bg-[#0f0f12]
          border border-purple-500/40
          shadow-[0_0_30px_rgba(168,85,247,0.6)]
        "
      >
        {/* TITLE */}
        <h2 className="text-center text-xl font-semibold text-white">
          Wpisz odblokowywujący kod
        </h2>

        {/* ERROR */}
        {error && (
          <p className="mt-2 text-center text-sm text-pink-400">
            {error}
          </p>
        )}

        {/* INPUT */}
        <input
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError("");
          }}
          placeholder="XXXXXXX"
          className="
            mt-6 w-full rounded-lg p-3 text-center text-white tracking-widest
            bg-black/60
            border border-purple-500/40
            focus:outline-none focus:ring-2 focus:ring-cyan-400
          "
        />

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={onClose}
            className="
              flex-1 py-2 rounded-lg
              border border-gray-600 text-gray-300
              hover:bg-gray-800 transition
            "
          >
            Anuluj
          </button>

          <button
            onClick={handleSubmit}
            className="
              flex-1 py-2 rounded-lg text-white font-semibold
              bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
              shadow-[0_0_15px_rgba(236,72,153,0.8)]
              active:scale-95 transition
            "
          >
            Odblokuj
          </button>
        </div>
      </div>
    </div>
  );
}
