import { DeleteButton } from "@/components/DeleteButton";
import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";
type Props = {
  params: { id: number };
};

const SingleProductPage = ({ params }: Props) => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col  text-red-500 md:flex-row md:gap-8 md:h-[calc(100vh-6rem)] items-center  ">
      {/* Image container */}
      {singleProduct.img && (
        <div className="relative flex-1 h-1/2 md:h-[60%]">
          <Image
            src={singleProduct.img}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      )}

      {/* Text container */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[60%] md:justify-center md:gap-6 xl:gap-8 flex-1">
        <h1>
          <span>{singleProduct.title}</span>
          <DeleteButton id={singleProduct.id} />
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
