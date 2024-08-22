import React from "react";
import Categorries from "../components/Categorries";
import CreateCagetoryAndAnimalModalOpenButton from "@/components/CreateCagetoryAndAnimalModalOpenButton";
type TParmas = { searchParams: { category?: string } };
const HomePage = async ({ searchParams }: TParmas) => {
  console.log(searchParams);
  const categoryResponse = await fetch(
    "https://antopolis-tsk-server.vercel.app/api/v1/categories"
  );
  const categories = await categoryResponse.json();
  return (
    <div className="bg-black min-h-screen ">
      <div className="mx-auto max-w-5xl pt-10">
        <div className="flex justify-between items-center gap-4">
          <Categorries
            activeCategoryName={searchParams?.category || ""}
            categories={categories?.data}
          />
          <CreateCagetoryAndAnimalModalOpenButton />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
