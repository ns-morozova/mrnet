import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="w-full max-w-8xl mx-auto flex flex-col gap-6 pt-10 lg:flex-row lg:justify-between">
    <div className="px-5 md:px-9">
      <div className="flex gap-7.5">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="MRNet"
              width={185}
              height={41}
              priority
              className="h-auto w-40 md:w-46"
            />
          </Link>
          <p className="uppercase text-[11px] leading-[15px] tracking-[0.07em] md:text-xs md:leading-4.5">
            Категорически новый <br /> интернет для бизнеса
          </p>
        </div>
        <span className="lg:hidden text-[11px] leading-4 mt-2">©2025 mrnet.ru <br /> Все права защищены</span>
      </div>
    </div>

    <div className="lg:hidden relative w-full h-67 sm:h-124 md:w-2/3 md:ml-auto md:h-120">
      <Image
        src="/images/footer_mob.svg"
        alt="MRNet"
        fill
        priority
        className="object-cover"
      />
    </div>

    <div className="hidden lg:block relative w-1/4 aspect-367/327 xl:w-92">
      <Image
        src="/images/footer_desktop.svg"
        alt="MRNet"
        fill
        priority
        className="object-cover"
      />
    </div>
  </footer>
);

export default Footer;
