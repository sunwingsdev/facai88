import logo1 from "../../../assets/v2/afc-bournemouth.png";
import logo4 from "../../../assets/v2/sunrisers-eastern-cape-4BShiuSM.png";
import logo3 from "../../../assets/v2/quetta-gladiators.png";
import logo2 from "../../../assets/v2/bologna-fc-1909-n8kXOhaz.png";
import logo5 from "../../../assets/v2/deccan-gladiators-ChfQU95Q.png";
import logo6 from "../../../assets/v2/st-kitts-and-nevis-patriots.svg";
import logo7 from "../../../assets/v2/biratnagar-kings.svg";

const FooterSponsorship = () => {
  const sponsorshipData = [
    {
      logo: logo1,
      title: "AFC Bournemouth",
      text: "AFC Bournemouth",
      date: " ২০২৪ - ২০২৫ ",
    },
    {
      logo: logo2,
      title: "Bologna FC 1909",
      text: "বেটিং পার্টনার ",
      date: " ২০২৩ - ২০২৪ ",
    },
    {
      logo: logo3,
      title: "Quetta Gladiators",
      text: "টাইটানিয়াম স্পনসর",
      date: "২০২৩",
    },
    {
      logo: logo4,
      title: "Sunrisers Eastern Cape",
      text: "টাইটেল স্পনসর",
      date: "২০২৩ - ২০২৪",
    },
    {
      logo: logo5,
      title: "Deccan Gladiators",
      text: "টাইটেল স্পনসর",
      date: "২০২৩ - ২০২৪",
    },
    {
      logo: logo6,
      title: "St Kitts & Nevis Patriots",
      text: "প্রধান স্পনসর",
      date: " ২০২৪ - ২০২৫ ",
    },
    {
      logo: logo7,
      title: "Biratnagar Kings",
      text: "ব্যাক অফ জার্সি স্পনসর",
      date: " ২০২৪ - ২০২৫ ",
    },
  ];

  return (
    <div className=" mx-2">
      <h2 className="text-green text-sm my-2"> স্পন্সরশিপ </h2>
      <div className="grid grid-cols-2  gap-4 ">
        {sponsorshipData.map((data, index) => (
          <div key={index} className="flex flex-row items-center gap-1">
            <img src={data.logo} alt="" className="w-10 h-10" />
            <div className="text-white flex flex-col text-[10px]">
              <h2>{data.title}</h2>
              <div className="opacity-50">
                <p>{data.text}</p>
                <p>{data.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterSponsorship;
