"use client";

import { useEffect, useState } from "react";

import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import H2Head from "@/components/ui/H2Head";
import Card from "@/components/ui/Card";
import SwiperNavButton from "@/components/ui/SwiperNavButton";
import useSwiperClasses from "@/hooks/useSwiperClasses";

const CARDS = [
  {
    client: "Шоколадница",
    manager: "Чистяков Марк",
    post: "Начальник управления",
    department: "Управление эксплуатации и развития ИТ-сервисов",
    quote: "Мы обратились к mrnet, поскольку нам было необходимо обеспечить стабильный сигнал для видеонаблюдения, эквайринга и работы кафе в проблемных точках. Сотрудники компании предложили отличное решение: разделить сигнал на офис и зал, что повысило качество и отказоустойчивость. Сейчас мультироутеры mrnet стали основным интернет-каналом в некоторых точках, а в других локациях mrnet рассматривается в качестве резервного канала для надежности. На наш взгляд, ребята предлагают одно из самых инновационных решений для Ногеса и ритейла",
  },
  {
    client: "Ермолино",
    manager: "Тараканов Михаил",
    post: "Руководитель",
    department: "СИТ АО «Подмосковия»",
    quote: "У нас много торговых точек, и стабильный интернет — постоянная проблема. Мы пробовали разные решения, но это только усложняло ситуацию, добавляя путаницу со счетами с увеличением количества контрагентов. С mrnet мы смогли упорядочить документооборот и организовать управление оборудованием в одном удобном личном кабинете. Оперативная техническая поддержка стала для нас надежным помощником. Теперь более 150 наших точек продаж используют mrnet как основной канал связи, и это только начало!",
  },
  {
    client: "Аптеки 36,6",
    manager: "Константин Старцев",
    post: "Руководитель",
    department: "Департамент информационных технологий",
    quote: "Когда бизнес расширяется, особенно важна скорость партнёров и готовность помочь. Когда у провайдера в Великом Новгороде случилась авария, mrnet за несколько часов доставили мультироутер и удаленно настроили соединение в 8 из 12 наших аптек. Удобство подключения, возможность удаленного контроля всех точек из одного кабинета и реактивная поддержка в telegram — важные преимущества mrnet!",
  },
  {
    client: "Айкрафт",
    manager: "Максим Ландрок",
    post: "Руководитель",
    department: "Отдел технической поддержки",
    quote: "mrnet — наш надежный партнер в развитии и расширении бизнеса. Узнали про компанию от коллег из ИТ и не пожалели о выборе: подключают мгновенно, фактически за день, стабильный интернет обеспечен! Что еще важно — все расходы прозрачны и фиксированы, что позволяет планировать бюджет в любом регионе",
  },
];

const TestDrive = () => {
  const { swiper, prev, next, pagination } = useSwiperClasses("test-drive");
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!swiperInstance) {
      return undefined;
    }

    const updateLockedState = () => {
      setIsLocked(swiperInstance.isLocked);
    };

    updateLockedState();

    swiperInstance.on("lock", updateLockedState);
    swiperInstance.on("unlock", updateLockedState);

    return () => {
      swiperInstance.off("lock", updateLockedState);
      swiperInstance.off("unlock", updateLockedState);
    };
  }, [swiperInstance]);

  return (
    <section>
      <div className="w-full max-w-8xl mx-auto px-5 md:px-9">
        <H2Head className="mb-8.5 md:w-4/5 lg:w-2/3 xl:w-1/2">
          95% клиентов выбирают <span className="lowercase text-3xl leading-7 md:text-[42px]">mrnet</span> после тест-драйва
        </H2Head>
      </div>

      <div className="w-full px-5 md:px-9 lg:px-0">
        <div className="lg:pl-9">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            loop
            breakpoints={{
              1024: {
                slidesPerView: "auto" as const,
                spaceBetween: 12,
              },
            }}
            navigation={{ prevEl: `.${prev}`, nextEl: `.${next}` }}
            pagination={{ el: `.${pagination}`, clickable: true }}
            onSwiper={setSwiperInstance}
            className={[
              "test-drive-swiper",
              swiper,
              isLocked ? "test-drive-swiper--locked" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {CARDS.map((card, i) => (
              <SwiperSlide key={i} className="!h-120 !w-full lg:!w-[563px] lg:!h-90">
                <Card className="h-full">
                  <div className="flex gap-6 mb-13.5">
                    <div className="text-accent-aqua text-xs">
                      <h3 className="uppercase font-medium">{card.client}</h3>
                      <p className="w-max md:text-sm md:leading-[19px]">{card.manager}</p>
                    </div>
                    <div className="text-xs leading-4 md:text-sm md:leading-[19px]">
                      <p>{card.post}</p>
                      <p>{card.department}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg leading-5.5 line-clamp-14 md:line-clamp-10">
                    {card.quote}
                  </blockquote>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div
          className={`w-full max-w-8xl mx-auto flex items-center justify-between gap-4 mt-7 lg:px-9 ${
            isLocked ? "hidden" : ""
          }`}
        >
          <SwiperNavButton
            direction="prev"
            ariaLabel="Предыдущая карточка"
            srText="Назад"
            className={prev}
          />

          <div
            className={`${pagination} swiper-pagination-shared flex items-center justify-center gap-3 ${
              isLocked ? "hidden" : ""
            }`}
          />

          <SwiperNavButton
            direction="next"
            ariaLabel="Следующая карточка"
            srText="Вперед"
            className={next}
          />
        </div>
      </div>
    </section>
  );
};

export default TestDrive;
