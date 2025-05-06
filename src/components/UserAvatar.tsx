import Image from "next/image";
import img from "../components/images/img.jpg";
interface UserAvatarProps {
  name: string;
  imageUrl: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name }) => {
  return (
    <div className="flex items-center space-x-2 rounded-lg px-2 py-0.5 shadow-sm bg-white">
      <Image
        src={img}
        alt={`${name}'s Avatar`}
        width={38}
        height={38}
        className="rounded-full object-cover"
      />
      <span className="text-black font-bold text-sm whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default UserAvatar;
