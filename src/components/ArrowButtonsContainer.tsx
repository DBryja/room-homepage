import ArrowButton from "./ArrowButton";
import { isDesktop } from "../utils/utils";

export interface IArrowButtonsContainer {
  prevSlide: () => void;
  nextSlide: () => void;
  timing: number;
}

export default function ArrowButtonsContainer({ prevSlide, nextSlide, timing }: IArrowButtonsContainer) {
  return (
    <div className={`absolute ${isDesktop(window) ? "" : "right-0"} md:left-full bottom-0 flex flex-row z-10`}>
      <ArrowButton onClick={prevSlide} timing={timing}>
        <img src="/images/icon-angle-left.svg" alt="arrow-left" className="pointer-events-none w-1/4 h-1/3" />
      </ArrowButton>
      <ArrowButton onClick={nextSlide} timing={timing}>
        <img src="/images/icon-angle-right.svg" alt="arrow-right" className="pointer-events-none w-1/4 h-1/3" />
      </ArrowButton>
    </div>
  );
}
