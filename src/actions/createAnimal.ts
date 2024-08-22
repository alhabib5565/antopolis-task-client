"use server";

import { revalidateTag } from "next/cache";

export const createAnimal = async (data: any) => {
  const response = await fetch(
    "https://antopolis-tsk-server.vercel.app/api/v1/animals/create-animal",
    // "http://localhost:5000/api/v1/animals/create-animal",
    {
      method: "POST",

      body: data,
    }
  );
  revalidateTag("animals");
  return await response.json();
};
