import image1 from "../../../assets/v2/image_222583.jpg";
import image2 from "../../../assets/v2/image_222713.jpg";
import image3 from "../../../assets/v2/image_222687.jpg";
import { LanguageContext } from "@/Context/LanguageContext";
import { useContext } from "react";

const HomeFavorite = () => {
  const images = [image1, image2, image3];
  const { language } = useContext(LanguageContext);
  return (
    <div className="bg-componentBgSecondary mt-2 py-2">
      <div className="px-2">
        <h2 className="text-white border-l-4 px-2 border-textSecondaryColor text-base font-bold my-4">
          {language === "en" ? "Favorites":"প্রিয় "}
        </h2>
        <div className="flex flex-row gap-3   overflow-x-auto ">
          {images.map((image, index) => (
            <div key={index} className="w-full min-w-[250px]">
              <img src={image} alt="" className="w-full rounded-lg " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFavorite;
