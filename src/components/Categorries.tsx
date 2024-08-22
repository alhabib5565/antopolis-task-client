"use client";
import { TCategory } from "@/type/type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Categorries = ({
  categories,
  activeCategoryName,
}: {
  categories: TCategory[];
  activeCategoryName: string;
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const parmas = new URLSearchParams(searchParams);

  const [activeCategory, setActiveCategory] = useState(activeCategoryName);
  const handleActive = (categoryName: string) => {
    setActiveCategory((prev) => (prev = categoryName));
    parmas.set("category", categoryName);

    router.replace(`${pathName}?${parmas.toString()}`);
  };
  return (
    <div className="flex flex-wrap gap-6">
      {categories?.map((category, index) => (
        <button
          onClick={() => handleActive(category.categoryName)}
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
