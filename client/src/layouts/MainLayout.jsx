import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import MenuMobile from "@/components/home/MenuMobile/MenuMobile";
import Header from "@/components/shared/header/Header";
import Footer2 from "@/components/shared/Footer/Footer2";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";
import BDTModal from "@/components/BDTModal/BDTModat";
import { LanguageContext } from "@/Context/LanguageContext";

const MainLayout = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { data: allCategories } = useGetAllCategoriesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();

  const toggleOpenLanguage = () => {
    setIsOpenLanguage(true);
  };

  const toggleCloseLanguage = () => {
    setIsOpenLanguage(false);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hideCommonComponents = isMobile && location.pathname === "/register";

  const menuItems = allCategories?.map((category) => ({
    ...category,
    subCategories: allSubCategories?.filter(
      (subCat) => subCat.category === category.name
    ),
  }));

  return (
    <>
      <div className="relative hidden md:block">
        {!hideCommonComponents && <Navbar menuItems={menuItems} />}
        <Outlet context={{ menuItems }} />
        {!hideCommonComponents && <Footer />}
        {!hideCommonComponents && <MenuMobile />}
      </div>
      <div className="relative block md:hidden">
        <Header menuItems={menuItems} />
        <main>
          <Outlet
            context={{ menuItems }}
          />
        </main>
        <Footer2 />
        {/* <MobileColar /> */}
        <MenuMobile
        toggleOpenLanguage={toggleOpenLanguage}
        />
      </div>
      <BDTModal
        isOpenLanguage={isOpenLanguage}
        toggleCloseLanguage={toggleCloseLanguage}
        currentLang={language}
        toggleLanguage={toggleLanguage}
        setLanguage={setLanguage} // ✅ Pass this function
      />
    </>
  );
};

export default MainLayout;
