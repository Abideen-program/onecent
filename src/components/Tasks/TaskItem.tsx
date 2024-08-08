// import { useState } from "react";
import { motion } from "framer-motion";

import { iconImages } from "../../utilities/images";

const TaskItem = ({
  name,
  icon,
  status,
  id,
  point,
  handleClaim,
  handleStart,
}: task) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={icon} alt="shib" className="" />
        <div className="flex flex-col gap-1">
          <p className="text-xs leading-[18px] font-thin">{name}</p>
          <div className="flex items-center gap-1">
            <img src={iconImages.Cent} alt="center" className="w-4" />
            <p className="text-xs leading-[18px] font-thin">+{point}</p>
          </div>
        </div>
      </div>
      {status === "notStarted" && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-sm py-2 px-4 rounded-lg bg-[#222222]"
          onClick={() => handleStart(id)}
        >
          Start
        </motion.button>
      )}

      {status === "inProgress" && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-sm py-2 px-4 rounded-lg progress-gradient"
          onClick={() => handleClaim(id, point)}
        >
          Claim
        </motion.button>
      )}

      {status === "claimed" && (
        <img src={iconImages.Checked} alt="shib" className="" />
      )}
    </div>
  );
};

export default TaskItem;
