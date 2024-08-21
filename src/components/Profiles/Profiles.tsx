// import ComingSoon from "../ComingSoon";
import { iconImages } from "../../utilities/images";
import Navigators from "../Navigators";
import ProfilesItem from "./ProfilesItem";
// import { motion } from "framer-motion";

const Profiles = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-full text-[#FFFFFF] flex flex-col max-w-xl py-6  relative scrollbar-none bg-[url('/images/bg.png')] bg-fixed bg-no-repeat bg-center bg-cover bg-opacity-95">
        {/* <ComingSoon /> */}
        <div className="flex flex-col gap-3 mb-[60px]">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="flex flex-col items-center justify-center relative">
                <img src={iconImages.BigSamuri} alt="samurai" />

                <label
                  htmlFor="file"
                  className="absolute top-24 right-2 cursor-pointer"
                >
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    accept="image/*,video/*"
                  />
                  <div className="h-6 w-6 rounded-full border border-[#C2C2C2] flex items-center justify-center bg-[#000]">
                    <img src={iconImages.Camera} alt="camera" />
                  </div>
                </label>
              </div>

              <div className="flex flex-col items-center gap-1">
                <p className="font-bold text-sm">@Joe.shib</p>
                <p className="text-xs text-[#808080]">Cent General- Lvl 10</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold mx-6">General</h2>
              <ProfilesItem
                leftIcon={iconImages.Bell}
                name="Notifications"
                rightIcon={iconImages.Toggle}
              />
              <ProfilesItem
                leftIcon={iconImages.Sound}
                name="Sound"
                rightIcon={iconImages.Toggle}
              />
              <ProfilesItem
                leftIcon={iconImages.Language}
                name="Language"
                rightIcon={iconImages.ArrowRight}
                href="/languages"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold mx-6">About</h2>
              <ProfilesItem
                leftIcon={iconImages.X}
                name="X"
                rightIcon={iconImages.ArrowRight}
                alias="(Twitter)"
                href="https://x.com/1cDream"
              />
              <ProfilesItem
                leftIcon={iconImages.Telegram}
                name="Telegram"
                rightIcon={iconImages.ArrowRight}
                href="https://t.me/CENT_1CENTDREAM"
              />
              <ProfilesItem
                leftIcon={iconImages.Read}
                name="Read Whitepaper"
                rightIcon={iconImages.ArrowRight}
              />
            </div>
          </div>
        </div>
        <Navigators />
      </div>
    </div>
  );
};

export default Profiles;
