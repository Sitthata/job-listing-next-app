type TagListProps = {
    tags: string[]
}

const TagList = ({tags}: TagListProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
    {tags.map((tag, index) => (
        <span className="px-[.5rem] py-[.4rem] rounded-md text-primary font-semibold bg-neutral-100" key={index}>{tag}</span>
    ))} 
    </div>
  )
}

export default TagList