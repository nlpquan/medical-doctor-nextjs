import HeroImage from "./hero/HeroImage";
import HeroText from "./hero/HeroText";

const Hero: React.FC = () => {
  return (
    <section className="hero overflow-hidden bg-grey p-12 xl:pb-0 xl:pt-12">
      <div className="container mx-auto h-full">
        <div className="flex h-full flex-col items-center justify-between xl:flex-row">
          <HeroText />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
