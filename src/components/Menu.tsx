"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CartIcon } from ".";
import { signOut, useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const user = false;
  return (
    <div>
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="bg-red-400 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col  items-center justify-center text-3xl z-10  ">
          {links.map((item, index) => (
            <div className="mobile-menu">
              <Link
                href={item.url}
                key={item.id}
                className=""
                onClick={() => setOpen(false)}
              >
                {item.title}
              </Link>
            </div>
          ))}
          <div className="mobile-menu">
            <Link
              href={user ? "/orders" : "login"}
              onClick={() => setOpen(false)}
            >
              {status === "authenticated" ? "Orders" : "Login"}
            </Link>
          </div>

          {status === "authenticated" && (
            <div className="mobile-menu">
              <Link
                href={"/"}
                onClick={() => {
                  setOpen(false);
                  signOut();
                }}
              >
                Logout
              </Link>
            </div>
          )}
          <div className="mobile-menu">
            <Link href={"/cart"} onClick={() => setOpen(false)}>
              <CartIcon />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
