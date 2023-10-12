import Article from "../Article";
import "../../styles/bounce.css";
import { isDesktop } from "../../utils/utils";

export default function BottomCard() {
  let wrapperClasses = "flex flex-col relative";
  if (isDesktop(window)) wrapperClasses = "grid grid-cols-[4fr_5fr_4fr] border-black";

  return (
    <div className={wrapperClasses}>
      <div className="absolute bg-white -top-6 left-1/2 bouncy w-4 h-4"></div>
      <img src="/images/image-about-dark.jpg" alt="dark" className="w-full h-full" />
      <div className="p-8 md:p-16">
        <h2 className="text-xl md:text-4xl font-semibold tracking-[.15em] uppercase">About our furniture</h2>
        <Article>
          <>
            Our multifunctional collection blends design and function to suit your individual taste. Make each room
            unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
            pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
            available to help you create your dream space.
          </>
        </Article>
      </div>
      <img src="/images/image-about-light.jpg" alt="light" className="w-full h-full" />
    </div>
  );
}
