import HireMeButton from "@/components/atoms/HireMeButton";
import HeroTitle from "@components/atoms/HeroTitle/index";
import { NormalText } from "@components/atoms/Texts/index";

const Hero = () => {
  return (
    <section className="flex flex-col p-6 text-center items-center bg-white">
      <HeroTitle></HeroTitle>
      <NormalText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
        feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
        lectus.
      </NormalText>
      <span className="mb-8"></span>
      <HireMeButton></HireMeButton>
    </section>
  );
};

export default Hero;
