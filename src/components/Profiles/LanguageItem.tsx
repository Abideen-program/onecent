import { iconImages } from "../../utilities/images";

const LanguageItem = ({
  name,
  handleChange,
  selectedLanguage,
}: LanguageItem) => {
  
  return (
    <div
      className="flex items-center justify-between bg-[#000000]  px-6 py-4"
      onClick={handleChange}
    >
      <p className="text-sm font-medium text-white">{name}</p>

      {selectedLanguage === name && (
        <img src={iconImages.Check} alt="toggle" className="cursor-pointer" />
      )}
    </div>
  );
};

export default LanguageItem;
