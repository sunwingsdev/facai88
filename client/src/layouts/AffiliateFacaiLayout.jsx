import { Outlet } from "react-router-dom";

import AffiliateNavbar from "@/components/AffiliateFacai/AffiliateHeader/AffiliateNavbar";
import AffFooter from "@/components/AffiliateFacai/AffiliateFooter/AffFooter";
import { useContext, useState } from "react";
import { LanguageContext } from "@/Context/LanguageContext";
// import BDTModal from "@/components/BDTModalFacai/BDTModalFacai";
import BDTModalFacai from "@/components/BDTModalFacai/BDTModalFacai";

const AffiliateFacaiLayout = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleOpenLanguage = () => {
    setIsOpenLanguage(true);
  };

  const toggleCloseLanguage = () => {
    setIsOpenLanguage(false);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
      <div className="App">
        <AffiliateNavbar toggleOpenLanguage={toggleOpenLanguage} />
        <main >
          <Outlet />
        </main>
        <AffFooter toggleOpenLanguage={toggleOpenLanguage} />
      </div>

      <BDTModalFacai
              isOpenLanguage={isOpenLanguage}
              toggleCloseLanguage={toggleCloseLanguage}
              currentLang={language}
              toggleLanguage={toggleLanguage}
              setLanguage={setLanguage} // ✅ Pass this function
            />
    </>
  );
};

export default AffiliateFacaiLayout;
