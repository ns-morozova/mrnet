import Link from "next/link";
import Image from "next/image";

const COMPANY_INFO = [
  "ООО «Ньюком Дистрибьюшн»",
  "ОГРН: 1207700420784",
  "Юридический адрес: 119017, Российская Федерация, г. Москва,",
  "ул. Большая Ордынка, д. 54 стр. 2",
];

const CONTACT_INFO = {
  general: [
    { label: "Почта:", value: "info@mrnet.ru", href: "mailto:info@mrnet.ru" },
    { label: "График работы:", value: "по будням с 9:00 до 19:00 по Москве" },
  ],
  support: [
    { label: "Служба поддержки:" },
    { label: "Тел:", value: "8 (495) 308–41–51", href: "tel:84953084151" },
    { label: "Тел:", value: "8 (800) 600–35–38", href: "tel:88006003538" },
    {
      label: "Почта:",
      value: "helpdesk@mrnet.ru",
      href: "mailto:helpdesk@mrnet.ru",
    },
    { label: "График работы:", value: "24/7" },
  ],
  copyright: "©2025 mrnet.ru Все права защищены",
};

const LEGAL_LINKS = [
  { label: "Пользовательское соглашение", href: "#" },
  {
    label: "Политика в отношении обработки персональных данных",
    href: "#",
  },
  { label: "Согласие об обработке данных", href: "#" },
  { label: "Соглашение о порядке оказания услуг", href: "#" },
  { label: "Соглашение о технической поддержке", href: "#" },
  { label: "Требования по эксплуатации оборудования mrnet", href: "#" },
  {
    label: "Требования к серверным ресурсам для установки ПО",
    href: "#",
  },
];

const INSTRUCTION_LINKS = [
  { label: "Инструкция по работе с личным кабинетом", href: "#" },
  { label: "Инструкция по эксплуатации мультирутера 04", href: "#" },
  { label: "Инструкция по эксплуатации мультирутера 05", href: "#" },
  { label: "Инструкция по эксплуатации мультирутера 06", href: "#" },
  { label: "Инструкция по эксплуатации мультирутера 07", href: "#" },
];

const Footer = () => (
  <footer className="w-full max-w-8xl mx-auto flex flex-col gap-6 pt-10 lg:flex-row lg:justify-between">
    <div className="px-5 md:px-9 lg:hidden">
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
        <span className="text-[11px] leading-4 mt-2">©2025 mrnet.ru <br /> Все права защищены</span>
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

    <div className="hidden lg:flex w-full justify-between gap-6 pl-9 pr-3 pb-20">
        <div className="flex flex-col justify-between w-1/4">
          <div className="text-xs leading-5 tracking-[0.01em]">
            {COMPANY_INFO.map((item) => (
              <p key={item}>
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="MRNet"
                width={185}
                height={41}
                priority
              />
            </Link>
            <p className="uppercase text-xs leading-4.5 tracking-[0.07em]">
              Категорически новый <br /> интернет для бизнеса
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="space-y-6 text-xs leading-5 tracking-[0.01em]">
            <div>
              <p>Почта: <span className="underline">info@mrnet.ru</span></p>
              <p>График работы: по будням</p>
              <p>с 9:00 до 19:00 по Москве</p>
            </div>
            <div>
              <h3>Служба поддержки:</h3>
              <p>Тел: <span className="underline">8 (495) 308–41–51</span></p>
              <p>Тел: <span className="underline">8 (800) 600–35–38</span></p>
              <p>Почта: <span className="underline">helpdesk@mrnet.ru</span></p>
              <p>График работы: 24/7</p>
            </div>
          </div>

          <span className="text-xs leading-[140%] tracking-[0.01em]">©2025 mrnet.ru Все права защищены</span>
          
        </div>

        <div className="text-xs leading-5 tracking-[0.01em] underline">
          <div className="flex flex-col mb-6">
            {LEGAL_LINKS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col">
            {INSTRUCTION_LINKS.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
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
