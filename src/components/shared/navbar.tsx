/* eslint-disable @next/next/no-img-element */
"use client";

import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-filter backdrop-blur-md mx-5 md:mx-16 lg:mx-20 md:px-10 my-2 border border-indigo-200 bg-[#a59bff] rounded-xl shadow-lg">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between p-4">
        <div className="flex">
          <Link
            href="/"
            className="flex gap-5 items-center text-2xl text-transparent bg-clip-text bg-gradient-to-b from-violet-500 from-[20%] to-indigo-600 font-semibold whitespace-nowrap"
          >
            <Image src="/justblink.png" alt="logo" width={40} height={40} className="w-7 h-7" />
            justblink
          </Link>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-100 rounded-lg lg:hidden bg-neutral-600 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <CgClose size={25} />
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`w-full lg:block lg:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${
                  pathname === "/"
                    ? "text-indigo-500 hover:text-neutral-800"
                    : "text-neutral-700 hover:text-indigo-500"
                } rounded-lg hover:bg-indigo-300/40 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/create"
                className={`block py-2 px-3 ${
                  pathname === "/create"
                    ? "text-indigo-500 hover:text-neutral-800"
                    : "text-neutral-700 hover:text-indigo-500"
                } rounded-lg hover:bg-indigo-300/40 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0`}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className={`block py-2 px-3 ${
                  pathname === "/explore"
                    ? "text-indigo-500 hover:text-neutral-800"
                    : "text-neutral-700 hover:text-indigo-500"
                } rounded-lg hover:bg-indigo-300/40 md:hover:bg-transparent md:border-0 md:hover:text-indigo-500 md:p-0`}
              >
                My collections
              </Link>
            </li>
          </ul>
          <span className="flex md:hidden">
            <UnifiedWalletButton />
          </span>
        </div>
        <span className="hidden md:flex">
          <UnifiedWalletButton />
        </span>
      </div>
    </nav>
  );
}
