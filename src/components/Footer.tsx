import Link from "next/link";
import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <div className="relative">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10  mx-auto border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5 p-8">
        <div className="lg:col-span-2">
          <div>
            {" "}
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

          <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            <b>English with Labelle</b> oferece aulas de inglês personalizadas
            desde 2019. Com anos de experiência e um profundo conhecimento das
            necessidades dos alunos.
          </div>
        </div>

        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"></div>
        </div>
        <div>
          <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0"></div>
        </div>

        <div>
          <div>Nossas redes</div>
          <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
            <a
              href="https://www.instagram.com/englishwithlabelle"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">Instagram</span>
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com/englishwithlabelle"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">Facebook</span>
              <Facebook />
            </a>
            <a
              href="https://www.linkedin.com/company/english-with-labelle/"
              target="_blank"
              rel="noopener"
            >
              <span className="sr-only">Linkedin</span>
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="my-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
        <a href="https://web3templates.com/" target="_blank" rel="noopener">
          Web3Templates.
        </a>{" "}
        Illustrations from{" "}
        <a href="https://www.glazestock.com/" target="_blank" rel="noopener">
          Glazestock
        </a>
        <br />
        Edited by{" "}
        <a
          href="https://www.linkedin.com/in/hudsonsalles/"
          target="_blank"
          rel="noopener"
        >
          Hudson Salles
        </a>
      </div>
      <div className="flex mt-5 justify-end min-w-full">
        <a
          href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
          target="_blank"
          rel="noopener"
          className="relative block w-44"
        >
          <Image
            src="/img/vercel.svg"
            alt="Powered by Vercel"
            width="212"
            height="44"
          />
        </a>
      </div>
    </div>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
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
