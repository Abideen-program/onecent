import ComingSoon from "../ComingSoon";
import Navigators from "../Navigators";

const Play = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-screen text-[#FFFFFF] flex flex-col items-center justify-center max-w-xl py-6  relative scrollbar-none bg-[url('/images/bg.png')] bg-fixed bg-no-repeat bg-center bg-cover bg-opacity-95">
        <ComingSoon />

        <Navigators />
      </div>
    </div>
  );
};

export default Play;
