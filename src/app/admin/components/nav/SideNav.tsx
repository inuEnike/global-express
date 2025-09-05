import Link from "next/link";
import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import { LiaAddressCardSolid } from "react-icons/lia";
import { MdDashboard, MdOutlineViewInAr } from "react-icons/md";

const SideNav = () => {
  return (
    <aside className="bg-foreground text-background rounded-md fixed md:w-[18%] w-[60%] h-screen flex items-center not-md:justify-center  hiddens md:pt-20 flex-col shadow-lg shadow-white">
      <ul className="flex flex-col gap-12">
        <li className="py-5 flex items-center gap-3">
          <MdDashboard className="text-xl" />
          <Link href="/" className="text-sm uppercase">
            Dashboard
          </Link>
        </li>
        <li className="py-5 flex items-center gap-3">
          <MdOutlineViewInAr className="text-xl" />
          <Link href="/" className="text-sm uppercase">
            View All Details
          </Link>
        </li>
        <li className="py-5 flex items-center gap-3">
          <LiaAddressCardSolid className="text-xl" />
          <Link
            href="/admin/dashboard/addTracking"
            className="text-sm uppercase"
          >
            Add Tracking Details
          </Link>
        </li>
        <li className="py-5 flex items-center gap-3">
          <BiSolidAddToQueue className="text-xl" />
          <Link href="/" className="text-sm uppercase">
            Add Tracking Details
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;
