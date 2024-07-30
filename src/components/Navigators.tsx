import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { iconImages } from "../utilities/images";

const Navigators = () => {
  const { pathname } = useLocation();

  return (
    <div className="mt-auto flex items-center justify-between">
      <div className="flex flex-col items-center gap-1">
        <Link to="/">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center bg-[#222222]`}
          >
            <img
              src={pathname === "/" ? iconImages.GameActive : iconImages.Game}
              className="w-6"
              alt="game"
            />
          </motion.div>
        </Link>
        <p className="text-sm font-medium">Play</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/tasks">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center bg-[#222222]`}
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
        <p className="text-sm font-medium">Tasks</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/friends">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center bg-[#222222]`}
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
        <p className="text-sm font-medium">Freinds</p>
      </div>

      <div className="flex flex-col items-center gap-1">
        <Link to="/profiles">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className={`w-[55px] h-[55px] rounded-lg flex items-center justify-center bg-[#222222]`}
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
        <p className="text-sm font-medium">Profiles</p>
      </div>
    </div>
  );
};

export default Navigators;
