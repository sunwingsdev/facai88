import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/redux/features/allApis/categoryApi/categoryApi";
import { useGetAllHomeGamesQuery } from "@/redux/features/allApis/homeGamesApi/homeGamesApi";
import { Link } from "react-router-dom";
import { useGetAllSubCategoriesQuery } from "@/redux/features/allApis/categoryApi/subCategoryApi";

const HomeTabs = () => {
  const { data: allCategories } = useGetAllCategoriesQuery();
  const { data: allHomeGames } = useGetAllHomeGamesQuery();
  const { data: allSubCategories } = useGetAllSubCategoriesQuery();
  const [activeTab, setActiveTab] = useState(null);

  // Set the first category as default if categories are available
  if (!activeTab && allCategories?.length > 0) {
    setActiveTab(allCategories[0].name);
  }

  // Filter games based on the active category
  const filteredGames = allHomeGames?.filter(
    (game) => game.category === activeTab
  );

  const filteredSubCategories = allSubCategories?.filter(
    (subCategory) => subCategory.category === activeTab
  );

  return (
    <div className="px-2">
      {/* Category Tabs */}
      <div className="flex sticky top-0 bg-black z-10 flex-row items-center px-2 gap-x-4 overflow-x-auto">
        {allCategories?.map((category) => (
          <motion.div
            key={category._id}
            className={`flex flex-col items-center cursor-pointer relative 
          ${
            category.name === activeTab
              ? "bg-tab-background p-2"
              : "hover:bg-tab-background p-2"
          }`}
            onClick={() => setActiveTab(category.name)}
            whileTap={{ scale: 0.95 }}
          >
            {category.name === activeTab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-green rounded-full"
              />
            )}
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${category.image}`}
              alt={category.name}
              className="w-8"
            />
            <p
              className={`text-white text-xs ${
                category.name === activeTab ? "font-bold" : ""
              }`}
            >
              {category.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Selected Category Title */}
      <h2 className="text-white border-l-4 px-2 border-green text-base font-bold mt-4">
        {activeTab}
      </h2>

      {/* Game List */}
      <div className="mt-4">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "এক্সক্লুসিভ" ? (
              // এক্সক্লুসিভ হলে গেম দেখাবে
              filteredGames?.length > 0 ? (
                <div className="grid grid-cols-3 justify-items-center">
                  {filteredGames.map((game) => (
                    <Link
                      to={`/category/demo/${game._id}`}
                      key={game._id}
                      className="flex flex-col p-2 w-full justify-center items-center"
                    >
                      <img
                        src={`${import.meta.env.VITE_BASE_API_URL}${
                          game.image
                        }`}
                        alt={game.category}
                        className="w-28 h-38 m-2 rounded-md object-cover"
                      />
                      {game?.name && (
                        <p className="text-white text-[10px] whitespace-nowrap">
                          {game.name}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-white">No exclusive games available.</p>
              )
            ) : // অন্যান্য ক্যাটেগরির জন্য সাব-ক্যাটেগরি দেখাবে
            filteredSubCategories?.length > 0 ? (
              <div className="grid grid-cols-4 gap-1 justify-items-center">
                {filteredSubCategories.map((subCategory) => (
                  <Link
                    to={`/category/${subCategory.category}`}
                    key={subCategory._id}
                    className="flex flex-col p-2 w-full justify-center items-center bg-gray-800"
                  >
                    <img
                      src={`${import.meta.env.VITE_BASE_API_URL}${
                        subCategory.image
                      }`}
                      alt={subCategory.name}
                      className="w-9 h-9 rounded-full m-0"
                    />
                    <p className="text-white text-[10px] whitespace-nowrap">
                      {subCategory.name}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-white">No subcategories available.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeTabs;
