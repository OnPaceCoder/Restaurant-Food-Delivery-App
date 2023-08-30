import { featuredProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { category: string };
};

const page = ({ params }: Props) => {
  return (
    <div className="flex flex-wrap text-red-500">
      {featuredProducts.map((item) => (
        <Link
          href={`/product/${item.id}`}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4"
        >
          {/* Image Contianer */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* Text container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
