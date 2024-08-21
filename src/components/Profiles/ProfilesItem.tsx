import { Link } from "react-router-dom";

const ProfilesItem = ({
  leftIcon,
  name,
  rightIcon,
  alias,
  href,
}: ProfileItem) => {
  return (
    <div className="flex items-center justify-between bg-[#000000]  px-6 py-4">
      <div className="flex items-center gap-2">
        <img src={leftIcon} alt={name} className="" />
        <p className="text-sm font-medium text-white">
          {name} {alias}
        </p>
      </div>

      <Link to={href!}>
        <img src={rightIcon} alt="toggle" className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default ProfilesItem;
