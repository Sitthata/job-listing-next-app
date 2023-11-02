type TagListProps = {
    tags: string[]
}

const TagList = ({tags}: TagListProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
    {tags.map((tag, index) => (
        <button className="cursor-pointer px-[.5rem] py-[.4rem] rounded-md text-primary font-semibold bg-neutral-100" key={index}>{tag}</button>
    ))} 
    </div>
  )
}

export default TagList