import { LanguageContext } from '@/Context/LanguageContext';
import React, { useContext } from 'react';
import bnFlag from "../../../assets/v2/bn-flag.jpg";

const AffMobileFooter = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="sticky bottom-0 z-40 flex flex-row items-center justify-center   text-white font-bold md:hidden">

            <span className="font-semibold bg-gray-200 flex items-center justify-center w-1/3 py-4 gap-1 cursor-pointer">
                        <img src={bnFlag} alt="" className="h-6" />
                        <span
                          className="text-black text-center text-sm
                        "
                        //   onClick={toggleOpenLanguage}
                        >
                          English 
                        </span>
                      </span>
            
                      <div
                        // onClick={() => setIsModalOpen(true)}
                        className="w-1/3 bg-primary-primaryColorTwo py-4 text-center"
                        
                      >
                        {language === "en" ? "Sign up" : "সাইন আপ "}
                      </div>
            
                      <div
                    //   onClick={() => setIsModalLoginOpen(true)}
                        className="w-1/3 bg-backgroundSecondaryColor py-4 text-center text-white"
                        
                      >
                        {language === "en" ? "Login" : "লগ ইন"}
                      </div>
            
        </div>
    );
};

export default AffMobileFooter;