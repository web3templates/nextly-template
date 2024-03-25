import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import heroImg from "../public/img/logo.svg";
import Image from "next/image";


export default function Navbar() {
  // add new pages and links here
  // be sure the page name in pageNames is in the same index as its link in links
  const pageNames = ["Filter"];
  const links = ["/filter"]

  return (
    <div className="sticky top-0 z-50">
      <nav className="drop-shadow-sm flex items-center justify-right lg:flex-wrap bg-slate-100 p-0 border-b border-gray-200">
        <div className="flex items-center flex-shrink-0 text-black mr-6 px-2 py-1 w-5/6 lg:w-auto">
          <Link href="/">
            <Image href="/" src={heroImg} width="40" height="40" alt="NEAR Logo" loading="eager" style={{width: "40px", height: "40px" }} />
          </Link>
          <Link 
            href="/"
            className="text-xl font-semibold tracking-tight no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
            &nbsp;&nbsp;NEAR
          </Link>
        </div>
        <Disclosure>
           {({ open }) => (
             <>
               <div className="items-center justify-between w-full lg:w-auto">
                 <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none">
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
                    {pageNames.map((name, index) => (
                      <Link 
                        key={index}
                        href={links[index]}
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                        {name}
                      </Link>
                    ))}
                    <Link 
                      href="/login"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                      Log In
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {pageNames.map((name, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link 
                  href={links[index]}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-center lg:flex lg:items-center w-full flex-grow lg:w-auto">
          <div className="text-xl lg:flex-grow">
          </div>
          <Link 
            href="/login"
            className="justify-end inline-block px-8 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
            Log In
          </Link>
        </div>
      </nav>
    {/* </div> */}
    </div>
  );
}
