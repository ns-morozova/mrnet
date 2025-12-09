import Link from "next/link";
import Image from "next/image";

const Footer = () => (
  <footer className="w-full max-w-8xl mx-auto px-5 py-10 md:px-9">
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
      <p className="uppercase text-xs">
        Категорически новый интернет для бизнеса
      </p>
    </div>
    
  </footer>
);

export default Footer;
