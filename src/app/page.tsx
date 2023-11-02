import Card from "./components/card";
import CardList from "./components/cardList";
import Header from "./components/header";


export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex justify-center items-center">
        <CardList />
      </div>
    </main>
  )
}
