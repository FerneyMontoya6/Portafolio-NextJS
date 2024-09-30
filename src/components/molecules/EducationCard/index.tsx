import { NormalText, TitleBasic } from "@components/atoms/Texts/index";

const EducationCard = ({
  entity,
  rol,
  dates,
  title,
  description,
}: {
  entity: string;
  rol: string;
  dates: string;
  title: string;
  description: string;
}) => {
  return (
    <article className="p-8">
      <div className="text-center">
        <TitleBasic>{entity}</TitleBasic>
        <div className="flex mt-3 mb-6 justify-center">
          <NormalText color="text-black" fontSize="text-sm">
            {rol}
          </NormalText>
          <div className="w-fit ml-8 p-0.5 bg-primaryColor text-white text-xxs">
            <p className="inline-block">{dates}</p>
          </div>
        </div>
      </div>
      <div className="text-justify">
        <div className="text-start">
          <TitleBasic>{title}</TitleBasic>
        </div>
        <NormalText>
          {description}
        </NormalText>
      </div>
    </article>
  );
};

export default EducationCard;
