import { iconImages } from "../../utilities/images";
// import ComingSoon from "../ComingSoon";
import Navigators from "../Navigators";
import { tasks } from "../../utilities/DummyData";
import TaskItem from "./TaskItem";

const Tasks = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-full text-[#FFFFFF] flex flex-col max-w-xl p-6  relative scrollbar-none">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-1 mx-auto">
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

          <div className="flex flex-col gap-5">
            {tasks.map((task, index) => {
              return (
                <TaskItem
                  key={index}
                  name={task.name}
                  status={task.status}
                  icon={task.icon}
                />
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
