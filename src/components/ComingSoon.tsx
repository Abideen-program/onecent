
import { iconImages } from "../utilities/images";

const ComingSoon = () => {
  return (
    <div className="m-auto flex flex-col items-center animate-pulse">
      <img src={iconImages.CentLogo} alt="logo" className="w-[200px]" />
      <div className="flex flex-col items-center justify-center">
        <p className="font-extrabold text-[30px]">COMING</p>
        <p className="font-extrabold text-[30px]">SOON</p>
      </div>
    </div>
  );
};

export default ComingSoon;
