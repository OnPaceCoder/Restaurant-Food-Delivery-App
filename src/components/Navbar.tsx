import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CartIcon, Menu, UserLinks } from ".";
const Navbar = () => {
  return (
    <div className="h-12 text-red-500 p-4 items-center justify-between flex border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Left links */}
      <div className="hidden md:flex gap-4 flex-1  ">
        <Link href={"/"}>HomePage</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      {/* Logo */}

      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>
          <i>Restro Italliano</i>
        </Link>
      </div>

      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="flex">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className="flex flex-nowrap">123 232 532</span>
        </div>
        <UserLinks />
        <CartIcon />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
