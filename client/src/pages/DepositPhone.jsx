import React from "react";
import mainLogo from "../assets/v2/loaderLogo.png";
import mobileImage from "../assets/v2/mobileImage.jpg";
import { MdDone } from "react-icons/md";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { Link } from "react-router-dom";

const DepositPhone = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );
  return (
    <div className="flex flex-col items-center gap-6 bg-primary-primaryColor min-h-screen p-6">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center ">
          <img
            src={`${import.meta.env.VITE_BASE_API_URL}${
              logoHomeControl?.image
            }`}
            alt=""
            className="w-40"
          />
        </div>
        {/* Image Section */}
        <div className="lg:w-full">
          <img
            src={mobileImage}
            alt="Sign Up Illustration"
            className="w-full h-full cursor-pointer"
            onClick={() => console.log("Image clicked")}
          />
        </div>
      </div>
      {/* linear-gradient(to right, #d4b665, #a46c0d 50%) */}
      <div className="flex flex-col gap-2 items-center mt-12">
        <span className="inline-flex items-center justify-center w-16 h-16 p-1 text-textSecondaryColor border border-textSecondaryColor rounded-full mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-textSecondaryColor"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>

        <p className="text-textSecondaryColor text-center text-sm mb-4">
          Congratulation on being a Mega Casion World Member !
        </p>
        <p className="text-gray-500 text-center text-xs">
          আপনার সফল রেজিস্ট্রেশনের জন্য অভিনন্দন।
        </p>
      </div>
      <div className="w-full flex flex-col gap-4 mt-8">
        <Link to="/profile/deposit">
          <button className="w-full text-white py-3 bg-gold-gradient">
            Deposit Now
          </button>
        </Link>
        <Link to="/">
          <button className="w-full text-white py-2 bg-white-to-darkblue">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DepositPhone;
