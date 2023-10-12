import { useState, useEffect, useRef } from "react";

import ImageSlider from "../ImageSlider";
import ArrowButton from "../ArrowButton";
import Article from "../Article";
import { Hero1, Hero2, Hero3 } from "../Pictures/Heros";
import content from "../../content.json";
import ArrowLink from "../ArrowLink";

const images = [<Hero1 />, <Hero2 />, <Hero3 />];
const { slides } = content;
const timing = 1000;

export default function TopCard() {
  const [current, setCurrent] = useState(0);
  const [currentExtra, setCurrentExtra] = useState(0);
  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
    setTimeout(() => {
      setCurrentExtra(currentExtra === images.length - 1 ? 0 : currentExtra + 1);
    }, timing / 3);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    setTimeout(() => {
      setCurrentExtra(currentExtra === 0 ? images.length - 1 : currentExtra - 1);
    }, timing / 3);
  };
  const refHeading = useRef<HTMLDivElement>(null);
  useEffect(() => {
    refHeading.current?.animate(
      [
        { backgroundColor: "rgba(255,255,255,1)" },
        { backgroundColor: "rgba(255,255,255,1)" },
        { backgroundColor: "rgba(255,255,255,0)" },
      ],
      { duration: timing, iterations: 1 }
    );
  }, [current]);

  return (
    <div className="grid grid-cols-[5fr_4fr]">
      <div className="relative">
        <ImageSlider images={images} current={current} />
        <div className="absolute left-[100%] bottom-0 flex flex-row z-10">
          <ArrowButton onClick={prevSlide} timing={timing}>
            <img src="/images/icon-angle-left.svg" alt="arrow-left" className="pointer-events-none w-1/4 h-1/3" />
          </ArrowButton>
          <ArrowButton onClick={nextSlide} timing={timing}>
            <img src="/images/icon-angle-right.svg" alt="arrow-right" className="pointer-events-none w-1/4 h-1/3" />
          </ArrowButton>
        </div>
      </div>
      <div className="w-full h-full p-16 relative z-0">
        <div className="relative">
          <div ref={refHeading} className="absolute inset-0 pointer-events-none"></div>
          <h1 className="text-6xl font-semibold">{slides[currentExtra].heading}</h1>
          <Article>
            <>{slides[currentExtra].paragraph}</>
          </Article>
        </div>
        <ArrowLink className="absolute bottom-32 left-16" />
      </div>
    </div>
  );
}
