import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { basicSongs } from "../data/songs";
import { useRef, useState, useEffect } from "react";

export default function PlayerPage() {
  const { state: song } = useLocation();
  const audioRef = useRef(null);
  const navigate = useNavigate();
  const [loop, setLoop] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  if (!song) return null;

  const togglePlay = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  const rewind = () => {
    audioRef.current.currentTime = 0;
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  const prevSong = () => {
  const index = basicSongs.findIndex(s => s.id === song.id);

  // jeśli jesteś na początku listy → nic nie rób
  if (index <= 0) return;

  const prev = basicSongs[index - 1];

  navigate(`/music/player/${index}`, {
    state: prev
  });
};
  const nextSong = () => {
  const index = basicSongs.findIndex(s => s.id === song.id);

  // jeśli nie ma następnej piosenki → zostań
  if (index === -1 || index === basicSongs.length - 1) return;

  const next = basicSongs[index + 1];

  navigate(`/music/player/${index + 2}`, {
    state: next
  });
};

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.load();
    audioRef.current.play();
    setPlaying(true);
    setCurrentTime(0);
  }
}, [song.id]);

const handleEnded = () => {
  if (loop) {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  } else {
    nextSong();
  }
};



  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 pt-10 flex flex-col items-center">
      
      {/* COVER */}
      <img
        src={song.cover}
        alt="cover"
        className="
          w-64 h-64 rounded-2xl object-cover
          shadow-[0_0_40px_rgba(236,72,153,0.6)]
        "
      />

      {/* INFO */}
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold">{song.title}</h1>
        <p className="text-gray-400">{song.artist}</p>
      </div>

      {/* TIMER */}
      <div className="w-full max-w-sm mt-8">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full accent-pink-500"
        />

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-8 mt-10 text-3xl">

        <button
          onClick={() => setLoop(prev => !prev)}
          className={`
            transition-all
            ${loop 
              ? "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)] scale-110" 
              : "text-gray-500 opacity-60"}
          `}
          title={loop ? "Loop ON" : "Loop OFF"}
        >
          🔁
        </button>


        <button
          onClick={() => {
            if (currentTime > 3) {
              audioRef.current.currentTime = 0;
            } else {
              prevSong();
            }
          }}
          className="active:scale-90 transition"
          title="Previous"
        >
          ⏮
        </button>

        <button
          onClick={togglePlay}
          className="text-4xl active:scale-90 transition"
        >
          {playing ? "⏸" : "▶"}
        </button>

        <button
          onClick={nextSong}
          className="active:scale-90 transition"
          title="Next"
        >
          ⏭
        </button>

      </div>

      <audio
        ref={audioRef}
        src={song.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      {/* BACK BUTTON */}
      <div className="w-full max-w-sm  mt-8 flex justify-center mb-6">
        <button
          onClick={() => navigate("/music")}
          className="
            px-4 py-2 rounded-full
            bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400
            text-white font-semibold
            shadow-[0_0_10px_rgba(236,72,153,0.7)]
            active:scale-95 transition
          "
        >
          ← Wróć do listy
        </button>
      </div>
      {/* LYRICS */}
      {song.lyrics && (
        <div className="w-full max-w-sm mt-4 pb-32">

          <h2 className="text-lg font-semibold mb-2 text-center text-pink-400">
            Lyrics
          </h2>

          <div
            className="
              text-sm text-gray-300
              whitespace-pre-line
              leading-loose
              px-2
              bg-gradient-to-b from-transparent to-[#121212]
            "
          >
            {song.lyrics}
          </div>

        </div>
      )}
    </div>
    
  );
}
