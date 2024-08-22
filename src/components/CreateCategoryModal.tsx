"use client";
import React, { ChangeEvent, useState } from "react";
import MyModal, { TModalOpenProps } from "./MyModal";
import { toast } from "sonner";
import { createCategory } from "@/actions/createCategory";

type TCreateCategoryModalProps = Pick<TModalOpenProps, "isOpen" | "setIsOpen">;

const CreateCategoryModal = ({
  isOpen,
  setIsOpen,
}: TCreateCategoryModalProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = async () => {
    if (!inputValue) {
      return toast.error("Please write a category name");
    }
    try {
      const response = await createCategory({ categoryName: inputValue });
      console.log(response);

      if (response?.success) {
        toast.success(response?.message);
        setIsOpen(false);
      } else {
        toast.error(response?.message || "something went wrong");
      }
    } catch (error: any) {
      toast.success(error?.message || "something went wrong");
    }
  };

  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Category">
        <div className="flex flex-col gap-6">
          <input
            className=" bg-[#F2F2F2] py-3.5 pl-5 pr-4 w-[305px] border-[1px] border-[#FFFFFF] rounded-[8px] outline-none ring-offset-0 focus:outline-1  focus:outline-gray-300 "
            onChange={handleInputChange}
            type="text"
          />
          <button
            onClick={onSubmit}
            className=" bg-black text-white py-3.5 pl-5 pr-4 w-[305px] border-[1px] border-[#FFFFFF] rounded-[8px] outline-none ring-offset-0 focus:outline-1  focus:outline-gray-300"
          >
            Save
          </button>
        </div>
      </MyModal>
    </div>
  );
};

export default CreateCategoryModal;
