import { LanguageContext } from "@/Context/LanguageContext";
import React, { useContext } from "react";

const FooterFaq = () => {
  const { language } = useContext(LanguageContext);

  const datas = language === "bn"
    ? [
        "দায়িত্বশীল গেমিং",
        "আমাদের সম্পর্কে",
        "নিরাপত্তা",
        "প্রাইভেসি নীতিমালা",
        "সাধারণ প্রশ্নাবলি",
      ]
    : [
        "Responsible Gaming",
        "About Us",
        "Security",
        "Privacy Policy",
        "FAQ",
      ];

  return (
    <div className="border-t mt-5 py-4 px-2 border-white border-opacity-50">
      <div className="grid grid-cols-3 gap-2 items-center">
        {datas.map((data, index) => (
          <div
            key={index}
            className="text-textSecondaryColor border-l-2 border-textSecondaryColor text-xs px-2"
          >
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFaq;
