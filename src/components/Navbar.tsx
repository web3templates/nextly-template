import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { DisclosureClient } from "@/components/DisclosureClient";

async function loader() {
  // Fetch your data here
  const data = {
    id: 1,
    title: 'Global Setting Page',
    description: 'Responsible for global website settings.',
    createdAt: '2024-05-20T16:59:58.446Z',
    updatedAt: '2024-05-21T05:03:11.112Z',
    publishedAt: '2024-05-20T16:59:59.488Z',
    topnav: {
      id: 1,
      logoLink: {
        id: 1,
        text: 'Nextly',
        href: '/',
        image: {
          id: 1,
          url: '/img/logo.svg',
          alternativeText: null,
          name: 'logo.svg'
        }
      },
      link: [
        { id: 1, href: '/', text: 'Home', external: false },
        { id: 3, href: '/features', text: 'Features', external: false },
        { id: 4, href: '/pricing', text: 'Pricing', external: false },
        { id: 5, href: '/company', text: 'Company', external: false },
        { id: 2, href: '/blog', text: 'Blog', external: false }
      ],
      cta: {
        id: 6,
        href: 'https://strapi.io',
        text: 'Get Started',
        external: true
      }
    },
    meta: {}
  }
  
  
  return data;
}

interface NavbarData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  topnav: {
    id: number;
    logoLink: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
    };
    link: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    cta: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    };
  };
  meta: Record<string, any>;

}

export async function Navbar() {
  const data = await loader() as NavbarData;
  if (!data) return null;
  const navigation = data.topnav.link;
  const cta = data.topnav.cta;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <DisclosureClient topnav={data.topnav} />

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href={cta.href}
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            target={cta.external ? "_blank" : "_self"}
          >
            {cta.text}
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}


