import Image from "next/image";
import { CardType } from "@/types/cardType";
import { Span } from "next/dist/trace";
import Tag from "./tag";
import TagList from "./tagList";

type CardProps = {} & CardType;

export default function Card({
  logo,
  company,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  featured,
  languages,
  tools,
  new: isNew,
  ...props
}: CardProps) {
  const tags = [role, level, ...languages, ...tools];
  return (
    <div className="relative min-w-[300px] bg-white p-5 ">
      <div className="flex flex-col gap-3">
        <Image
          src={logo}
          width={48}
          height={48}
          alt="logo"
          className="absolute top-[-10%] left-[6%]"
        />

        <div className="pt-3 flex justify-between items-center">
          <p className="m-0 font-semibold text-primary">{company}</p>
          <div className="flex gap-2">
            {isNew && <Tag text="NEW!" style="bg-primary" />}
            {featured && <Tag text="FEATURED" style="bg-neutral-400" />}
          </div>
        </div>
        <h3 className="font-semibold">{position}</h3>

        <div className="flex">
            <p className="text-neutral-300">{postedAt}</p>
            <p className="text-neutral-300 mx-2">•</p>
            <p className="text-neutral-300">{contract}</p>
            <p className="text-neutral-300 mx-2">•</p>
            <p className="text-neutral-300">{location}</p>
        </div>

        <hr />

        <TagList tags={tags}/>
      </div>
    </div>
  );
}
