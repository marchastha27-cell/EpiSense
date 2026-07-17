import click from "../../assets/audio/click.mp3";
import { useNavigate } from "react-router-dom";

export default function HeroButtons() {

  const audio = new Audio(click);
  const navigate = useNavigate();

  const playClick = () => {
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <div className="flex gap-6 mt-10">

      <button
        onClick={() => {
          playClick();
          // navigate later
          setTimeout(() => {
         navigate("/login");
       }, 150);
        }}
        className="
          px-8
          py-3
          rounded-full
          bg-cyan-500
          text-white
          font-semibold
          shadow-lg
          shadow-cyan-500/40
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Login
      </button>

      <button
        onClick={() => {
          playClick();
          // navigate later
          setTimeout(() => {
      navigate("/signup");
    }, 150);
        }}
        className="
          px-8
          py-3
          rounded-full
          bg-cyan-500
          text-white
          font-semibold
          shadow-lg
          shadow-cyan-500/40
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Sign Up
      </button>

    </div>
  );
}