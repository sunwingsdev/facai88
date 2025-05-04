import React, { useContext } from "react";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png";
import brandLogo from "../../../assets/v2/NC_entrypage-banner.png";
import AffMobileFooter from "./AffMobileFooter";
import { LanguageContext } from "@/Context/LanguageContext"; // Importing LanguageContext

const AffFooter = ({ toggleOpenLanguage }) => {
  const { language } = useContext(LanguageContext); // Getting current language

  return (
    <div>
      {/* large Design */}
      <div className="bg-primary-primaryColor py-4 hidden md:block">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
          <div className="w-[20%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>
          <div className="whitespace-nowrap flex flex-col items-center text-white">
            <p>{language === "en" ? "Official Brand Partner" : "অফিশিয়াল ব্র্যান্ড পার্টনার"}</p>
            <img src={brandLogo} alt="" className="w-[30%]" />
          </div>
          <div>
            <p className="text-white whitespace-nowrap">
              <strong className="text-textSecondaryColor">
                {language === "en" ? "Payment Agent Partnership" : "পেমেন্ট এজেন্ট পার্টনারশিপ"}
              </strong>{" "}
              |{" "}
              <strong className="text-textSecondaryColor">
                {language === "en" ? "Terms & Conditions" : "টার্মস এবং কন্ডিশনস"}
              </strong>
            </p>
            <p className="text-white">
              {language === "en" ? "© 2022 MCW Copyrights. All Rights Reserved" : "© ২০২২ এমসিডব্লিউ কপিরাইট। সকল অধিকার সংরক্ষিত"}
            </p>
          </div>
        </div>
      </div>

      {/* small Design */}
      <div className="md:hidden">
        <AffMobileFooter toggleOpenLanguage={toggleOpenLanguage} />
      </div>
    </div>
  );
};

export default AffFooter;
