import Header from "./components/Header";
import TopCard from "./components/cards/TopCard";
import BottomCard from "./components/cards/BottomCard";

function App(): JSX.Element {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div
        className={`${
          window.innerWidth > 800
            ? "grid grid-rows-[2fr_1fr] h-screen w-full"
            : "flex flex-col w-screen overflow-x-hidden"
        }`}
      >
        <TopCard />
        <BottomCard />
      </div>
      <div className="text-sm align-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-blue-600"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/DBryja"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Dawid Bryja
        </a>
        .
      </div>
    </div>
  );
}

export default App;
