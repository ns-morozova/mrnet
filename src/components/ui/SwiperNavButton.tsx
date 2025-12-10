"use client";

import Image from "next/image";

type SwiperNavButtonProps = {
  direction: "prev" | "next";
  ariaLabel: string;
  srText: string;
  className?: string;
};

const baseClassName =
  "relative h-12 w-12 flex items-center justify-center rounded-full shrink-0 border border-accent-aqua cursor-pointer";

const SwiperNavButton = ({ direction, ariaLabel, srText, className }: SwiperNavButtonProps) => (
  <button
    type="button"
    aria-label={ariaLabel}
    className={[baseClassName, className].filter(Boolean).join(" ")}
  >
    <span className="sr-only">{srText}</span>
    <Image
      src="/icons/arrow.svg"
      alt="Arrow"
      width={12}
      height={26}
      className={direction === "next" ? "rotate-180" : undefined}
    />
  </button>
);

export default SwiperNavButton;
