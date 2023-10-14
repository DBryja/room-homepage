import ArrowButton from "./ArrowButton";

export interface IArrowButtonsContainer {
  prevSlide: () => void;
  nextSlide: () => void;
  timing: number;
}

export default function ArrowButtonsContainer({ prevSlide, nextSlide, timing }: IArrowButtonsContainer) {
  const imgClassNames = "pointer-events-none w-1/4 h-1/3";
  return (
    <div className={`absolute max-md:right-0 md:left-full bottom-0 flex flex-row z-10`}>
      <ArrowButton onClick={prevSlide} timing={timing}>
        <img src="/images/icon-angle-left.svg" alt="previous slide" className={imgClassNames} />
      </ArrowButton>
      <ArrowButton onClick={nextSlide} timing={timing}>
        <img src="/images/icon-angle-right.svg" alt="next slide" className={imgClassNames} />
      </ArrowButton>
    </div>
  );
}
