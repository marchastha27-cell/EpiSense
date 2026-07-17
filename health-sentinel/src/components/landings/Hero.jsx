import HeroBackground from "./HeroBackground";
import Scene from "./Scene";
import HeroText from "./HeroText";

import { useEffect } from "react";

import whoosh from "../../assets/audio/space.mp3";

export default function Hero() {

  useEffect(() => {

  const playSound = () => {
    const audio = new Audio(whoosh);
    audio.volume = 0.25;
    audio.play();

    window.removeEventListener("click", playSound);
  };

  window.addEventListener("click", playSound);

  return () => {
    window.removeEventListener("click", playSound);
  };

}, []);

  return (
    <section
      className="
      relative
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
      overflow-hidden
      "
    >
      <HeroBackground />

      <Scene />

      <HeroText />

    </section>
  );
}