import React from "react";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png";
import brandLogo from "../../../assets/v2/NC_entrypage-banner.png";
import AffMobileFooter from "./AffMobileFooter";

const AffFooter = () => {
  return (
    <div>
      {/* large Design   */}
      <div className="bg-primary-primaryColor py-4 hidden md:block">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
          <div className="w-[20%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>
          <div className="whitespace-nowrap flex flex-col items-center text-white">
            <p>Official Brand Partner</p>
            <img src={brandLogo} alt="" className="w-[30%]" />
          </div>
          <div>
            <p className="text-white whitespace-nowrap">
              <strong className="text-textSecondaryColor">
                Payment Agent Partnership
              </strong>{" "}
              |{" "}
              <strong className="text-textSecondaryColor">
                Terms & Conditions
              </strong>
            </p>
            <p className="text-white">
              © 2022 MCW Copyrights. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      {/* small Design */}
      <div className="md:hidden">
       
      <AffMobileFooter />
       
      </div>
    </div>
  );
};

export default AffFooter;
