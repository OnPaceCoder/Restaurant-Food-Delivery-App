import Image from "next/image";
import React from "react";

export const DeleteButton = ({ id }: { id: number }) => {
  const handleDelete = async () => {};

  return (
    <button className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-full ml-6">
      <Image src={"/delete.png"} alt="" width={20} height={20} />
    </button>
  );
};
