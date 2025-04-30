// import logo1 from "../../../assets/v2/mia-khalifa.png";
// import logo2 from "../../../assets/v2/kevin-pietersen.png";
import logo1 from "../../../assets/v2/sponsor5.png";
import logo2 from "../../../assets/v2/sponsor7.png";
// import logo3 from "../../../assets/v2/amy-jacson.png";
// import logo4 from "../../../assets/v2/hansika-motwani.png";
// import logo5 from "../../../assets/v2/wasim-akram.png";
// import logo6 from "../../../assets/v2/chan-samart.png";
import { useContext } from "react";
import { LanguageContext } from "@/Context/LanguageContext";

const FooterAmbassador = () => {
  const { language } = useContext(LanguageContext);
  const sponsorshipData = [
    {
      logo: logo1,
      title: language === "bn" ? "দক্ষিণ আফ্রিকার ক্রিকেটার" : "South African Cricketer",
      modelName: "Anrich Nortje",
    },
    {
      logo: logo2,
      title: language === "bn" ? "সেলিব্রিটি ব্র্যান্ড অ্যাম্বাসেডর" : "Celebrity Brand Ambassadors",
      modelName: "Mahiya Mahi", 
    },

    // {
    //   logo: logo3,
    //   title: "Amy-Jackson",
    //   date: "২০২৩ - ২০২৪",
    // },
    // {
    //   logo: logo4,
    //   title: "Hansika Motwani",
    //   date: "২০২৩ - ২০২৪",
    // },
    // {
    //   logo: logo5,
    //   title: "WAssim Akram",
    //   date: " ২০২৪ - ২০২৫ ",
    // },
    // {
    //   logo: logo6,
    //   title: "Chan Samrat",
    //   date: "২০২৪ - ২০২৫",
    // },
  ];
  return (
    <div>
      <div className=" mx-2">
        <h2 className="text-textSecondaryColor text-sm my-2">
          {" "}
          {language === "bn" ? "ব্র্যান্ড অ্যাম্বাসেডর’স" : "Brand Ambassadors"}
        </h2>
        <div className="grid grid-cols-2  gap-4 ">
          {sponsorshipData.map((data, index) => (
            <div key={index} className="flex flex-row items-center gap-1">
              <img src={data.logo} alt="" className="w-20 h-10" />
              <div className="text-white flex flex-col text-[10px]">
                <h2>{data.title}</h2>
                <div className="opacity-50">
                  <p>{data.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterAmbassador;
