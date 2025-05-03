import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import affiliateLogo from "../../../assets/v2/MCW_Aff_Logo.png";

const AffiliatePhoneNavbar = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <div className="bg-primary-primaryColor">
        <div className="flex justify-between items-center p-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt2 className="text-textSecondaryColor w-6 h-6" />
          </button>

          <div className="w-[40%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>

          <div className="text-textSecondaryColor flex flex-col items-center">
            <MdOutlineMessage className="text-2xl" />
            <div className="text-[10px] flex flex-col leading-tight">
              <p>AFFILIATE</p>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full  bg-primary-primaryColor shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center px-4 p-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-xl text-textSecondaryColor"
          >
            ✕
          </button>

          <div className="w-[40%]">
            <img src={affiliateLogo} alt="" className="w-full" />
          </div>

          <div className="text-textSecondaryColor flex flex-col items-center">
            <MdOutlineMessage className="text-2xl" />
            <div className="text-[10px] flex flex-col leading-tight">
              <p>AFFILIATE</p>
              <p>SUPPORT</p>
            </div>
          </div>
        </div>
        <ul className="">
          {navItems.map(({ title, link }) => (
            <div key={title}>
              <li>
                <Link
                  to={title.link}
                  className={`flex items-center text-lg p-3 text-white
            ${
              title === "Promotions"
                ? "bg-gold-gradient font-semibold"
                : activeTab === title
                ? "text-textSecondaryColor border-textSecondaryColor bg-primary-primaryColorTwo border-b-2"
                : "text-gray-300 hover:bg-primary-primaryColorTwo hover:border-textSecondaryColor border-b  border-white border-opacity-20 hover:border-b-2"
            }`}
                  onClick={() => {
                    setActiveTab(title);
                    setIsOpen(false);
                  }}
                >
                  <span>{title}</span>
                </Link>
              </li>
            </div>
          ))}

          {/* 🔻 Hardcoded "Download App" item */}
          <li>
            <Link
              to="/"
              className="flex items-center text-lg p-3 text-gray-300 hover:bg-primary-primaryColorTwo hover:border-textSecondaryColor border-b  border-white border-opacity-20 hover:border-b-2"
              onClick={() => setIsOpen(false)}
            >
              <span>Download App</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar open */}
      {/* {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )} */}
    </>
  );
};

export default AffiliatePhoneNavbar;
