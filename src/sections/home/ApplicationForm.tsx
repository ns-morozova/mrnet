"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type FieldName = "name" | "phone" | "nickname";

const PHONE_PREFIX = "+7";
const PHONE_PREFIX_WITH_SPACE = `${PHONE_PREFIX} `;

const formatPhoneValue = (rawValue: string) => {
  if (!rawValue) {
    return PHONE_PREFIX_WITH_SPACE;
  }
  let value = rawValue;
  if (value.startsWith(PHONE_PREFIX)) {
    value = value.slice(PHONE_PREFIX.length);
  } else if (value.startsWith("+")) {
    value = value.slice(1);
    if (value.startsWith("7")) {
      value = value.slice(1);
    }
  }
  value = value.replace(/^\s+/, "");
  return value ? `${PHONE_PREFIX} ${value}` : PHONE_PREFIX_WITH_SPACE;
};

const hasFieldValue = (field: FieldName, value: string) => {
  if (field === "phone") {
    const digits = value.replace(/\D/g, "");
    return digits.length > 1;
  }
  return value.trim().length > 0;
};

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

  const handleInputChange = (
    field: FieldName,
    options?: { enforcePhonePrefix?: boolean },
  ) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;
      if (options?.enforcePhonePrefix) {
        value = formatPhoneValue(value);
      }
      setValues((prev) => ({ ...prev, [field]: value }));
      if (errors[field] && hasFieldValue(field, value)) {
        setErrors((prev) => ({ ...prev, [field]: false }));
      }
      if (showFormError) {
        setShowFormError(false);
      }
    };

  const handlePhoneFocus = () => {
    setValues((prev) => {
      if (prev.phone.startsWith(PHONE_PREFIX)) {
        return prev;
      }
      return { ...prev, phone: formatPhoneValue(prev.phone) };
    });
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
    const nextErrors: Record<FieldName, boolean> = {
      name: !hasFieldValue("name", values.name),
      phone: !hasFieldValue("phone", values.phone),
      nickname: !hasFieldValue("nickname", values.nickname),
    };
    const nextConsentError = !consent;
    const hasErrors =
      Object.values(nextErrors).some(Boolean) || nextConsentError;

    setErrors(nextErrors);
    setConsentError(nextConsentError);
    setShowFormError(hasErrors);
  };

  return (
    <section
      id="application-form"
      className="w-full max-w-8xl mx-auto flex flex-col gap-2.5 px-5 md:px-9 lg:flex-row lg:gap-4"
    >
      <div className="w-full rounded-lg px-3.5 pt-3.5 pb-17 bg-[linear-gradient(68.23deg,#FF4C00_9.46%,#B38BCE_52.36%,#00E4F0_91.95%)] md:pr-10 lg:pl-5 lg:pb-0 xl:pb-40">
        <p className="uppercase text-black font-medium text-lg leading-[25px] tracking-[0.04em] md:text-[32px] md:leading-10">
          Хотите узнать больше, рассчитать стоимость <br /> или забрать <br /> устройство <br /> на бесплатный тест?
        </p>
      </div>

      <Card className="pb-6 lg:w-[66.45%] lg:shrink-0 lg:px-10 lg:pb-7">
        <p className="w-4/5 uppercase text-lg leading-[25px] tracking-[0.04em] mb-5 md:w-auto md:text-[20px] md:leading-8">
          Услуга доступна только для юридических лиц
        </p>

        <form
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2.5 mb-4.5 md:gap-3">
            <Input
              name="name"
              placeholder="Ваше имя *"
              value={values.name}
              onChange={handleInputChange("name")}
              error={errors.name}
            />
            <p className="my-1.5 pl-7.5 md:text-lg">Оставьте ваши контакты</p>
            <Input
              name="phone"
              type="tel"
              placeholder="Ваш телефон +7 (___)___-__-__ *"
              value={values.phone}
              onFocus={handlePhoneFocus}
              onChange={handleInputChange("phone", { enforcePhonePrefix: true })}
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

          <div className="flex items-start gap-3 mb-7 md:mb-3">
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
                className={`w-4 h-4 shrink-0 flex items-center justify-center border transition-colors md:w-5 md:h-5 ${
                  consentError ? "border-accent-flame" : "border-accent-aqua"
                }`}
                aria-hidden="true"
              >
                {consent && <span className="w-2 h-2 bg-accent-aqua md:w-2.5 md:h-2.5"></span>}
              </span>
              
            </label>
            <span className="text-grey text-xs leading-4 md:leading-4.5">
                Я даю согласие на обработку моих персональных данных в форме обращения на странице сайта. Ознакомиться с условиями Политики обработки персональных данных ООО «НЬЮКОМ ДИСТРИБЬЮШН»
              </span>
          </div>

          {showFormError ? (
            <p className="text-accent-flame text-xs leading-5 pl-7.5 mb-16 md:mb-5">
              Пожалуйста, попробуйте ещё раз! Не все поля формы заполнены корректно.
            </p>
          ) : (
            <p className="text-grey text-xs leading-5 pl-7.5 mb-16 md:mb-5">
              * Поля, обязательные для заполнения
            </p>
          )}

          <Button type="submit" variant="secondary">
            Начать!
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default ApplicationForm;
