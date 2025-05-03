import React, { useState } from "react";
import { Link } from "react-router-dom";

const AffiliateBottomNavbarTwo = ({ navItems }) => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="bg-componentBgPrimary ">
      <div className="flex justify-start mx-auto max-w-7xl px-2">
        {navItems.map(({ title, icon, link }) => (
          <div key={title} className="flex items-center">
            <Link
              to={title.link}
              onClick={() => setActiveTab(title)}
              className={`flex items-center gap-1 px-6 py-4  
          ${
            title === "Promotions"
              ? "bg-gold-gradient font-semibold"
              : activeTab === title
              ? "text-textSecondaryColor border-textSecondaryColor bg-primary-primaryColorTwo border-b-2"
              : "text-gray-300 hover:bg-primary-primaryColorTwo hover:border-textSecondaryColor hover:border-b-2 hover:text-white"
          }`}
            >
              {icon ? icon : <span className="text-sm">{title}</span>}
            </Link>
            <p className="text-white">|</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliateBottomNavbarTwo;
