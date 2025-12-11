import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const ApplicationForm = () => (
  <section className="w-full max-w-8xl mx-auto flex flex-col gap-2.5 px-5 md:px-9 lg:flex-row lg:gap-4">
    <div className="w-full rounded-lg px-3.5 pt-3.5 pb-17 bg-[linear-gradient(68.23deg,#FF4C00_9.46%,#B38BCE_52.36%,#00E4F0_91.95%)] md:pr-10 xl:pb-40">
      <p className="uppercase text-black font-medium text-lg leading-[25px] tracking-[0.04em] md:text-[32px] md:leading-10">
        Хотите узнать больше, рассчитать стоимость <br /> или забрать <br /> устройство <br /> на бесплатный тест?
      </p>
    </div>

    <Card className="lg:w-[66.45%] lg:shrink-0">
        <p className="uppercase text-lg leading-[25px] tracking-[0.04em] mb-4">
          Услуга доступна только для юридических лиц
        </p>

        <Button variant="secondary" className="">
          Начать!
        </Button>
    </Card>
  </section>
);

export default ApplicationForm;
