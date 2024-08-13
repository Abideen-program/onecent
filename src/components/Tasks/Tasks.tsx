import { useState } from "react";
import { iconImages } from "../../utilities/images";
// import ComingSoon from "../ComingSoon";
import Navigators from "../Navigators";
import { tasks } from "../../utilities/DummyData";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState(tasks);
  const [points, setPoints] = useState(0);

  const handleStart = (id: number) => {
    setAllTasks(
      allTasks.map((task) =>
        task.id === id ? { ...task, status: "inProgress" } : task
      )
    );
  };

  const handleClaim = (id: number, point: number) => {
    setAllTasks(
      allTasks
        .map((task) => (task.id === id ? { ...task, status: "claimed" } : task))
        .sort((a, b) => {
          if (a.status === b.status) {
            return 0;
          }
          return a.status === "claimed" ? 1 : -1;
        })
    );

    setPoints((prevValue) => prevValue + point);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-full text-[#FFFFFF] flex flex-col max-w-xl p-6  relative scrollbar-none bg-[url('/images/bg.png')] bg-fixed bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col gap-8 mb-[95px]">
          <div className="flex flex-col items-center gap-1 mx-auto">
            <p className="text-sm font-thin">Total CENT Points</p>
            <div className="flex items-center justify-between gap-1">
              <img src={iconImages.Cent} alt="cent" className="" />
              <p className="font-bold text-[24px]">{points.toLocaleString()}</p>
            </div>
            <p className="text-xs leading-[18px] font-thin text-center">
              Earn some CENTs by completing simple tasks
            </p>
            <p className="text-sm font-extrabold text-center gradient-text">
              How it works?
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {allTasks?.map((task, index) => {
              return (
                <TaskItem
                  key={index}
                  id={task.id}
                  name={task.name}
                  status={task.status}
                  icon={task.icon}
                  point={task.point}
                  handleStart={handleStart}
                  handleClaim={handleClaim}
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
