import React, { useState } from "react";
import UnlockModal from "../components/UnlockModal";
import MusicCategory from "../components/MusicCategory";
import { basicSongs, unlockCodes } from "../data/songs";

export default function MusicPage() {
  const [showModal, setShowModal] = useState(false);
  const [unlockedSongs, setUnlockedSongs] = useState(() => {
  const saved = localStorage.getItem("unlockedSongs");
  return saved ? JSON.parse(saved) : [];
});


  const handleUnlock = (code) => {
  const songs = unlockCodes[code];
  if (!songs) return false;

  setUnlockedSongs((prev) => {
    const newUnlocked = [...prev];

    songs.forEach((song) => {
      if (!prev.some((s) => s.id === song.id)) {
        newUnlocked.push(song);
      }
    });

    localStorage.setItem("unlockedSongs", JSON.stringify(newUnlocked));
    return newUnlocked;
  });

  setShowModal(false);
  return true;
};


  return (
    <div className="min-h-screen bg-[#181718] text-white px-4 pb-24">

      {/* LOGO */}
      <div className="flex justify-center pt-6">
        <img src="/images/logo.png" alt="logo" className="w-96" />
      </div>

      {/* UNLOCK BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowModal(true)}
          className="
            px-8 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
            shadow-[0_0_20px_rgba(236,72,153,0.8)]
            active:scale-95 transition
          "
        >
          Odblokuj tajemne piosenki!
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <UnlockModal
          onClose={() => setShowModal(false)}
          onUnlock={handleUnlock}
        />
      )}


      {/* CATEGORIES */}
      <div className="mt-10 space-y-6">
        {/* Podstawowe piosenki */}
        {Array.from(new Set(basicSongs.map(s => s.category))).map(category => (
          <MusicCategory
            key={category}
            title={category}
            songs={basicSongs.filter(s => s.category === category)}
          />
        ))}

        {/* Odblokowane piosenki */}
        {Array.from(new Set(unlockedSongs.map(s => s.category))).map(category => (
          <MusicCategory
            key={category}
            title={category}
            songs={unlockedSongs.filter(s => s.category === category)}
          />
        ))}
      </div>
    </div>
  );
}
