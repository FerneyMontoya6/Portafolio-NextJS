import Image from "next/image";

const ProfilePicture = ({ src, alt }: { src: any; alt: string }) => {
  return (
    <div className="w-36 h-36 bg-gray-200 rounded-full relative mb-6">
      <Image
        src={src}
        alt={alt}
        priority
        className="rounded-full"
        fill
        style={{ objectFit: "contain" }}
        sizes="w-40"
      />
      <div
        className="w-4 h-4 rounded-full  absolute bottom-4 right-3"
        style={{ backgroundColor: "#7eb941" }}
      ></div>
    </div>
  );
};

export default ProfilePicture;
