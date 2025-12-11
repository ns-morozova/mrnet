import Image from "next/image";

import H2Head from "@/components/ui/H2Head";

const CITIES = [
    {
        number: 1,
        city: "Москва",
        tel: "8 800 600 35 38",
    },
    {
        number: 2,
        city: "Санкт-Петербург",
        tel: "8 931 394 46 11",
    },
    {
        number: 3,
        city: "Казань",
        tel: "8 904 769 96 54",
    },
    {
        number: 4,
        city: "Краснодар",
        tel: "8 993 307 01 77",
    },
    {
        number: 5,
        city: "Челябинск",
        tel: "8 922 636 86 06",
    },
    {
        number: 6,
        city: "Екатеринбург",
        tel: "8 902 635 22 39",
    },
    {
        number: 7,
        city: "Новосибирск",
        tel: "8 902 635 22 39",
    },
    {
        number: 8,
        city: "Владивосток",
        tel: "8 902 635 22 39",
    },
];

const Connection = () => (
  <section className="w-full max-w-8xl mx-auto px-5 md:px-9">
    <H2Head className="mb-5 md:mb-7 md:w-17/20 lg:w-4/5 xl:w-auto">
      Подключаем к стабильному интернету по всей России
    </H2Head>

    <div className="border border-accent-flame rounded-lg px-2 mb-8.5 md:mb-10 lg:px-8">
        <div className="relative w-full
            aspect-67/65
            lg:aspect-1367/800
        ">
            <Image
                src="/images/land/map.svg"
                alt="Карта России"
                fill
                priority
            />
        </div>
    </div>

    <div className="lg:hidden">
        <h3 className="uppercase text-xs leading-[19px] tracking-[0.07em] mb-6">Отделы продаж:</h3>

        <div className="grid grid-flow-col grid-rows-4 gap-x-4 gap-y-2.5">
            {CITIES.map((city) => (
                <div key={city.number} className="flex gap-2.5">
                    <span className="mt-1 inline-flex w-4 h-4 shrink-0 items-center justify-center bg-accent-aqua text-black text-xs leading-5.5">
                        {city.number}
                    </span>
                    <div className="leading-5.5">
                        <p>{city.city}</p>
                        <p>{city.tel}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </section>
);

export default Connection;
