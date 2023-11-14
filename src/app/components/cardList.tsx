import Card from "@/app/components/card";
import axios from "axios";
import { CardType } from "@/types/cardType";

const getJobList = async () => {
  const res = await axios.get("http://localhost:3000/api/joblist");
  return res.data;
};

export default async function CardList() {
  const jobs: CardType[] = await getJobList();
  return (
    <div className="mx-2 flex flex-col gap-8">
      {jobs.map((job, index) => (
        <Card {...job} key={index} id={index} />
      ))}
    </div>
  );
}
