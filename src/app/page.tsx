import CardList from "@/app/components/cardList";
import Header from "@/app/components/header";

export default async function Page() {
  return (
    <main>
      <Header />
      <div className="flex justify-center items-center">
        <CardList/>
      </div>
    </main>
  )
}
