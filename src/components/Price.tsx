"use client";

import { ProductTypes } from "@/types/types";
import { useCartStore } from "@/utils/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Price = ({ product }: { product: ProductTypes }) => {
  const [selected, setSelected] = useState(0);
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(
        quantity *
          (Number(product.price) +
            Number(product.options[selected].additionalPrice))
      );
    } else {
      setTotal(quantity * Number(product.price));
    }
  }, [quantity, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),

      quantity: quantity,
    });
    toast.success("The Product added to cart ");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${Number(total).toFixed(2)}</h2>
      <div className="flex gap-4">
        {product.options?.length! > 0 &&
          product.options?.map((option, index) => (
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
        <button
          className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
          onClick={handleCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Price;
