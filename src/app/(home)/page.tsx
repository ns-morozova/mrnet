// import Card from "@/components/ui/Card";
// import Button from "@/components/ui/Button";
// import Input from "@/components/ui/Input";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-9">
      <section className="space-y-2.5">
        <div className="flex flex-col gap-2.5 lg:flex-row-reverse lg:justify-between lg:gap-3">
          <Image
            src="/images/main.jpg"
            alt="MRNet"
            width={335}
            height={270}
            priority
            className="w-full aspect-67/54 rounded-lg lg:w-2/5"
          />
          <article className="bg-linear-to-r from-black to-accent-hot border border-accent-hot rounded-lg px-4 py-2.5 md:px-5 md:py-4">
            <h1 className="uppercase font-normal text-3xl md:text-5xl">
              Беспроводной интернет для бизнеса
            </h1>
          </article>
        </div>
      </section>
    </div>
  );
}
