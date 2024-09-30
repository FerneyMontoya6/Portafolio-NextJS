import { Icon } from "@iconify/react";

const HireMeButton = () => {
  return (
    <button className="w-36 h-12 flex justify-center items-center rounded-md bg-primaryColor">
      HIRE ME
      <Icon icon="maki:arrow" className="ml-3 w-3 font-medium"></Icon>
    </button>
  );
};

export default HireMeButton;
