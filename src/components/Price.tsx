"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [selected, setSelected] = useState(0);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (options?.length) {
      setTotal(quantity * (price + options[selected].additionalPrice));
    }
  }, [quantity, selected]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.length &&
          options?.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/* Quantity and add button contianer */}
      <div className="flex justify-between  items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1  ring-red-500">
          <span>{quantity}</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart button */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
