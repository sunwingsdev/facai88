import { Outlet  } from "react-router-dom";

import AffiliateNavbar from "@/components/AffiliateFacai/AffiliateHeader/AffiliateNavbar";
import AffFooter from "@/components/AffiliateFacai/AffiliateFooter/AffFooter";

const AffiliateFacaiLayout = () => {
  return (
    <>
      <div className="">
        <AffiliateNavbar/>
        <div className="h-screen">
        
        <Outlet />
          
        </div>
        <AffFooter/>
      </div>
    </>
  );
};

export default AffiliateFacaiLayout;
