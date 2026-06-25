"use client";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "Services",
    "Projects",
    "About Us",
  ];

  return (
    <div className="w-full fixed top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <nav className="container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-bold text-white font-nunito tracking-wider">
            <span>Cypher Ridge</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="mailto:info@cypherridge.com" className="px-6 py-2 text-white bg-custom-dark-red hover:bg-custom-red transition-all border border-custom-red rounded-full md:ml-5 font-semibold font-nunito">
                Contact Us
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-400 rounded-md lg:hidden hover:text-white focus:outline-none">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/" className="w-full px-4 py-2 -ml-4 text-gray-400 rounded-md hover:text-white focus:outline-none">
                          {item}
                      </Link>
                    ))}
                    <Link href="mailto:info@cypherridge.com" className="w-full px-6 py-2 mt-3 text-center text-white bg-custom-dark-red hover:bg-custom-red transition-all border border-custom-red rounded-full lg:ml-5 font-semibold font-nunito">         
                        Contact Us
                    </Link>
                  </>
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-300 no-underline rounded-md hover:text-white focus:outline-none font-inter">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}
