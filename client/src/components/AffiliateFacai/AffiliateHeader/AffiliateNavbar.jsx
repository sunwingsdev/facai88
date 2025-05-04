import React, { useContext } from "react";
import AffiliateTopNavbar from "./AffiliateTopNavbar";
import AffiliateBottomNavbar from "./AffiliateBottomNavbar";
import AffiliateBottomNavbarTwo from "./AffiliateBottomNavbarTwo";
import AffiliatePhoneNavbar from "./AffiliatePhoneNavbar";
import { AiFillHome } from "react-icons/ai";
import { LanguageContext } from "@/Context/LanguageContext";

const AffiliateNavbar = ({ toggleOpenLanguage }) => {
  const { language } = useContext(LanguageContext);

  // EN এবং BN অনুযায়ী navItems এর title সেট করা হয়েছে
  const navItems = [
    {
      key: "home",
      title: { en: "Home", bn: "হোম" },
      icon: <AiFillHome className="text-xl" />,
      link: "",
    },
    {
      key: "commissions",
      title: { en: "Commissions", bn: "কমিশনস" },
      link: "",
    },
    {
      key: "promotions",
      title: { en: "Promotions", bn: "প্রমোশনস" },
      link: "",
    },
    {
      key: "product",
      title: { en: "Product", bn: "প্রোডাক্ট" },
      link: "",
    },
    {
      key: "guides",
      title: { en: "Affiliate Guides", bn: "অ্যাফিলিয়েট গাইডস" },
      link: "",
    },
    {
      key: "contact",
      title: { en: "Contact Us", bn: "যোগাযোগ করুন" },
      link: "",
    },
  ];
  

  return (
    <div>
      <div className="hidden md:block">
        <AffiliateTopNavbar toggleOpenLanguage={toggleOpenLanguage} />
        <AffiliateBottomNavbar />
        <AffiliateBottomNavbarTwo navItems={navItems} />
      </div>
      <div className="md:hidden">
        <AffiliatePhoneNavbar navItems={navItems} />
      </div>
    </div>
  );
};

export default AffiliateNavbar;
