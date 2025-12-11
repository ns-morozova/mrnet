import Image from "next/image";

import H2Head from "@/components/ui/H2Head";

const logos = [
  { src: "/images/clients/33904.png", alt: "Надежда Фарм" },
  { src: "/images/clients/33903.png", alt: "Aicraft" },
  { src: "/images/clients/33902.png", alt: "Покупочка" },
  { src: "/images/clients/33901.png", alt: "ОПТК" },
  { src: "/images/clients/33900.png", alt: "Алёнка" },
];

const marqueeBase = Array.from({ length: 3 }, () => logos).flat();
const marqueeSequence = [...marqueeBase, ...marqueeBase];

const Clients = () => (
  <section>
    <div className="w-full max-w-8xl mx-auto px-5 md:px-9">
      <H2Head className="mb-6 w-2/3 md:mb-8.5">500+ клиентов уже с нами</H2Head>
    </div>
    
    <div className="overflow-hidden">
        <div className="animate-clients-marquee flex w-max gap-3 will-change-transform md:gap-5">
            {marqueeSequence.map((logo, index) => (
            <div
                key={`${logo.alt}-${index}`}
                className=""
            >
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={140}
                    height={51}
                    className="md:w-55 md:h-auto"
                />
            </div>
            ))}
        </div>
    </div>
  </section>
);

export default Clients;