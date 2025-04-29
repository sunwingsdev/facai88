import logo1 from "../../../assets/v2/mia-khalifa.png";
import logo2 from "../../../assets/v2/kevin-pietersen.png";
import logo3 from "../../../assets/v2/amy-jacson.png";
import logo4 from "../../../assets/v2/hansika-motwani.png";
import logo5 from "../../../assets/v2/wasim-akram.png";
import logo6 from "../../../assets/v2/chan-samart.png";

const FooterAmbassador = () => {
  const sponsorshipData = [
    {
      logo: logo1,
      title: "Mia Khalifa",
      date: " ২০২৪ ",
    },
    {
      logo: logo2,
      title: "Kevin Pietersen",
      date: "  ২০২৪ - ২০২৬  ",
    },

    {
      logo: logo3,
      title: "Amy-Jackson",
      date: "২০২৩ - ২০২৪",
    },
    {
      logo: logo4,
      title: "Hansika Motwani",
      date: "২০২৩ - ২০২৪",
    },
    {
      logo: logo5,
      title: "WAssim Akram",
      date: " ২০২৪ - ২০২৫ ",
    },
    {
      logo: logo6,
      title: "Chan Samrat",
      date: "২০২৪ - ২০২৫",
    },
  ];
  return (
    <div>
      <div className=" mx-2">
        <h2 className="text-green text-sm my-2">
          {" "}
          ব্র্যান্ড অ্যাম্বাসেডর&apos;স
        </h2>
        <div className="grid grid-cols-2  gap-4 ">
          {sponsorshipData.map((data, index) => (
            <div key={index} className="flex flex-row items-center gap-1">
              <img src={data.logo} alt="" className="w-10 h-10" />
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
