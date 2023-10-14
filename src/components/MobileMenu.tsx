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
  let translate = active ? "translate-y-0" : "-translate-y-full";
  return (
    <>
      <Hamburger active={active} onClick={onClick} />
      <div
        className={`fixed bg-white z-10 left-0 right-0 h-[125px] top-0 transition duration-500 flex flex-row flex-wrap justify-around items-center pl-16 ${translate}`}
      >
        {items}
      </div>
      <div className={`fixed bg-black opacity-50 inset-0 transition duration-500 ${translate}`} />
    </>
  );
}
