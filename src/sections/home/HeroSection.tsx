import Image from "next/image";
import Button from "@/components/ui/Button";

const FEATURES = [
  "Мультироутер с технологией суммирования нескольких каналов связи в один",
  "Высокая скорость и отказоустойчивость интернет-соединения",
  "Единый договор на ПО, оборудование и связь",
  "Простое подключение за 7 минут",
  "Моментальная техподдержка 24/7 в Telegram",
];

const HeroSection = () => (
  <section className="w-full max-w-7xl mx-auto space-y-2.5 px-5 md:px-9">
    <div className="flex flex-col-reverse gap-2.5 lg:flex-row lg:justify-between lg:gap-3 lg:items-stretch">
      <article className="bg-linear-to-r from-black to-accent-flame border border-accent-flame rounded-lg px-4 py-2.5 md:px-5 md:py-4 lg:w-3/5">
        <h1 className="uppercase font-normal text-3xl leading-8.5 tracking-[0.03em] mb-4 md:text-[50px] md:leading-[55px]">
          Беспроводной интернет для бизнеса
        </h1>
        <p className="uppercase text-lg leading-6 tracking-[0.06em] mb-12 md:text-[26px] md:leading-8">
          от <span className="font-bold">2 990</span> рублей* в месяц! <br /> Установка по любому адресу в РФ!
        </p>
        <Button variant="primary" className="mb-12">
          Подключить
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
          lg:w-2/5 lg:aspect-auto lg:h-auto
        "
      >
        <Image
          src="/images/main.jpg"
          alt="MRNet"
          fill
          priority
          className="object-cover"
          // sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
