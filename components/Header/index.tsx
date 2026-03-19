"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "lucide-react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import logoDark from "@/public/jiu-jitsu/subs-stats_logo-no-bg_text.png";
import logoLight from "@/public/jiu-jitsu/subs-stats_logo-text.jpg";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 40) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []); // Empty dependency array ensures this runs only once

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const authUrl = "https://portal.substats.app/signup";
  const cardsUrl = "https://cards.substats.app/";
  const primaryButtonClassName =
    "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-primary/90";
  const iconButtonClassName =
    "inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 hover:scale-105 hover:bg-primary/90";

  return (
    <div className={`relative ${sticky ? "h-[76px]" : "h-0"}`}>
      <header
        className={`header max-w-8xl fixed left-1/2 top-4 z-40 flex w-[calc(100%-2rem)] -translate-x-1/2 rounded-xl bg-transparent  transition-all duration-300 ease-in-out
          ${
            sticky
              ? "bg-white !bg-opacity-10 shadow-sticky backdrop-blur-md dark:border-gray-dark dark:bg-gray-dark dark:shadow-sticky-dark"
              : "bg-transparent"
          }
        `}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="py-4 xl:mr-12">
              <Link href="/" className="">
                <Image
                  src={logoDark}
                  alt="logo"
                  className="hidden w-80 object-cover dark:block md:w-72"
                />
                <Image
                  src={logoLight}
                  alt="logo"
                  className="w-80 rounded-md object-cover dark:hidden md:w-72"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg xl:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block py-4 xl:flex xl:space-x-8">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <a
                            onClick={closeNavbar}
                            href={menuItem.path}
                            className={`flex py-2 text-base xl:mr-0 xl:inline-flex xl:px-0  ${
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </a>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white xl:mr-0 xl:inline-flex xl:px-0 "
                            >
                              {menuItem.title}
                              <span className="pl-0">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark xl:invisible xl:absolute xl:top-[110%] xl:block xl:w-[250px] xl:p-4 xl:opacity-0 xl:shadow-lg xl:group-hover:visible xl:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  onClick={closeNavbar}
                                  className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white xl:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="my-4 flex items-center gap-3 border-t border-body-color/10 pt-4 xl:hidden">
                    <a
                      href={cardsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeNavbar}
                      className={`${primaryButtonClassName} flex-1`}
                    >
                      Make Card
                    </a>
                    <a
                      href={authUrl}
                      onClick={closeNavbar}
                      aria-label="Login or sign up"
                      className={iconButtonClassName}
                    >
                      <User size={20} />
                    </a>
                  </div>
                </nav>
              </div>
              <div className="flex items-center justify-end gap-4 pr-16 xl:pr-0">
                <div>
                  <ThemeToggler />
                </div>
                <a
                  href={cardsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${primaryButtonClassName} hidden xl:inline-flex`}
                >
                  Make Card
                </a>
                <a
                  href={authUrl}
                  aria-label="Login or sign up"
                  className={`${iconButtonClassName} hidden xl:inline-flex`}
                >
                  <User size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
