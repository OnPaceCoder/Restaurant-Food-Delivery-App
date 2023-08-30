import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const page = () => {
  // const {products , totalItems , totalPrice , removeFromCart} = useCartStore();

  const totalPrice = 20;
  const totalItems = 4;

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* Product container */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-10 xl:px-20 ">
        <div className="py-12"></div>
        {featuredProducts.map((item) => (
          <div
            className="flex items-center justify-between mt-12"
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={200}
                height={150}
                className="flex "
              />
            )}
            <div className="flex flex-2 flex-col">
              <h1 className="uppercase text-xl font-bold">
                {item.title} x {item.id}
              </h1>
              <span>{item.title}</span>
              <h2 className="flex flex-2">${item.price}</h2>
            </div>
            <span className="cursor-pointer flex  ">X</span>
          </div>
        ))}
      </div>
      {/* Payment container */}
      <div className="h-1/2 p-4 flex flex-col bg-fuchsia-50 gap-4 justify-center lg:h-full lg:w-1/3 wxl:1/2 lg:px-10 xl:px-20">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL.VAT)</span>
          <span className="">${totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default page;
