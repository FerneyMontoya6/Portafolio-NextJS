import { NormalText } from "@components/atoms/Texts/index";

const PersonalDescription = () => {
  return (
    <ul className="w-full">
      <li>
        <div className="flex justify-between mb-2">
          <NormalText color="text-black" fontSize="text-sm">
            age:
          </NormalText>
          <NormalText color="text-black" fontSize="text-sm">
            23
          </NormalText>
        </div>
      </li>
      <li>
        <div className="flex justify-between mb-2">
          <NormalText color="text-black" fontSize="text-sm">
            Residence:
          </NormalText>
          <NormalText color="text-black" fontSize="text-sm">
            BD
          </NormalText>
        </div>
      </li>
      <li>
        <div className="flex justify-between mb-2">
          <NormalText color="text-black" fontSize="text-sm">
            Freelance:
          </NormalText>
          <NormalText color="text-black" fontSize="text-sm">
            Available
          </NormalText>
        </div>
      </li>
      <li>
        <div className="flex justify-between mb-2">
          <NormalText color="text-black" fontSize="text-sm">
            Address:
          </NormalText>
          <NormalText color="text-black" fontSize="text-sm">
            Dhaka,Bangladesh
          </NormalText>
        </div>
      </li>
    </ul>
  );
};

export default PersonalDescription;
