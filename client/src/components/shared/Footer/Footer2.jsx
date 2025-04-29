import { useLocation } from "react-router-dom";
import FooterSponsorship from "./FooterSponsorship";
import FooterAmbassador from "./FooterAmbassador";
import FooterDeposit from "./FooterDeposit";
import FooterLast from "./FooterLast";
import HomeFooter from "./HomeFooter";

const Footer2 = () => {
  const location = useLocation();

  const footerComponents = {
    "/": <HomeFooter />,
  };
  return (
    <div className="bg-black">
      <div className="">
        <div className="py-4 ">
          {footerComponents[location.pathname] || null}
        </div>
        <FooterSponsorship />
        <FooterAmbassador />
        <FooterDeposit />
        <FooterLast />
      </div>
    </div>
  );
};
export default Footer2;
