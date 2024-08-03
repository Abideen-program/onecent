import ComingSoon from "../ComingSoon";
import Navigators from "../Navigators";

const Freinds = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-screen text-[#FFFFFF] flex flex-col gap-3 max-w-xl px-6 py-2 relative">
        <ComingSoon />
        <Navigators />
      </div>
    </div>
  );
};

export default Freinds;
