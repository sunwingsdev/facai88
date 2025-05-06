import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// English images
import image1 from "../../assets/affiliateImages/Slider1.jpg";
import imageOne from "../../assets/affiliateImages/smallSlider1.jpg";
import image2 from "../../assets/affiliateImages/Slider2.jpg";
import image3 from "../../assets/affiliateImages/Slider3.jpg";
import imageThree from "../../assets/affiliateImages/smallSlider2.jpg";

// Bangla versions of image1 and image3
import image1Bn from "../../assets/affiliateImages/banner-bn_ipl2025.jpg";
import imageOneBn from "../../assets/affiliateImages/banner-bn-mob_ipl2025.jpg";
import image3Bn from "../../assets/affiliateImages/name_MS_Main-Banner-Mobile_1588x719-1.jpg";
import imageThreeBn from "../../assets/affiliateImages/bt_bdt_bn_860x760.jpg";

import topImage from "../../assets/affiliateImages/slider2Part1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LanguageContext } from '@/Context/LanguageContext';

const AffImageSlider = () => {
  const { language } = useContext(LanguageContext);
  const isBn = language === 'bn';

  const slides = [
    {
      image: isBn ? image1Bn : image1,
      imageSm: isBn ? imageOneBn : imageOne,
      textEN: '',
      subTextEN: '',
      textBN: '',
      subTextBN: '',
    },
    {
      image: image2,
      imageSm: image2,
      textEN: 'Sign up today and earn up to 52% Lifetime commission with MCW AFFILIATES',
      subTextEN: 'Lightning fast payout, Unlimited Revenue share and zero Investment. Make a smart choice and start earning today!',
      textBN: 'আজই সাইন আপ করুন এবং MCW অ্যাফিলিয়েটের সঙ্গে আয় করুন ৫২% পর্যন্ত লাইফটাইম কমিশন',
      subTextBN: 'বিদ্যুৎগতির পেআউট, সীমাহীন রেভিনিউ শেয়ার এবং কোনো বিনিয়োগের প্রয়োজন নেই। এখনই শুরু করুন আপনার আয়!',
    },
    {
      image: isBn ? image3Bn : image3,
      imageSm: isBn ? imageThreeBn : imageThree,
      textEN: '',
      subTextEN: '',
      textBN: '',
      subTextBN: '',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full h-full group overflow-hidden">
        {currentIndex === 1 ? (
          <div
            className="w-full h-auto lg:h-auto md:h-[550px] bg-cover bg-center flex flex-col md:flex-row items-center justify-center md:gap-24 pb-20 md:pb-0 px-4"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          >
            <motion.div
              className="md:w-[50%] lg:w-[30%]"
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src={topImage} alt="Overlay" className="w-full" />
            </motion.div>
            <div className="text-white flex flex-col gap-2 text-2xl md:text-3xl justify-center md:justify-normal items-center md:items-start font-semibold md:w-[30%]">
              <p className="text-textSecondaryColor text-center md:text-left md:px-0 font-semibold">
                {isBn ? currentSlide.textBN : currentSlide.textEN}
              </p>
              <p className="text-base text-center md:px-0 md:text-left mt-2">
                {isBn ? currentSlide.subTextBN : currentSlide.subTextEN}
              </p>
              <button className="bg-backgroundSecondaryColor w-[35%] md:w-[50%] lg:w-[35%] rounded-md text-sm py-1">
                {isBn ? 'আরও জানুন' : 'Learn More'}
              </button>
            </div>
          </div>
        ) : (
          <>
            <img
              src={currentSlide.image}
              alt=""
              className="w-full hidden md:block object-cover"
            />
            <img
              src={currentSlide.imageSm}
              alt=""
              className="w-full h-[500px] object-cover md:h-[550px] md:hidden"
            />
          </>
        )}

        {/* Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:text-textSecondaryColor md:text-2xl lg:text-6xl px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-textSecondaryColor md:text-2xl  lg:text-6xl px-3 py-1 opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default AffImageSlider;
