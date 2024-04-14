import React from "react";
import Image from "next/image";
import Button from "@/components/Button";

type Props = {
  title: string;
  description: string;
  buttonIcon?: string;
  buttonTitle: string;
  buttonLink: string;
  bgVariant: string;
};

const RegisterCall = ({
  title,
  description,
  buttonTitle,
  buttonLink,
  buttonIcon,
  bgVariant,
}: Props) => {
  return (
    <section className="flexCenter w-full flex-col">
      <div className={bgVariant}>
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">{title}</h2>
          <p className="regular-16 text-gray-10">{description}</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title={buttonTitle}
              icon={buttonIcon}
              link={buttonLink}
              variant="btn_white"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          {/* <Image src="/phones.png" alt="phones" width={550} height={870} /> */}
        </div>
      </div>
    </section>
  );
};

export default RegisterCall;
