"use client";
import React, { useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";

const CreateCagetoryAndAnimalModalOpenButton = () => {
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] =
    useState(false);
  const handleCreateCategoryModalOpen = () => {
    setIsCreateCategoryModalOpen((prev) => !prev);
  };
  return (
    <div className="flex ">
      <button className={`btn-outline text-white`}>Add Animaln</button>
      <button
        onClick={handleCreateCategoryModalOpen}
        className={`btn-outline text-white  ml-3 md:ml-6 `}
      >
        Add Category
      </button>
      {isCreateCategoryModalOpen && (
        <CreateCategoryModal
          isOpen={isCreateCategoryModalOpen}
          setIsOpen={setIsCreateCategoryModalOpen}
        />
      )}
    </div>
  );
};

export default CreateCagetoryAndAnimalModalOpenButton;
