import image1 from "../../../assets/v2/pay16.png";
import image2 from "../../../assets/v2/pay22.png";
import image3 from "../../../assets/v2/pay33.png";
import image4 from "../../../assets/v2/pay33.png";
import image5 from "../../../assets/v2/pay45.png";
import image6 from "../../../assets/v2/pay59.png";
import image7 from "../../../assets/v2/pay60.png";
import image8 from "../../../assets/v2/pay61.png";
import image9 from "../../../assets/v2/pay47.png";
import image10 from "../../../assets/v2/pay91.png";

import logo1 from "../../../assets/v2/gamcare.png";
import logo2 from "../../../assets/v2/age-limit.png";
import logo3 from "../../../assets/v2/regulations.png";

import logo4 from "../../../assets/v2/facebook.png";
import logo5 from "../../../assets/v2/instagram.png";
// import logo6 from "../../../assets/v2/twitter.png";
// import logo7 from "../../../assets/v2/pinterest.png";
import logo8 from "../../../assets/v2/youtube.png";
import logo9 from "../../../assets/v2/telegram-channel.png";
import { LanguageContext } from "@/Context/LanguageContext";
import { useContext } from "react";

const FooterDeposit = () => {
  const { language } = useContext(LanguageContext);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const responsibleData = [logo1, logo2, logo3];
  const communityData = [logo4, logo5, logo8, logo9];

  return (
    <div className="mx-2">
      <h2 className="text-textSecondaryColor text-sm mt-2">
        {language === "bn" ? "পেমেন্ট মেথডস" : "Payment Methods"}
      </h2>

      <div className="grid grid-cols-4 w-[70%] items-center gap-2">
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className={` ${index === 7 ? " mx-auto w-[25px]" : "w-16"} `}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 mt-5">
        <div>
          <h2 className="text-textSecondaryColor text-sm my-2">
            {language === "bn" ? "দায়িত্বশীল গেম্বলিং" : "Responsible Gambling"}
          </h2>
          <div className="flex flex-row items-center gap-3">
            {responsibleData.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="w-6" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-textSecondaryColor text-sm my-2">
            {language === "bn" ? "কমিউনিটি ওয়েবসাইট" : "Community Websites"}
          </h2>
          <div className="grid grid-cols-4 w-[60%] items-center gap-2">
            {communityData.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="w-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDeposit;
