import React from "react";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png"

const AffiliateBottomNavbar = () => {
  return (
    <div className="bg-[#212335] py-2">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
        <div>
          <img src={affiliateLogo} alt="" className="w-[20%]" />
        </div>
        <div className="flex text-white gap-2 whitespace-nowrap">
          <p className="px-7 py-1 bg-white-to-darkblue   hover:border border border-transparent rounded cursor-pointer">
            লগ ইন
          </p>

          <p className="px-7 py-1 bg-gold-gradient   hover:border border border-transparent rounded cursor-pointer">
            সাইন আপ
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateBottomNavbar;
