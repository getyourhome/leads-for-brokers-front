import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  link?: string;
  variant:
    | "btn_dark_green"
    | "btn_white"
    | "btn_dark_green_outline"
    | "btn_green"
    | "btn_white_text";
  full?: boolean;
};

const Button = ({ type, title, icon, link, variant, full }: Props) => {
  return (
    <Link href={link || "/"}>
      <button
        type={type}
        className={`flexCenter gap-3 rounded-full border ${variant} ${
          full && "w-full"
        }`}
      >
        {icon && <Image src={`/${icon}`} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap">{title}</label>
      </button>
    </Link>
  );
};

export default Button;
