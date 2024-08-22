import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { iconImages } from "../utilities/images";

const Navigators = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center justify-between fixed right-0 left-0 bottom-0 max-w-xl mx-auto px-6 py-2 rounded-md bg-[#111111]">
      <div className="flex flex-col items-center gap-1">
        <Link to="/">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#222222]`}
          >
            <img
              src={pathname === "/" ? iconImages.Cent : iconImages.Cent}
              className="w-6"
              alt="game"
            />
          </motion.div>
        </Link>
        <p className="text-xs font-medium">Earn</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/play">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#222222]`}
          >
            <img
              src={pathname === "/play" ? iconImages.GameActive : iconImages.Game}
              className="w-6"
              alt="game"
            />
          </motion.div>
        </Link>
        <p className="text-xs font-medium">Play</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/tasks">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#222222]`}
          >
            <img
              src={
                pathname === "/tasks" ? iconImages.TaskActive : iconImages.Task
              }
              className="w-6"
              alt="tasks"
            />
          </motion.div>
        </Link>
        <p className="text-xs font-medium">Tasks</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/friends">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#222222]`}
          >
            <img
              src={
                pathname === "/friends"
                  ? iconImages.FriendsActive
                  : iconImages.Friends
              }
              className="w-6"
              alt="tasks"
            />
          </motion.div>
        </Link>
        <p className="text-xs font-medium">Friends</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/profiles">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center bg-[#222222]`}
          >
            <img
              src={
                pathname === "/profiles"
                  ? iconImages.ProfileActive
                  : iconImages.Profile
              }
              className="w-6"
              alt="tasks"
            />
          </motion.div>
        </Link>
        <p className="text-xs font-medium">Profile</p>
      </div>
    </div>
  );
};

export default Navigators;
