import { NormalText, TitleBasic } from "@/components/atoms/Texts";
import { Icon } from "@iconify/react";

const ExtraSkills = () => {
  return (
    <div className="w-full">
      <TitleBasic>Extra Skills</TitleBasic>
      <ul>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>Bootstrap, Materialize</NormalText>
        </li>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>Stylus, Sass, Less</NormalText>
        </li>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>Gulp, Webpack, Grunt</NormalText>
        </li>
        <li className="flex items-center">
          <Icon icon="tabler:squares" color="#0093ff" className="mr-3"></Icon>
          <NormalText>GIT Knowledge</NormalText>
        </li>
      </ul>
    </div>
  );
};

export default ExtraSkills;
