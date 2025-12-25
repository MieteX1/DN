import { useState } from "react";
import SongItem from "./SongItem";

export default function MusicCategory({ title, songs }) {
  const [open, setOpen] = useState(false);

  // jeśli nie ma piosenek → nie pokazuj kategorii
  if (!songs || songs.length === 0) return null;

  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)] transition-all">

      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex justify-between items-center
          px-4 py-4
          text-left font-semibold
          bg-[#1f1f1f]
          active:bg-[#2a2a2a]
          transition
        "
      >
        <span>{title} <text className="text-sm text-gray-300 ">[{songs.length} piosenek]</text></span>
        <span
          className={`transform transition ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ⌄
        </span>
      </button>

      {/* CONTENT */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${open ? "h-auto opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="p-4 space-y-3">
          {songs.map((song, i) => (
            <SongItem key={i} song={song} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
