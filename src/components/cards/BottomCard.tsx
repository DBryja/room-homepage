import Article from "../Article";
import "../../styles/bounce.css";

export default function BottomCard() {
  return (
    <div className="max-md:flex max-md:flex-col max-md:relative md:grid md:grid-cols-[4fr_5fr] md:grid-rows-[1fr_1fr] lg:grid-rows-1 lg:grid-cols-[4fr_5fr_4fr] md:border-black">
      <div className="absolute bg-white -top-6 left-1/2 bouncy w-4 h-4" />
      <img src="/images/image-about-dark.jpg" alt="dark" className="h-full object-fit" />
      <div className="p-8 lg:p-16 md:row-span-2 h-full">
        <h2 className="text-xl md:text-4xl font-semibold tracking-[.15em] uppercase">About our furniture</h2>
        <Article>
          Our multifunctional collection blends design and function to suit your individual taste. Make each room
          unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
          available to help you create your dream space.
        </Article>
      </div>
      <img src="/images/image-about-light.jpg" alt="light" className="h-full object-fit" />
    </div>
  );
}
