import "../styles/slider.css";
import { isDesktop } from "../utils/utils";

export interface IImageSlider {
  images: JSX.Element[];
  current: number;
}

function ImageSlider({ images, current }: IImageSlider): JSX.Element {
  const renderedImages: JSX.Element = (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`h-full flex flex-row`}
        style={{ transform: `translateX(-${100 * current}%)`, transition: "1s ease" }}
      >
        {images.map((slide, index) => {
          return (
            <div className="w-full flex-shrink-0" key={index}>
              {slide}
            </div>
          );
        })}
      </div>
    </div>
  );

  return isDesktop(window) ? <div className="w-full h-full relative">{renderedImages}</div> : renderedImages;
}

export default ImageSlider;
