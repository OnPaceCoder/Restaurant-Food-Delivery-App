import React from "react";
import { CountDown } from ".";
import Image from "next/image";
import { ProductTypes } from "@/types/types";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const Featured = async () => {
  const featuredProducts: ProductTypes = await getData();
  return (
    <div className="max-w-screen overflow-x-scroll ">
      {/* Wrapper */}
      <div className="w-max  flex py-4 bg-neutral-100">
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] lg:w-[33vw] h-[60vh] flex flex-col items-center justify-around  p-4 hover:bg-fuchsia-50 duration-200 transition-all "
          >
            {/* Image Container */}
            <div className="relative flex-1 w-full">
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  fill
                  className="object-contain hover:rotate-[20deg] duration-300 ease-in-out"
                />
              )}
            </div>
            {/* Text Container */}
            <div className="flex flex-1 flex-col gap-4 items-center justify-center">
              <h1 className="text-xl font-bold uppercase">{item.title}</h1>
              <p className="p-4">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-red-500 text-white  px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
