import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between  md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* Text Container */}
      <div className="text-white flex-1  flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate paralle.
        </p>
        {/* CountDown */}
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>

      {/* Image Container */}

      <div className="relative w-full flex-1">
        <Image
          src={"/offerProduct.png"}
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
