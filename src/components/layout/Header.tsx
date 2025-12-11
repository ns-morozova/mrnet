"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderLinks = (variant: "desktop" | "mobile") => (
    <ul
      className={
        variant === "desktop"
          ? "flex items-center gap-13 text-xs leading-[140%] tracking-[0.09em]"
          : "flex flex-col gap-4 py-4 text-xs"
      }
    >
      {NAV_LINKS.map((item) => {
       
        return (
          <li key={item.href} className="uppercase transition-colors duration-200 hover:text-accent-aqua">
            <Link
              href={item.href}
              onClick={variant === "mobile" ? () => setIsMenuOpen(false) : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-8xl items-end justify-between px-5 py-5 md:px-9 md:py-9">
        <div className="flex flex-col gap-3.5 xl:flex-row xl:items-end xl:gap-14">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="MRNet"
              width={185}
              height={41}
              priority
              className="h-auto w-40 md:w-46"
            />
          </Link>
          <span className="text-accent-aqua text-xs leading-[140%]">+ 7 (800) 600-35-38</span>
        </div>
        

        {/* <nav className="hidden lg:block">{renderLinks("desktop")}</nav> */}

        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-3.5 lg:mb-1.5 xl:flex-row xl:gap-13 xl:mb-0">
          <nav>{renderLinks("desktop")}</nav>
          <span className="uppercase text-accent-aqua text-xs leading-[140%] tracking-[0.09em]">
            Оставить заявку
          </span>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-white lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Меню</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span className={`block h-0.5 w-6 bg-white ${isMenuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`px-4 sm:px-6 lg:hidden ${
          isMenuOpen ? "max-h-96 border-t border-stroke/50" : "max-h-0"
        } overflow-hidden bg-ink/95 text-white transition-[max-height] duration-300`}
      >
        {renderLinks("mobile")}
      </div>
    </header>
  );
};

export default Header;
