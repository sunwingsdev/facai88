const FaqInfo = () => {
  return (
    <div className="h-auto">
      <div className="md:max-w-6xl mx-auto px-6 md:px-0 py-6 text-white flex flex-col gap-6">
        <div>
          <h1 className="text-textSecondaryColor text-2xl mb-7 uppercase">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
          </h1>
          <div className="flex flex-col gap-3">
            <p>
              এইগুলি MCW সম্পর্কে কিছু সাধারণ প্রশ্ন এবং উত্তর। আপনি যদি নীচের
              তালিকায় আপনার প্রশ্নটি খুঁজে না পান, দয়া করে আমাদের গ্রাহক
              সহায়তার সাথে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqInfo;
