import { WavyBackground } from "../ui/wavy-background";

export const HeroSection = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 h-100rem">
      <p className="text-xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        A new way for your workflow!
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Just by using this Exo-Skeleton.
      </p>
    </WavyBackground>
  );
};
