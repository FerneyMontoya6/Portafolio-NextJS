import Carousel from "@components/molecules/Carousel/index";
import PortfolioCard from "@components/molecules/PortfolioCard/index";
import restoPicture from "@/assets/restorec2.jpeg";

const PortFolioSection = () => {
  return (
    <Carousel>
      <PortfolioCard
        img={restoPicture}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        title="How to make web tempates"
      />
      <PortfolioCard
        img={restoPicture}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        title="How to make web tempates"
      />
      <PortfolioCard
        img={restoPicture}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna "
        title="How to make web tempates"
      />
    </Carousel>
  );
};

export default PortFolioSection;
