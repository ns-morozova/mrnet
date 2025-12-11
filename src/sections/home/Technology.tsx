import Image from "next/image";
import H2Head from "@/components/ui/H2Head";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const Technology = () => (
  <section className="w-full max-w-8xl mx-auto px-5 md:px-9">
    <H2Head className="hidden lg:block mb-6 md:mb-8.5">
      Технология
    </H2Head>

    <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-3">
        <div
            className="
                relative w-full rounded-lg overflow-hidden
                h-55 md:h-82 lg:h-auto
            "
        >
            <Image
                src="/images/technology.jpg"
                alt="MRNet"
                fill
                priority
                className="object-cover"
            />
        </div>

        <Card variant="flame" className="lg:w-[41.15%] lg:shrink-0">
            <p className="text-lg leading-5.5 mb-16 md:text-2xl md:leading-7.5 md:mb-12.5">
                Прокачайте свой интернет с высокоскоростными технологиями <span className="font-medium">mrnet</span>. Наш мультироутер суммирует несколько каналов связи в один (технология бондинг), значительно повышая устойчивость и скорость соединения!
            </p>
            <Button variant="primary" className="mx-auto lg:mx-0">
                О технологии
            </Button>
        </Card>
    </div>
  </section>
);

export default Technology;
