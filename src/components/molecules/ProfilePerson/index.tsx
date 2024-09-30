import ProfilePicture from "@/components/atoms/ProfilePicture";
import { NormalText, TitleBasic } from "@components/atoms/Texts";
import photo from "@/assets/FotoCV.png";

const ProfilePerson = () => {
  return (
    <div className="grid place-items-center w-full mb-12">
      <ProfilePicture
        src={photo}
        alt="Foto de un Joven de aproximadamente 20 años"
      />
      <TitleBasic>Ferney Montoya</TitleBasic>
      <NormalText>Front-End Developer</NormalText>
    </div>
  );
};

export default ProfilePerson;
