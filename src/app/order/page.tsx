"use client";
import { OrderTypes } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  if (isLoading || status === "loading") return "Loading ...";

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">OrderId</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: OrderTypes) => (
            <tr className="text-sm md:text-base">
              <td className="hidden md:block">123423423</td>
              <td>19.04.2023</td>
              <td>89.90</td>
              <td className="hidden md:block">
                Big Burger Menu(2), Coca Cla 1L (2)
              </td>
              <td>On the way (approx, 10min)...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
