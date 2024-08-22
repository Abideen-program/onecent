import { useState } from "react";
import Navigators from "../Navigators";
import LanguageItem from "./LanguageItem";

const Languages = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="flex justify-center">
      <div className="bg-[#000000] w-full h-full text-[#FFFFFF] flex flex-col max-w-xl py-6  relative scrollbar-none bg-[url('/images/bg.png')] bg-fixed bg-no-repeat bg-center bg-cover bg-opacity-95">
        {/* <ComingSoon /> */}
        <div className="flex flex-col gap-3 mb-[60px]">
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold mx-6">Language</h2>
              <LanguageItem
                name="English"
                handleChange={() => setSelectedLanguage("English")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Francais"
                handleChange={() => setSelectedLanguage("Francais")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Deutsch"
                handleChange={() => setSelectedLanguage("Deutsch")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Espanol / Spanish"
                handleChange={() => setSelectedLanguage("Espanol / Spanish")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Portugues"
                handleChange={() => setSelectedLanguage("Portugues")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Indonesian"
                handleChange={() => setSelectedLanguage("Indonesian")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Mandarin"
                handleChange={() => setSelectedLanguage("Mandarin")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Tieng Viet"
                handleChange={() => setSelectedLanguage("Tieng Viet")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Chinese"
                handleChange={() => setSelectedLanguage("Chinese")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Russian"
                handleChange={() => setSelectedLanguage("Russian")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Hindi"
                handleChange={() => setSelectedLanguage("Hindi")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Arabic"
                handleChange={() => setSelectedLanguage("Arabic")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="German"
                handleChange={() => setSelectedLanguage("German")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Turkish"
                handleChange={() => setSelectedLanguage("Turkish")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Japanese"
                handleChange={() => setSelectedLanguage("Japanese")}
                selectedLanguage={selectedLanguage}
              />
              <LanguageItem
                name="Vietnamese"
                handleChange={() => setSelectedLanguage("Vietnamese")}
                selectedLanguage={selectedLanguage}
              />
            </div>
          </div>
        </div>
        <Navigators />
      </div>
    </div>
  );
};

export default Languages;
