"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container relative flex items-center justify-between p-6 md:px-8 mx-auto">
        {/* Logo  */}
        <Disclosure>
          <>
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              <Link href="/">
                <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100 gap-2">
                  <span>
                    <Image
                      src="/img/icon_e_white.png"
                      alt="E"
                      width="40"
                      height="40"
                    />
                  </span>
                  <div className="flex flex-col ">
                    <p>English</p>
                    <p style={{ fontSize: "12px" }} className="text-sm">
                      with Labelle
                    </p>
                  </div>
                </span>
              </Link>
            </div>
          </>
        </Disclosure>

        <ThemeChanger />
      </nav>
    </div>
  );
};
