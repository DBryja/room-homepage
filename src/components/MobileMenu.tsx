import { useState } from "react";
import Hamburger from "./Hamburger";

interface IMobileMenu {
  items: JSX.Element;
}

export default function MobileMenu({ items }: IMobileMenu) {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Hamburger active={active} onClick={onClick} />
      <div
        className={`fixed bg-white z-10 left-0 right-0 h-[125px] top-0 transition duration-500 flex flex-row flex-wrap justify-around items-center pl-16`}
        style={{ transform: `translateY(${active ? "0" : "-100%"})` }}
      >
        {items}
      </div>
      <div
        className="fixed bg-black opacity-50 inset-0 transition duration-500"
        style={{ transform: `translateY(${active ? "0" : "-100%"})` }}
      />
    </>
  );
}
