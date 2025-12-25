import { useNavigate } from "react-router-dom";

export default function SongItem({ song, index }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/music/player/${index}`, { state: song })}
      className="
        flex items-center justify-between
        p-4 rounded-xl bg-[#1f1f1f]
        active:scale-95 transition
      "
    >
      <div>
        <p className="font-semibold">{song.title}</p>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>

      <span className="text-xl">▶</span>
    </div>
  );
}
