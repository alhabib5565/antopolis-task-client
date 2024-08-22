"use server";

export const createCategory = async (data: any) => {
  const response = await fetch(
    "https://antopolis-tsk-server.vercel.app/api/v1/categories/create-category",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return await response.json();
};
