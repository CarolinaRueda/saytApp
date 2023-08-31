import Image from "next/image";
import Logo from "../images/logo.png";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

export const PrincipalPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={Logo} width={150} height={100} alt="logo" />
      <p className="p-10 text-center text-2xl italic text-[#347355]">
        A place to write your thoughts, <br /> or your favorite's quotes from
        books <br /> or songs.
      </p>
      <p className="text-center text-xl font-medium  text-[#CCC]">
        You can login with:
      </p>
      <div className="flex gap-14 p-10">
        <IconBrandDiscord size={38} color="#347355" />
        <IconBrandGithub size={38} color="#347355" />
        <IconBrandGoogle size={38} color="#347355" />
      </div>
    </div>
  );
};
