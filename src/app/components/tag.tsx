import { twMerge } from "tailwind-merge";

type TagProps = {
    text: string
    style: string
};

const Tag = ({text, style}: TagProps) => {
  return (
    <div className={twMerge("m-0 flex items-center font-semibold leading-6 text-white rounded-2xl px-[0.5rem] py-[0.2rem]", style)}>
      <p>{text}</p>
    </div>
  );
};


export default Tag;
