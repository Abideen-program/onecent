import { iconImages } from "../../utilities/images";

const FriendItem = ({ name, level }: friend) => {
  return (
    <div className="flex items-center justify-between rounded-lg py-1 px-2 bg-[#222222]">
      <div className="flex items-center gap-2">
        <img src={iconImages.Samuri} alt="army" className="" />
        <div className="flex flex-col text-xs gap-1">
          <p className="font-semibold">{name}</p>
          <p className="font-light text-[#808080]">{level}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <img src={iconImages.Cent} alt="gift" className="w-4" />
        <p className="text-xs font-light">+1,000</p>
      </div>
    </div>
  );
};

export default FriendItem;
