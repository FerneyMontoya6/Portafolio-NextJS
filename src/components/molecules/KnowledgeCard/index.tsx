import { Icon } from "@iconify/react";
import { TitleBasic, NormalText } from "@components/atoms/Texts/index";

const KnowledgeCard = ({ title, text, icon }: {title:string, text:string, icon:string}) => {
  return (
    <article className="w-full h-52 flex flex-col justify-center items-center bg-white">
      <Icon
        width="5rem"
        className="mb-5"
        icon={icon}
        color="#0093ff"
      ></Icon>
      <TitleBasic>{title}</TitleBasic>
      <NormalText fontSize="text-sm">{text}</NormalText>
    </article>
  );
};

export default KnowledgeCard;
