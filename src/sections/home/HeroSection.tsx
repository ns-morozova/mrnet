"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const FEATURES = [
  "Мультироутер с технологией суммирования нескольких каналов связи в один",
  "Высокая скорость и отказоустойчивость интернет-соединения",
  "Единый договор на ПО, оборудование и связь",
  "Простое подключение за 7 минут",
  "Моментальная техподдержка 24/7 в Telegram",
];

const CARDS = [
  {
    icon: "/icons/wifi.svg",
    iconWidth: 82,
    text: "Надежный и быстрый интернет, который не падает",
  },
  {
    icon: "/icons/control.svg",
    iconWidth: 106,
    text: "Контроль всей сети через гибкую настройку",
  },
  {
    icon: "/icons/tool.svg",
    iconWidth: 64,
    text: "Единый инструмент для масштабирования по всей стране",
  },
];

const HeroSection = () => (
  <section className="w-full max-w-8xl mx-auto space-y-2.5 px-5 md:px-9">
    <div className="flex flex-col-reverse gap-2.5 lg:flex-row lg:justify-between lg:gap-3 lg:items-stretch">
      <article className="
          bg-black
          bg-[linear-gradient(240.21deg,#FF4C00_0.52%,rgba(0,0,0,0)_74.06%)]
          border border-accent-flame rounded-lg
          px-4 py-2.5 md:px-5 md:py-4 lg:w-3/5
      ">
        <h1 className="uppercase font-normal text-3xl leading-8.5 tracking-[0.03em] mb-4 md:text-[50px] md:leading-[55px]">
          Беспроводной интернет для бизнеса
        </h1>
        <p className="uppercase text-lg leading-6 tracking-[0.06em] mb-12 md:text-[26px] md:leading-8">
          от <span className="font-bold">2 990</span> рублей* в месяц! <br /> Установка по любому адресу в РФ!
        </p>
        <Button variant="primary" className="mb-12">
          Попробовать
        </Button>
        <ul className="list-disc pl-5 align-bottom font-sans text-lg leading-5.5 tracking-[0.01em] mb-8.5">
          {FEATURES.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
        <p className="text-grey text-xs leading-4 -tracking-[0.01em]">
          * Без учета стоимости оборудования, возможен выкуп оборудования или аренда, стоимость будет зависеть от модели мультироутера
        </p>
      </article>

      <div
        className="
          relative w-full rounded-lg overflow-hidden
          aspect-67/54
          lg:w-[41.15%] lg:aspect-auto lg:h-auto lg:shrink-0
        "
      >
        <Image
          src="/images/main.jpg"
          alt="MRNet"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>

    <div className="lg:hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation={{ prevEl: ".hero-swiper-prev", nextEl: ".hero-swiper-next" }}
        pagination={{ el: ".hero-swiper-pagination", clickable: true }}
        className="hero-swiper"
      >
        {CARDS.map((card, i) => (
          <SwiperSlide key={i}>
            <Card>
              <Image
                src={card.icon}
                alt="Icon"
                width={card.iconWidth}
                height={60}
              />
              <p className="uppercase text-lg leading-4.5 tracking-[0.04em]">
                {card.text}
              </p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex items-center justify-center gap-4 mt-7">
        <button
          type="button"
          className="hero-swiper-prev relative h-12 w-12 flex items-center justify-center rounded-full shrink-0 border border-accent-aqua"
          aria-label="Предыдущая карточка"
        >
          <span className="sr-only">Назад</span>
          <Image src="/icons/arrow.svg" alt="Arrow Prev" width={12} height={26} />
        </button>

        <div className="hero-swiper-pagination flex items-center justify-center gap-3" />

        <button
          type="button"
          className="hero-swiper-next h-12 w-12 flex items-center justify-center rounded-full shrink-0 border border-accent-aqua"
          aria-label="Следующая карточка"
        >
          <span className="sr-only">Вперед</span>
          <Image src="/icons/arrow.svg" alt="Arrow Prev" width={12} height={26} className="rotate-180" />
        </button>
      </div>
    </div>

    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-3">
      {CARDS.map((card, i) => (
        <Card key={i}>
          <Image
            src={card.icon}
            alt="Icon"
            width={card.iconWidth}
            height={60}
          />
          <p className="uppercase md:text-[20px] md:leading-5 md:tracking-[0.04em] md:pr-7">
            {card.text}
          </p>
        </Card>
      ))}
    </div>
  </section>
);

export default HeroSection;
