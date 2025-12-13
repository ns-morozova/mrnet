"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import H2Head from "@/components/ui/H2Head";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SwiperNavButton from "@/components/ui/SwiperNavButton";
import useSwiperClasses from "@/hooks/useSwiperClasses";

const CARDS = [
    {
      title: "Ценим ваше время",
      text1: "Подключите мультироутер с быстрым интернетом всего за 7 минут. Наши устройства работают по принципу Plug'n'Play (подключи и пользуйся).",
      text2: "Вы получаете надёжную связь и отсутствие головной боли в виде договоров с разными провайдерами",
    },
    {
      title: "Безграничные возможности",
      text1: "Подберём оборудование для новых точек и оперативно подключим к интернету по любому адресу.",
      text2: "Всё это — без необходимости заключения дополнительных контрактов",
    },
    {
        title: "Индивидуальный подход",
        text1: "Мы всегда идем навстречу клиенту, предлагая оптимальное по стоимости решение.",
        text2: "Заполните заявку, и в рабочее время мы за 1 час сделаем расчёт",
      },
];

const Solution = () => {
  const { swiper, prev, next, pagination } = useSwiperClasses("solution");

  return (
    <section className="w-full max-w-8xl mx-auto px-5 md:px-9">
      <H2Head className="mb-5 md:mb-7 lg:w-7/10 xl:w-11/20">
        Решение, созданное айтишниками для айтишников
      </H2Head>

      <div className="lg:hidden mb-11">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop
          navigation={{ prevEl: `.${prev}`, nextEl: `.${next}` }}
          pagination={{ el: `.${pagination}`, clickable: true }}
          className={`solution-swiper ${swiper}`}
        >
          {CARDS.map((card, i) => (
            <SwiperSlide key={i}>
              <Card variant="flame">
                <h3 className="uppercase text-lg leading-4.5 tracking-[0.04em] mb-16 md:text-[20px] md:leading-5">
                  {card.title}
                </h3>
                <div className="space-y-6.5 text-lg leading-5.5">
                  <p>{card.text1}</p>
                  <p>{card.text2}</p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full flex items-center justify-center gap-4 mt-7">
          <SwiperNavButton
            direction="prev"
            ariaLabel="Предыдущая карточка"
            srText="Назад"
            className={prev}
          />

          <div className={`${pagination} swiper-pagination-shared flex items-center justify-center gap-3`} />

          <SwiperNavButton
            direction="next"
            ariaLabel="Следующая карточка"
            srText="Вперед"
            className={next}
          />
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-3 lg:mb-3">
        {CARDS.map((card, i) => (
          <Card key={i} variant="flame" className="justify-start">
            <h3 className="h-23 uppercase tracking-[0.04em] md:text-[26px] md:leading-7.5">
              {card.title}
            </h3>
            <div className="space-y-6.5 text-lg leading-5.5">
              <p>{card.text1}</p>
              <p>{card.text2}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col-reverse gap-2.5 mb-2.5 lg:grid lg:grid-cols-2 lg:gap-3 lg:mb-8.5">
        <article className="h-77.5 lg:h-99.5 p-3.5 text-black flex flex-col justify-between rounded-lg bg-[linear-gradient(68.23deg,#FF4C00_9.46%,#B38BCE_52.36%,#00E4F0_91.95%)] md:pt-4.5 md:pb-5 md:px-7.5">
            <h2 className="uppercase font-medium text-2xl leading-8 md:text-[45px] md:leading-[53px]">
                Попробуйте <br /> 14 дней бесплатно
            </h2>
            <p className="text-lg leading-5.5 md:text-2xl md:leading-7.5 xl:w-49/50">
                Развивайте свою инфру с <span className="font-medium">mrnet</span>. Без лишних затрат и костылей. Высокоскоростной интернет — удобно, эффективно!
            </p>
        </article>
        <div className="relative w-full rounded-lg overflow-hidden h-55 md:h-110 lg:h-auto">
            <Image
                src="/images/solution.jpg"
                alt="Solution"
                fill
                className="object-cover"
            />
        </div>
      </div>

      <Button variant="secondary" className="md:mx-auto">
        Начать!
      </Button>
    </section>
  );
};

export default Solution;
