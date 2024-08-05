import { iconImages } from "../../utilities/images";
// import ComingSoon from "../ComingSoon";
import Navigators from "../Navigators";

const Tasks = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-screen text-[#FFFFFF] flex flex-col gap-4 max-w-xl px-6 py-4 relative">
        <div className="flex flex-col items-center gap-2 mx-auto border">
          <p className="text-sm font-thin">Total CENT Points</p>
          <div className="flex items-center justify-between gap-1">
            <img src={iconImages.Cent} alt="cent" className="" />
            <p className="font-extrabold text-[25px]">100,000,000</p>
          </div>
          <p className="text-[13px] font-thin text-center">
            Earn some CENTs by completing simple tasks
          </p>
          <p className="text-sm font-extrabold text-center gradient-text">How it works?</p>
        </div>

        <div className="border"></div>
        {/* <ComingSoon /> */}
        <Navigators />
      </div>
    </div>
  );
};

export default Tasks;
