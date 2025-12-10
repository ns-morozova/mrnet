"use client";

import { useId } from "react";

const sanitizeId = (value: string) => value.replace(/:/g, "");

const useSwiperClasses = (prefix: string) => {
  const id = sanitizeId(useId());
  const withPrefix = (suffix: string) => `${prefix}-${suffix}-${id}`;

  return {
    swiper: withPrefix("swiper"),
    prev: withPrefix("swiper-prev"),
    next: withPrefix("swiper-next"),
    pagination: withPrefix("swiper-pagination"),
  };
};

export default useSwiperClasses;
