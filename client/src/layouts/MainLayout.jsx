import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import { useEffect, useState } from "react";
import MenuMobile from "@/components/home/MenuMobile/MenuMobile";
import Header from "@/components/shared/header/Header";
import Footer2 from "@/components/shared/Footer/Footer2";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";

const MainLayout = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { data: allCategories } = useGetAllCategoriesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();

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
          <Outlet context={{ menuItems }} />
        </main>
        <Footer2 />
        {/* <MobileColar /> */}
        <MenuMobile />
      </div>
    </>
  );
};

export default MainLayout;
