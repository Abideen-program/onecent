// import ComingSoon from "../ComingSoon";
import { iconImages } from "../../utilities/images";
import Navigators from "../Navigators";
import FriendItem from "./FriendItem";
import { motion } from "framer-motion";

const Freinds = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-full text-[#FFFFFF] flex flex-col max-w-xl p-6  relative scrollbar-none bg-[url('/images/bg.png')] bg-fixed bg-no-repeat bg-center bg-cover bg-opacity-95">
        {/* <ComingSoon /> */}
        <div className="flex flex-col gap-3 mb-[60px]">
          <div className="flex items-center justify-center">
            <img src={iconImages.FriendIcon} alt="friend icon" />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center justify-center gap-1">
              <h1 className="font-bold text-xl">Invite Friends</h1>
              <p className="text-[11px] font-light">
                Invite your friends and you earn some more CENTs
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-lg px-2 py-2 bg-[#000000]">
                <img src={iconImages.Gift} alt="gift" className="w-10" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold">Invite a Friend</p>
                  <div className="flex items-center gap-1">
                    <img src={iconImages.Cent} alt="gift" className="w-4" />
                    <p className="text-xs font-light">
                      +1,000 for you and your friend
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-lg px-2 py-2 bg-[#000000]">
                <img src={iconImages.Gift} alt="gift" className="w-10" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold">
                    Invite a Friend with Telegram Premium
                  </p>
                  <div className="flex items-center gap-1">
                    <img src={iconImages.Cent} alt="gift" className="w-4" />
                    <p className="text-xs font-light">
                      +10,000 for you and your friend
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-1">
            <h2 className="text-sm font-bold">3 REFERRALS</h2>
            <div className="flex flex-col gap-2">
              <FriendItem name="Nonso.shib" level="Cent Newbie - Lvl1" />
              <FriendItem name="Shibspain" level="Cent Major- Lvl8" />
              <FriendItem name="Waldo" level="Cent General - Lvl10" />

              <div className="flex items-center justify-between">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-semibold w-[80%] px-[10px] py-2 border rounded-lg bg-custom-gradient"
                >
                  Invite A Friend
                </motion.button>
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer bg-custom-gradient"
                >
                  <img src={iconImages.Copy} alt="Copy" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <Navigators />
      </div>
    </div>
  );
};

export default Freinds;
