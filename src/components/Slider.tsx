import ImageSlider from "./ImageSlider";
import ArrowButtonsContainer from "./ArrowButtonsContainer";
import { IImageSlider } from "./ImageSlider";
import { IArrowButtonsContainer } from "./ArrowButtonsContainer";

interface ISlider extends IImageSlider, IArrowButtonsContainer {}

export default function Slider({ images, timing, current, nextSlide, prevSlide }: ISlider) {
  return (
    <div className="relative w-full h-full">
      <ImageSlider images={images} current={current} />
      <ArrowButtonsContainer nextSlide={nextSlide} prevSlide={prevSlide} timing={timing} />
    </div>
  );
}
