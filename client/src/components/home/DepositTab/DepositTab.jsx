import PrimaryButton from "@/components/shared/Buttons/PrimaryButton";
import { useAddDepositMutation } from "@/redux/features/allApis/depositsApi/depositsApi";
import { useGetPaymentMethodsQuery } from "@/redux/features/allApis/paymentMethodApi/paymentMethodApi";
import { useGetAllPaymentNumbersQuery } from "@/redux/features/allApis/paymentNumberApi/paymentNumberApi";
import { useGetPromotionsQuery } from "@/redux/features/allApis/promotionApi/promotionApi";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { FcOk } from "react-icons/fc";
import { FiCopy } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

const DepositTab = () => {
  const { user } = useSelector((state) => state.auth);
  const [addDeposit] = useAddDepositMutation();
  const { data: allPaymentNumbers } = useGetAllPaymentNumbersQuery();
  const { data: promotions } = useGetPromotionsQuery();
  // console.log(promotions);
  // console.log(allPaymentNumbers);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [formData, setFormData] = useState({
    paymentMethod: null,
    depositChannel: null,
    amount: [],
    senderNumber: "",
    transactionId: "",
    promotion: selectedPromotion,
  });

  const [dynamicInputs, setDynamicInputs] = useState({});

  // console.log(selectedPromotion);
  const [selectedNumber, setSelectedNumber] = useState(null);
  // console.log(selectedNumber);
  const { addToast } = useToasts();

  const { data: gateways } = useGetPaymentMethodsQuery();

  useEffect(() => {
    if (gateways && gateways?.length > 0) {
      const initialPaymentMethod = gateways[0]?.method;
      setFormData((prev) => ({
        ...prev,
        paymentMethod: initialPaymentMethod,
        depositChannel: null, // removed channels from initial selection
      }));
    }
  }, [gateways]);

  useEffect(() => {
    if (formData.paymentMethod && formData.depositChannel) {
      const filteredNumbers = allPaymentNumbers?.filter(
        (item) =>
          item.channel?.toLowerCase() ===
            formData.depositChannel.toLowerCase() &&
          item.paymentNumberMethod?.toLowerCase() ===
            formData.paymentMethod.toLowerCase()
      );

      if (filteredNumbers?.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredNumbers.length);
        setSelectedNumber(filteredNumbers[randomIndex]);
      } else {
        setSelectedNumber(null);
      }
    } else {
      setSelectedNumber(null);
    }
  }, [formData.paymentMethod, formData.depositChannel, allPaymentNumbers]);

  const handleSelect = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    if (key === "promotion") {
      setSelectedPromotion(value); // Update selected promotion
    }
  };

  const handlePaymentMethodChange = (method) => {
    setFormData({
      paymentMethod: method,
      depositChannel: null,
    });
  };

  const handleReset = () => {
    setFormData((prev) => ({
      ...prev,
      amount: [],
    }));
  };

  const handleAmountClick = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: Array.isArray(prev.amount) ? [...prev.amount, amount] : [amount],
    }));
  };

  const handleDeposit = async () => {
    if (!formData.paymentMethod || formData.amount?.length === 0) {
      alert("Please select all fields before submitting.");
      return;
    }
    const totalAmount = formData.amount.reduce((acc, amt) => acc + amt, 0);

    let finalAmount = totalAmount;
    if (selectedPromotion) {
      if (selectedPromotion.bonusType === "amount") {
        finalAmount = totalAmount + selectedPromotion.bonusValue;
      } else if (selectedPromotion.bonusType === "percentage") {
        finalAmount =
          totalAmount + totalAmount * (selectedPromotion.bonusValue / 100);
      }
    }

    const depositInfo = {
      ...formData,
      amount: finalAmount,
      userId: user?._id,
      userInputs: dynamicInputs,
    };

    try {
      const result = await addDeposit(depositInfo);
      if (result.data.insertedId) {
        addToast(
          "Amount depositted successfully. Please Wait for the response",
          {
            appearance: "success",
            autoDismiss: true,
          }
        );
        handleReset();
      }
    } catch (error) {
      addToast("Failed to add a deposit", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  // Function to return phone number based on selected channel
  const getPhoneNumberByChannel = (channel) => {
    const channelPhoneNumbers = {
      apay: "+88015111111111",
      cpay: "+88015222222222",

      // Add more channels and numbers as needed
    };
    return channelPhoneNumbers[channel] || "+88015111111111"; // Default number if no match
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    addToast("নাম্বার কপি হয়েছে", {
      appearance: "info",
      autoDismiss: true,
    });
  };

  return (
    <div className="text-white space-y-4">
      {/* Promotion */}
      <div className="w-full text-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-white">প্রোমশন</h1>
          <div
            className="flex justify-between items-center bg-yellow-500 p-2 rounded cursor-pointer"
            onClick={() => setSelectedPromotion(!selectedPromotion)}
          >
            <h1>
              প্রোমশন{" "}
              <span className="bg-red-600 px-2 py-1 rounded-full">
                {promotions?.length}
              </span>
            </h1>
            {selectedPromotion ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
        </div>

        {selectedPromotion && (
          <div className="z-10 grid grid-cols-4 gap-2 bg-gray-900 p-2 mt-2 rounded max-h-96 overflow-y-auto w-full shadow-lg">
            {promotions?.map((promo) => (
              <div
                key={promo?._id}
                onClick={() => handleSelect("promotion", promo)} // Handle promotion selection
                className={`cursor-pointer hover:scale-105 transition ${
                  formData.promotion?._id === promo?._id
                    ? "ring-2 ring-green-500"
                    : ""
                }`}
              >
                <img
                  src={`${import.meta.env.VITE_BASE_API_URL}${promo?.image}`}
                  alt={promo?.title}
                  className="rounded h-14"
                  title={promo?.title}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Promotion Display */}
      {formData.promotion && (
        <div className="mt-4 bg-primary-primaryColor rounded text-white flex items-center gap-2">
          <div className="w-2/5 md:w-2/3 p-2">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${
                formData.promotion?.image
              }`}
              alt={formData.promotion?.title}
              className="h-24 md:h-32"
            />
          </div>
          <div className="w-3/5 md:w-1/3 p-2">
            <p className="text-sm">প্রোমশন</p>
            <h3 className="text-lg font-bold">{formData.promotion?.title}</h3>
            <p className="text-xs mt-1">🕒 {formData.promotion?.createdAt}</p>
            <button
              className="mt-2 text-xs underline text-white"
              onClick={() => handleDeposit(formData.promotion)}
            >
              বিস্তারিত
            </button>
          </div>
        </div>
      )}

      {/* Payment Method */}
      <div className="space-y-2">
        <p className="text-sm">ডিপোজিট পদ্ধতি</p>
        <div className="grid grid-cols-3 gap-3">
          {gateways
            ?.filter((g) => g.status === "active")
            ?.map((method) => (
              <div
                key={method.method}
                className={`
              border rounded-md p-2 flex items-center gap-2 cursor-pointer
              ${formData.paymentMethod === method.method && "border-green-500"}
            `}
                onClick={() => handlePaymentMethodChange(method.method)}
              >
                <img
                  src={`${import.meta.env.VITE_BASE_API_URL}${method.image}`}
                  alt={method.method}
                  className="w-14 h-8"
                />
                <span className="capitalize text-sm">{method.method}</span>

                {/* Green Check Icon when selected */}
                {formData.paymentMethod === method.method && (
                  <FcOk className="text-green-500 text-xl" />
                )}
              </div>
            ))}
        </div>
      </div>

      {/* Deposit Channel */}
      {gateways?.filter(
        (m) => m.status === "active" && m.method === formData.paymentMethod
      )?.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm">ডিপোজিট চ্যানেল</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {gateways
              ?.filter((m) => m.method === formData.paymentMethod)
              ?.flatMap((method) =>
                method?.gateway?.map((gatewayItem, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-700 rounded-md p-3 cursor-pointer hover:shadow-md transition duration-300"
                    onClick={() => handleSelect("depositChannel", gatewayItem)} // Select Channel
                  >
                    <div className="flex flex-row justify-center items-center gap-2">
                      <span className="text-sm capitalize">
                        {gatewayItem === "apay" ? "A-Pay" : "C-Pay"}
                      </span>
                      {formData.depositChannel === gatewayItem && (
                        <FcOk className="text-green-500 text-xl" />
                      )}
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      )}

      {/* Phone Number based on Deposit Channel */}
      <p className="text-sm">নাম্বার</p>
      {formData.depositChannel ? (
        selectedNumber && selectedNumber.status?.toLowerCase() === "approve" ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3 px-3 py-2 bg-gradient-to-br from-[#f269b0] to-[#5d1b90] rounded-lg">
              <div className="flex flex-col text-sm">
                <span className="font-medium text-xl">
                  {selectedNumber?.paymentNumber}
                </span>
                <span className="text-base text-yellow-200 italic">
                  {selectedNumber?.numberCategory}
                </span>
              </div>
              <button
                onClick={() => handleCopy(selectedNumber?.paymentNumber)}
                className="hover:text-yellow-300"
              >
                <FiCopy title="Copy the Number" />
              </button>
            </div>
          </div>
        ) : (
          <div className="px-3 py-2 inline-flex items-center gap-2 bg-gradient-to-br from-[#f269b0] to-[#5d1b90] rounded-lg">
            <p>কোন নাম্বার পাওয়া যায়নি</p>
          </div>
        )
      ) : (
        <div className="px-3 py-2 inline-flex items-center gap-2 bg-gradient-to-br from-[#f269b0] to-[#5d1b90] rounded-lg">
          <p>অনুগ্রহ করে ডিপোজিট চ্যানেল নির্বাচন করুন</p>
        </div>
      )}

      {/* Sender Number and Transaction ID Input Fields */}
      {gateways
        ?.filter(
          (g) => g.status === "active" && g.method === formData.paymentMethod
        )
        ?.map((gateway, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 mt-6 rounded-xl">
            {/* Input Fields */}
            {gateway.userInputs?.map((inputField, inputIndex) => (
              <div key={inputIndex} className="flex flex-col gap-2 mb-3">
                <input
                  type={inputField.type}
                  name={`${inputField.name}`}
                  placeholder={inputField.label}
                  required={inputField.isRequired === "required"}
                  className="w-full px-4 py-2 border border-[#989898] bg-transparent rounded text-white placeholder-gray-400"
                  onChange={(e) =>
                    setDynamicInputs((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
            ))}
          </div>
        ))}

      {/* Amount */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-sm">এমাউন্ট</p>
          <p className="text-sm">৳ ৫০০ - ৳ ২৫,০০০</p>
        </div>
        <div className="flex gap-3">
          {["100", "500", "1000", "2000", "3000"].map((amount) => (
            <div
              key={amount}
              className={`text-center text-sm py-1.5 md:py-3 w-20 md:w-28 border ${
                formData.amount?.includes(parseInt(amount))
                  ? "border-[#ffe43c] text-[#ffe43c]"
                  : "border-[#989898] hover:border-[#ffe43c] hover:text-[#ffe43c]"
              }`}
              onClick={() => handleAmountClick(parseInt(amount))}
            >
              {amount}
            </div>
          ))}
        </div>
      </div>

      {/* Instruction */}
      <div className="border border-[#7293e1] bg-[#455271] px-7 py-3 rounded-md text-sm">
        <p className="mb-3">
          সম্মানিত সদস্যবৃন্দ, আপনার ডিপজিট প্রসেস দ্রুততর করতে, অনুগ্রহ করে এই
          পদক্ষেপগুলি অনুসরণ করুন:
        </p>
        <p>
          1. আপনি যে ফোন নম্বরটি ডিপজিটের জন্য ব্যবহার করেছেন তা ভেরিফাই করুন।
        </p>
        <p>2. সঠিক রেফারেন্স নম্বর ইনপুট করুন।</p>
        <p>3. শুধুমাত্র নির্বাচিত পরিমাণ প্রক্রিয়া করুন।</p>
        <p>4. ডিপজিটের সফল স্লিপ সংযুক্ত করুন।</p>
        <p className="mt-3">অনুস্মারক:</p>
        <p>
          টাকা হারানো এড়াতে আপনার ডিভাইসে বাজি ওয়েবসাইটে প্রদর্শিত ফোন নম্বর
          সেভ করবেন না।
        </p>
      </div>

      {/* Selected Data */}
      <div className="flex gap-4">
        <div className="border-2 border-[#929292] px-3 pe-8 inline-flex items-center justify-between w-56 text-base text-[#f2dc9c]">
          ৳{" "}
          <p className="text-[#999] inline-flex items-center gap-3">
            {formData.amount?.reduce((acc, amt) => acc + amt, 0)}
            {formData.amount?.length > 0 && (
              <span onClick={() => handleSelect("amount", [])}>
                <RxCrossCircled className="bg-red-600 text-white rounded-full" />
              </span>
            )}
          </p>
        </div>
        <PrimaryButton
          disabled={formData.amount?.length === 0}
          type={"button"}
          onClick={handleDeposit}
        >
          ডিপোজিট
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DepositTab;
