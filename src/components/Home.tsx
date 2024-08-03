import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { iconImages } from "../utilities/images";
import { levelNames, levelMinPoints } from "../utilities/DummyData";
import Navigators from "./Navigators";

const Home = () => {
  const [levelIndex, setLevelIndex] = useState<number>(0); //Holds the level number of the user
  const [points, setPoints] = useState<number>(4060); //TOtal accumulate points by the user
  const [energy, setEnergy] = useState<number>(1000); //Current energy level of the user
  const [totalEnergy, setTotalEnergy] = useState<number>(1000); //Current total energy level of the user
  const [pointsToAdd, setPointsToAdd] = useState<number>(111); //Points to be added on each click.
  const [energySpeed] = useState<number>(1); // The rate at which the user energy bar filled up.

  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  ); //Store each clicks by the user

  const calculateProgress = (): number => {
    //This is a function to calculate the progress bar.
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex]; // minimum point for the user current level
    const nextLevelMin = levelMinPoints[levelIndex + 1]; // minimum point need for the user to proceed to next level
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  const handleTapping = (e: React.MouseEvent<HTMLDivElement>) => {
    if (energy > pointsToAdd) {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect(); //returns an object with properties like top, left, width, and height
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${
        -y / 10
      }deg) rotateY(${x / 10}deg)`;

      setTimeout(() => {
        card.style.transform = "";
      }, 100);

      setPoints(points + pointsToAdd);
      setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);

      setEnergy((prevValue) => prevValue - pointsToAdd);
    }
  };

  const handleAnimationClicks = (id: number): void => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id)); // Helps in clearing clicks array
  };

  useEffect(() => {
    //This helps in refilling enery level of the user
    const interval = setInterval(() => {
      if (energy < totalEnergy) {
        setEnergy((preValue) => preValue + energySpeed);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [energy, totalEnergy]);

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex((prevValue) => prevValue + 1); //increase the levelindex by 1 to go to another stage
      setPointsToAdd((prevValue) => prevValue + 1); // increase added points on click by 1
      setTotalEnergy((prevValue) => prevValue + 500); // increase the total
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-screen text-[#FFFFFF] flex flex-col gap-3 max-w-xl px-6 py-2 relative">
        <div className="z-30 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <img src={iconImages.CentLogo} alt="logo" />
            <p className="tracking-tighter text">1 CENT</p>
          </div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            className="bg-[#222222] p-2 rounded-md flex items-center gap-2 cursor-pointer"
          >
            <img src={iconImages.Wallet} alt="wallet icon" />
            <p className="text-sm font-thin">Connect Wallet</p>
          </motion.div>
        </div>

        <div className="flex flex-col w-full mt-2">
          <div className="text-lg flex items-center justify-between">
            <p className="text-sm font-thin">{levelNames[levelIndex]}</p>
            <p className="flex items-center gap-2">
              <span className="text-sm font-thin">Level</span>
              <span className="text-sm font-medium">
                {levelIndex + 1} / {levelNames.length}
              </span>
            </p>
          </div>

          <div className="flex items-center mt-1 border border-[#808080] rounded-full">
            <div className="w-full h-2 bg-[#808080] rounded-full">
              <div
                className="progress-gradient h-2 rounded-full"
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col items-center mx-auto">
            <p className="text-sm font-thin">Total CENT Points</p>
            <div className="flex items-center justify-between gap-1">
              <img src={iconImages.Cent} alt="cent" className="" />
              <p className="font-extrabold text-[25px]">
                {points.toLocaleString()}
              </p>
            </div>
          </div>
          <div className=" flex items-center bg-[#0E0C0C] px-4 py-2 rounded-lg">
            <div className="flex flex-col">
              <p className="text-sm font-thin">Earn per tap</p>
              <p className="text-sm font-bold">{pointsToAdd}</p>
            </div>

            <div className="flex flex-col ml-auto">
              <p className="text-sm font-thin">CENT to level up</p>
              <p className="text-sm font-bold">
                {levelMinPoints[levelIndex + 1] - points > 0
                  ? (levelMinPoints[levelIndex + 1] - points).toLocaleString()
                  : 0}
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="relative mx-auto cursor-pointer">
            <div onClick={handleTapping}>
              <img src={iconImages.TapButton} alt="tap button" />
            </div>

            <div className="absolute -bottom-10 -right-1 flex items-center gap-1">
              <img src={iconImages.Trophy} className="w-7" alt="battery" />
              <p className="text-sm font-bold">RANK</p>
            </div>
          </div>

          <div className="full mt-5">
            <div className="w-[80%] mx-auto flex items-center justify-between">
              <div className="flex items-center">
                <img src={iconImages.Battery} className="w-7" alt="battery" />
                <p className="text-sm font-normal">
                  {energy < totalEnergy ? energy : totalEnergy}/{totalEnergy}
                </p>
              </div>

              <motion.div
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={iconImages.Boost} className="w-6" alt="boost" />
                <p className="text-sm font-bold">BOOST</p>
              </motion.div>
            </div>
          </div>
        </div>

        <Navigators />

        {clicks.map((click) => (
          <div
            key={click.id}
            className="absolute text-4xl font-bold opacity-0 text-white pointer-events-none"
            style={{
              top: `${click.y - 50}px`,
              left: `${click.x - 28}px`,
              animation: `float 1s ease-out`,
            }}
            onAnimationEnd={() => handleAnimationClicks(click.id)}
          >
            +{pointsToAdd}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
