import Image from "next/image";

import H2Head from "@/components/ui/H2Head";
import { CITIES, MAP_POINTS, POINT_LEFT_OFFSET } from "@/constants/network";

const Connection = () => (
  <section id="network" className="w-full max-w-8xl mx-auto px-5 md:px-9 overflow-hidden">
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
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 lg:hidden">
                    {MAP_POINTS.map((point) => (
                        <div
                            key={`mobile-${point.id}`}
                            className="absolute w-[18.6667vw] max-w-[140px]"
                            style={{
                                top: `${point.mobile.top}%`,
                                left: `${point.mobile.left - POINT_LEFT_OFFSET}%`,
                            }}
                        >
                            <Image
                                src="/images/land/point.svg"
                                alt=""
                                width={160}
                                height={160}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 hidden lg:block">
                    {MAP_POINTS.map((point) => (
                        <div
                            key={`desktop-${point.id}`}
                            className="absolute w-[11.1111vw] max-w-40"
                            style={{
                                top: `${point.desktop.top}%`,
                                left: `${point.desktop.left - POINT_LEFT_OFFSET}%`,
                            }}
                        >
                            <Image
                                src="/images/land/point.svg"
                                alt=""
                                width={160}
                                height={160}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 lg:hidden">
                    {CITIES.map((city) => (
                        <div
                            key={`mobile-city-${city.number}`}
                            className="absolute flex h-4 w-4 shrink-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-accent-aqua text-xs leading-none text-black"
                            style={{
                                top: `${city.position.mobile.top}%`,
                                left: `${city.position.mobile.left - POINT_LEFT_OFFSET}%`,
                            }}
                        >
                            {city.number}
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 hidden lg:block">
                    {CITIES.map((city) => {
                        const isChelyabinsk = city.number === 5;

                        return (
                            <div
                                key={`desktop-city-${city.number}`}
                                className="absolute text-black"
                                style={{
                                    top: `${city.position.desktop.top + 0.5}%`,
                                    left: `${city.position.desktop.left - POINT_LEFT_OFFSET - 1}%`,
                                }}
                            >
                                <div
                                    className={`flex ${
                                        isChelyabinsk ? "items-start" : "items-end"
                                    }`}
                                >
                                    <span className="inline-flex h-3 w-3 shrink-0 bg-white" />
                                    <div
                                        className={`${
                                            isChelyabinsk ? "mt-3" : "mb-3"
                                        } w-max bg-accent-aqua leading-5.5 px-1`}
                                    >
                                        <p className="font-medium">
                                            {city.city}
                                        </p>
                                        <p>
                                            {city.tel}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="lg:hidden absolute -top-1.5 -left-3 flex items-center">
                <Image
                    src="/images/land/point.svg"
                    alt=""
                    width={70}
                    height={70}
                />
                <span className="uppercase text-xs leading-[19px] tracking-[0.07em]">Наши клиенты</span>
            </div>
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

    <div className="hidden lg:flex justify-center gap-16 text-lg">
        <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 shrink-0 bg-accent-flame rotate-45"></div>
            <span>Наши клиенты</span>
        </div>
        <div className="flex items-center gap-3">
        <div className="w-2.5 h-2.5 shrink-0 bg-white"></div>
            <span>Отделы продаж</span>
        </div>
    </div>
  </section>
);

export default Connection;
