import Header from "./components/Header";
import TopCard from "./components/cards/TopCard";
import BottomCard from "./components/cards/BottomCard";

function App(): JSX.Element {
  return (
    <div className="w-full h-screen">
      <Header />
      <div className="grid grid-rows-[2fr_1fr] w-full h-full">
        <TopCard />
        <BottomCard />
      </div>
    </div>
  );
}

export default App;
