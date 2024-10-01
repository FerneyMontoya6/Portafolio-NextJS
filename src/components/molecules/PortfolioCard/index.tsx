import Image, { StaticImageData } from "next/image";
import { NormalText, TitleBasic } from "@components/atoms/Texts/index";
import { Icon } from "@iconify/react";

const PortfolioCard = ({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: StaticImageData;
}) => {
  return (
    <article className="w-full pb-5 pt-10 bg-white">
      <Image className="shadow-top mb-5" width={700} alt="web page" src={img} />
      <div className="px-5">
        <TitleBasic>{title}</TitleBasic>
        <NormalText>{text}</NormalText>
        <div className="flex mt-2 text-primaryColor items-center">
          <p className="flex items-center text-lg font-medium mb-2 mr-2">
            Learn More
          </p>
          <Icon className="mb-1" icon="weui:arrow-filled"></Icon>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
