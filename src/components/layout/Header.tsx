"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { NAV_LINKS } from "@/constants/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!headerBarRef.current) return;

    const updateHeight = () => {
      setHeaderHeight(headerBarRef.current?.getBoundingClientRect().height ?? 0);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(headerBarRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const smoothScrollTo = useCallback((targetY: number, duration = 1600) => {
    if (typeof window === "undefined") return;
  
    const startY = window.scrollY || window.pageYOffset;
    const diff = targetY - startY;
    let start: number | null = null;
  
    const easeInOut = (t: number) => 0.5 * (1 - Math.cos(Math.PI * t));
  
    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const time = timestamp - start;
      const progress = Math.min(time / duration, 1);
      const eased = easeInOut(progress);
  
      window.scrollTo(0, startY + diff * eased);
  
      if (time < duration) {
        requestAnimationFrame(step);
      }
    };
  
    requestAnimationFrame(step);
  }, []);

  const scrollToApplication = useCallback(() => {
    const target = document.getElementById("application-form");
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const headerOffset = headerHeight || 0;
    const targetY = rect.top + window.scrollY - headerOffset - 16;

    smoothScrollTo(targetY, 1600);
  }, [headerHeight, smoothScrollTo]);

  useEffect(() => {
    if (pathname !== "/") return;
    const scrollTarget = searchParams.get("scrollTo");
    if (scrollTarget !== "application-form") return;

    const id = window.requestAnimationFrame(() => {
      scrollToApplication();
      router.replace("/", { scroll: false });
    });

    return () => window.cancelAnimationFrame(id);
  }, [pathname, searchParams, router, scrollToApplication]);


  const handleApplicationClick = () => {
    setIsMenuOpen(false);
    if (pathname !== "/") {
      router.push("/?scrollTo=application-form", { scroll: false });
      return;
    }

    scrollToApplication();
  };

  const renderLinks = (variant: "desktop" | "mobile") => (
    <ul
      className={
        variant === "desktop"
          ? "flex items-center gap-13 text-xs leading-[140%] tracking-[0.09em]"
          : "flex flex-col gap-4 text-xs"
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
      <div
        ref={headerBarRef}
        className="mx-auto flex max-w-8xl justify-between px-5 py-5 md:px-9 md:py-9 lg:items-end"
      >
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

        <div className="hidden lg:flex lg:flex-col lg:items-end lg:gap-3.5 lg:mb-1.5 xl:flex-row xl:gap-13 xl:mb-0">
          <nav>{renderLinks("desktop")}</nav>
          <button
            type="button"
            onClick={handleApplicationClick}
            className="uppercase text-accent-aqua text-xs leading-[140%] tracking-[0.09em] cursor-pointer"
          >
            Оставить заявку
          </button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-white lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Меню</span>
          <div className="relative h-3 w-7">
            <span
              className={`absolute left-0 h-px w-full bg-accent-aqua transition-all duration-300 ${
                isMenuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-0 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-accent-aqua transition-all duration-300 ${
                isMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0 rotate-0"
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className="lg:hidden fixed left-0 right-0 bg-black transition-[height] duration-300"
        style={{
          top: headerHeight,
          height: isMenuOpen ? `calc(100vh - ${headerHeight}px)` : 0,
          pointerEvents: isMenuOpen ? "auto" : "none",
        }}
      >
        <div className="mt-3 h-full flex flex-col gap-4 overflow-y-auto px-4 sm:px-6" >
          {renderLinks("mobile")}
          <button
            type="button"
            onClick={handleApplicationClick}
            className="w-max uppercase text-accent-aqua text-xs tracking-[0.09em] cursor-pointer"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
