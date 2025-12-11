import Image from "next/image";
import H2Head from "@/components/ui/H2Head";

const ITEMS = [
  { title: "Не балансируем", src: "/images/train1.jpg" },
  { title: "А суммируем", src: "/images/train2.jpg" },
];

const Summation = () => (
  <section className="w-full max-w-8xl mx-auto grid gap-11 px-5 md:px-9 lg:grid-cols-2 lg:gap-3">
    {ITEMS.map((item, i) => (
      <div key={i}>
        <H2Head className="mb-6 md:mb-8.5">{item.title}</H2Head>

        <div className="relative w-full rounded-lg overflow-hidden h-55 md:h-110 lg:h-113">
          <Image
            src={item.src}
            alt={item.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    ))}
  </section>
);

export default Summation;
