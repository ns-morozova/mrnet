import Image from "next/image";
import H2Head from "@/components/ui/H2Head";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const CARDS = [
  {
    title: "Мониторинг",
    text1: "Графики потребления трафика",
    text2: "Просмотр подключенных к мультироутеру сетевых устройств",
  },
  {
    title: "Тонкая настройка",
    text1: "Настройка тоннелей PPTP, L2TP, GRE, IPIP",
    text2: "Настройка пробросов портов",
  },
];

const PersonalSettings = () => (
  <section className="w-full max-w-8xl mx-auto px-5 md:px-9">
    <H2Head className="mb-5 md:mb-7 lg:w-14/15 xl:w-3/4">
      Настраивайте сеть и управляйте всеми устройствами через единый личный кабинет
    </H2Head>

    <div className="flex flex-col gap-2.5 lg:flex-row lg:justify-between lg:gap-3">
      <div className="space-y-2.5 lg:min-w-[41.15%]">
        {CARDS.map((card, i) => (
          <Card key={i}>
            <h3 className="uppercase text-lg leading-4.5 tracking-[0.04em] md:text-[26px] md:leading-6">
              {card.title}
            </h3>

            <div className="space-y-6.5 text-lg leading-5.5">
              <p>{card.text1}</p>
              <p>{card.text2}</p>
            </div>
          </Card>
        ))}
      </div>

      <div
        className="
          relative w-full rounded-lg overflow-hidden
          h-55 md:h-110 lg:h-auto
        "
      >
        <Image
          src="/images/laptop.jpg"
          alt="MRNet"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>

    <Button variant="primary" className="mx-auto mt-8.5">
      Испытать все возможности
    </Button>
  </section>
);

export default PersonalSettings;
