import HeroButtons from "./HeroButtons";

export default function HeroText() {
  return (
    
    <div
    className="
    mt-[-10px]
    flex
    flex-col
    items-center
    text-center
    z-20
    "
      >
      <h1
        className="
        text-white
        text-5xl
        md:text-7xl
        font-extrabold
        leading-tight
        tracking-tight
        "
      >
        Connecting Lives
        <br />
        Across India
      </h1>

      <h3
        className="
        mt-6
        text-cyan-300
        text-xl
        md:text-2xl
        font-medium
        "
      >
        Predict • Prevent • Protect
      </h3>

      <p
        className="
        mt-4
        max-w-2xl
        text-gray-300
        text-lg
        "
      >
        AI Powered Disease Surveillance & Early Outbreak Prediction
      </p>

      <HeroButtons />
    </div>
  );
}