import { AUTHOR } from "@/app/constants";
import Image from "next/image";

interface AuthorAvatarProps {
  alt?: string;
  fileName?: string;
}

const AuthorAvatar = ({
  alt = AUTHOR.NAME,
  fileName = AUTHOR.AVATAR,
}: AuthorAvatarProps) => {
  return (
    <Image
      alt={alt}
      height={144}
      priority
      src={`/images/${fileName}`}
      width={144}
    />
  );
};

export default AuthorAvatar;
