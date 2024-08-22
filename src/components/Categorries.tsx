"use client";
import { TCategory } from "@/type/type";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Categorries = ({
  categories,
  activeCategoryName,
}: {
  categories: TCategory[];
  activeCategoryName: string;
}) => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState(activeCategoryName);
  const handleActive = (categoryName: string) => {
    setActiveCategory(categoryName);
    router.push(`?category=${categoryName}`);
  };
  return (
    <div className="flex gap-6">
      {categories?.map((category, index) => (
        <button
          onClick={() => handleActive(category.categoryName)}
          //   className="px-5 py-3.5 border-[1px] min-w-[100px] border-[#058F34] text-[#058F34] rounded-[100px] font-[400px] text-lg"
          className={`btn-outline ${
            category.categoryName === activeCategory
              ? "border-[#058F34] text-[#058F34]"
              : "border-[#EF0D0D] text-[#EF0D0D]"
          }`}
          key={index}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default Categorries;
