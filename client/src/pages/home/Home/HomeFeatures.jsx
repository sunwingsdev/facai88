import image1 from "../../../assets/v2/image_213468.png";
import image2 from "../../../assets/v2/image_213469.png";
import image3 from "../../../assets/v2/image_213470.png";
import image4 from "../../../assets/v2/image_213472.png";
import image5 from "../../../assets/v2/image_213473.png";
import image6 from "../../../assets/v2/image_213476.png";
import image7 from "../../../assets/v2/image_221117.png";

const HomeFeatures = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];
  return (
    <div className="bg-tab-background py-2">
      <h2 className="text-white border-l-4 px-2 border-green text-base font-bold ">
        বৈশিষ্ট্যযুক্ত গেম
      </h2>
      <div className="flex flex-row gap-2 py-2 overflow-x-auto">
        {images.map((image, index) => (
          <div key={index} className="min-w-[100px]">
            <img src={image} alt="" className="rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
