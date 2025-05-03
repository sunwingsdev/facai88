import React from "react";
import AffiliateTopNavbar from "./AffiliateTopNavbar";
import AffiliateBottomNavbar from "./AffiliateBottomNavbar";
import AffiliateBottomNavbarTwo from "./AffiliateBottomNavbarTwo";
import AffiliatePhoneNavbar from "./AffiliatePhoneNavbar";
import { AiFillHome } from "react-icons/ai";

const AffiliateNavbar = () => {
    const navItems = [
      { title: "Home", icon: <AiFillHome className="text-xl" />,link:"" },
      { title: "Commissions",link:"" },
      { title: "Promotions",link:"" },
      { title: "Product",link:"" },
      { title: "Affiliate Guides",link:"" },
      { title: "Contact Us",link:"" },
    ];
  return (
    <div>
      <div className="hidden md:block">
        <AffiliateTopNavbar />
        <AffiliateBottomNavbar />
        <AffiliateBottomNavbarTwo navItems={navItems}/>
      </div>
      <div className="md:hidden">
        <AffiliatePhoneNavbar navItems={navItems}/>
      </div>
      
    </div>
  );
};

export default AffiliateNavbar;
