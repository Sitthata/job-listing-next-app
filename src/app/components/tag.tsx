import { twMerge } from "tailwind-merge";
import { roboto } from "@/app/fonts/font";

type TagProps = {
    text: string
    style: string
};

const Tag = ({text, style}: TagProps) => {
  return (
    <div className={twMerge(`m-0 flex items-center font-[700] leading-6 text-white rounded-2xl px-[0.5rem] py-[0.2rem] ${roboto.className}`, style)}>
      <p>{text}</p>
    </div>
  );
};


export default Tag;
