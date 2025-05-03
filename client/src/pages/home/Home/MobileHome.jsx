import { useOutletContext } from "react-router-dom";
import HomeFavorite from "./HomeFavorite";
import HomeFeatures from "./HomeFeatures";
import HomeTabs from "./HomeTabs";
import ImageSlider from "./ImageSlider";
import Marquee from "./Marquee";

import { CardSlider } from "@/components/home/CardSlider/CardSlider";

const MobileHome = () => {
  const { menuItems } = useOutletContext();
  
  return (
    <div className="bg-primary-primaryColor">
      <ImageSlider />
      <Marquee />
      <HomeTabs menuItems={menuItems} />
      <HomeFavorite />
      
      <HomeFeatures />
    </div>
  );
};

export default MobileHome;
