import { iconImages } from "../../utilities/images";
// import ComingSoon from "../ComingSoon";
import Navigators from "../Navigators";
import { tasks } from "../../utilities/DummyData";

const Tasks = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-full text-[#FFFFFF] flex flex-col max-w-xl p-6  relative scrollbar-none">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-1 mx-auto border">
            <p className="text-sm font-thin">Total CENT Points</p>
            <div className="flex items-center justify-between gap-1">
              <img src={iconImages.Cent} alt="cent" className="" />
              <p className="font-bold text-[24px]">100,000,000</p>
            </div>
            <p className="text-xs leading-[18px] font-thin text-center">
              Earn some CENTs by completing simple tasks
            </p>
            <p className="text-sm font-extrabold text-center gradient-text">
              How it works?
            </p>
          </div>

          <div className="border flex flex-col gap-5">
            {tasks.map((task) => {
              return (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={iconImages.Shib} alt="shib" className="" />
                    <div className="flex flex-col gap-1">
                      <p className="text-xs leading-[18px] font-thin">
                        Buy CENT on ShibaSwap
                      </p>
                      <div className="flex items-center gap-1">
                        <img
                          src={iconImages.Cent}
                          alt="center"
                          className="w-4"
                        />
                        <p className="text-xs leading-[18px] font-thin">
                          +1000
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="text-sm py-2 px-4 rounded-lg bg-[#222222]">
                    Start
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        {/* <ComingSoon /> */}
        <Navigators />
      </div>
    </div>
  );
};

export default Tasks;
