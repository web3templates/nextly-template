import Link from "next/link";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  const navigation = ["Services", "Projects", "About Us", "Contact"];
  const legal = ["Terms", "Privacy", "Legal"];
  return (
    <div className="relative border-t border-white/10 bg-black">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-bold text-white font-nunito tracking-wider"
              >
                <span>Cypher Ridge</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-400 font-inter">
              We build scalable software solutions. From artificial intelligence to custom web and mobile apps, your idea built right.
            </div>
            
            <div className="mt-4">
              <a href="mailto:info@cypherridge.com" className="text-custom-orange hover:text-custom-peach transition-colors font-semibold">
                info@cypherridge.com
              </a>
            </div>
            <div className="mt-1">
              <a href="https://cypherridge.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                cypherridge.com
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-400 rounded-md hover:text-white focus:text-white focus:outline-none transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-full px-4 py-2 text-gray-400 rounded-md hover:text-white focus:text-white focus:outline-none transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <div className="text-white font-semibold">Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="hover:text-custom-orange transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="hover:text-custom-orange transition-colors"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-500 font-inter">
          Copyright © {new Date().getFullYear()} Cypher Ridge. All rights reserved.
        </div>
      </Container>
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);
