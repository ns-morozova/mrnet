"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type FieldName = "name" | "phone" | "nickname";

const initialValues: Record<FieldName, string> = {
  name: "",
  phone: "",
  nickname: "",
};

const ApplicationForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<FieldName, boolean>>({
    name: false,
    phone: false,
    nickname: false,
  });
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [showFormError, setShowFormError] = useState(false);

  const handleInputChange = (field: FieldName) => (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field] && value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: false }));
    }
    if (showFormError) {
      setShowFormError(false);
    }
  };

  const toggleConsent = () => {
    setConsent((prev) => {
      const next = !prev;
      if (consentError && next) {
        setConsentError(false);
      }
      if (showFormError) {
        setShowFormError(false);
      }
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedValues = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      nickname: values.nickname.trim(),
    };

    const nextErrors: Record<FieldName, boolean> = {
      name: trimmedValues.name === "",
      phone: trimmedValues.phone === "",
      nickname: trimmedValues.nickname === "",
    };
    const nextConsentError = !consent;
    const hasErrors =
      Object.values(nextErrors).some(Boolean) || nextConsentError;

    setErrors(nextErrors);
    setConsentError(nextConsentError);
    setShowFormError(hasErrors);
  };

  return (
    <section className="w-full max-w-8xl mx-auto flex flex-col gap-2.5 px-5 md:px-9 lg:flex-row lg:gap-4">
      <div className="w-full rounded-lg px-3.5 pt-3.5 pb-17 bg-[linear-gradient(68.23deg,#FF4C00_9.46%,#B38BCE_52.36%,#00E4F0_91.95%)] md:pr-10 xl:pb-40">
        <p className="uppercase text-black font-medium text-lg leading-[25px] tracking-[0.04em] md:text-[32px] md:leading-10">
          Хотите узнать больше, рассчитать стоимость <br /> или забрать <br /> устройство <br /> на бесплатный тест?
        </p>
      </div>

      <Card className="lg:w-[66.45%] lg:shrink-0">
        <p className="w-4/5 uppercase text-lg leading-[25px] tracking-[0.04em] mb-5">
          Услуга доступна только для юридических лиц
        </p>

        <form
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2.5 mb-4.5">
            <Input
              name="name"
              placeholder="Ваше имя *"
              value={values.name}
              onChange={handleInputChange("name")}
              error={errors.name}
            />
            <p className="my-1.5 pl-7.5">Оставьте ваши контакты</p>
            <Input
              name="phone"
              type="tel"
              placeholder="Ваш телефон +7 (___)___-__-__ *"
              value={values.phone}
              onChange={handleInputChange("phone")}
              error={errors.phone}
            />
            <Input
              name="nickname"
              placeholder="Ваш ник в tg"
              value={values.nickname}
              onChange={handleInputChange("nickname")}
              error={errors.nickname}
            />
          </div>

          <div className="flex items-start gap-3 mb-7">
            <label
              htmlFor="application-consent"
              className="cursor-pointer select-none mt-1"
            >
              <input
                id="application-consent"
                type="checkbox"
                checked={consent}
                onChange={toggleConsent}
                className="sr-only"
              />
              <span
                className={`flex h-4 w-4 shrink-0 items-center justify-center border transition-colors ${
                  consentError ? "border-accent-flame" : "border-accent-aqua"
                }`}
                aria-hidden="true"
              >
                {consent && <span className="h-2 w-2 bg-accent-aqua"></span>}
              </span>
              
            </label>
            <span className="text-grey text-xs leading-4">
                Я даю согласие (активная ссылка на согласие, отдельный файл в документах) на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
              </span>
          </div>

          {showFormError && (
            <p className="text-accent-flame leading-5 pl-7.5">
              Пожалуйста, попробуйте ещё раз! Не все поля формы заполнены корректно.
            </p>
          )}

          <p className="text-grey text-xs leading-5 pl-7.5 mb-16">* Поля, обязательные для заполнения</p>

          <Button type="submit" variant="secondary">
            Начать!
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default ApplicationForm;
