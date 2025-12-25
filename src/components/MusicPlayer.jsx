import React, { useRef, useState } from "react";

export default function MusicPlayer({ song }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!playing) audioRef.current.play();
    else audioRef.current.pause();
    setPlaying(!playing);
  };

  return (
    <div className="border border-gray-700 rounded-lg p-3 flex items-center justify-between">
      <div>
        <p className="font-semibold">{song.title}</p>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>

      <button
        onClick={toggle}
        className="text-red-500 text-xl"
      >
        {playing ? "❚❚" : "▶"}
      </button>

      <audio ref={audioRef} src={song.src} />
    </div>
  );
}
