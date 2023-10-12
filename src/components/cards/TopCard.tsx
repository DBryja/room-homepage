import { useState, useEffect, useRef } from "react";

import Article from "../Article";
import content from "../../content.json";
import ArrowLink from "../ArrowLink";

import { Hero1, Hero2, Hero3 } from "../Pictures/Heros";
import Slider from "../Slider";
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
        { opacity: 0, transform: "translateX(10px)", offset: 0 },
        { opacity: 0, transform: "translateX(10px)", offset: 0.6 },
        { opacity: 1, transform: "translateX(0)", offset: 1 },
      ],
      { duration: timing * 0.9, iterations: 1 }
    );
  }, [current]);

  return (
    <div className={`grid relative grid-rows-[300px_1fr] md:grid-rows-1 md:static md:grid-cols-[5fr_4fr]`}>
      <Slider images={images} timing={timing} current={current} nextSlide={nextSlide} prevSlide={prevSlide} />
      <div className="w-full h-full p-8 md:p-16 relative">
        <div className="relative" ref={refHeading}>
          <h1 className="text-3xl md:text-6xl font-semibold">{slides[currentExtra].heading}</h1>
          <Article>
            <>{slides[currentExtra].paragraph}</>
          </Article>
        </div>
        <ArrowLink className="mt-4 md:mt-0 md:absolute md:bottom-32 md:left-16" />
      </div>
    </div>
  );
}
