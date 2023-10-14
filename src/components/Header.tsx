import HeaderLinkItem from "./HeaderLinkItem";
import "../styles/header.css";
import MobileMenu from "./MobileMenu";
import { isDesktop } from "../utils/utils";

function Header(): JSX.Element {
  const logo = (
    <img
      src="/images/logo.svg"
      alt="logo"
      className="md:object-contain w-32 md:hover:translate-y-0.5 md:transition-transform md:duration-300"
    />
  );
  const menuItems = (
    <>
      <HeaderLinkItem name="home" url="/" />
      <HeaderLinkItem name="shop" url="/shop" />
      <HeaderLinkItem name="about" url="/about" />
      <HeaderLinkItem name="contact" url="/contact" />
    </>
  );

  let header = (
    <div className="absolute top-10 left-0 right-0 h-12 z-50">
      <a href="/" className="absolute left-1/2 top-1/2 translate-x-[-40%] -translate-y-1/2">
        {logo}
      </a>
      <MobileMenu items={menuItems} />
    </div>
  );
  if (isDesktop(window))
    header = (
      <div className="flex flex-row gap-10 absolute top-10 left-10 z-50">
        <a href="/">{logo}</a>
        {menuItems}
      </div>
    );
  return header;
}

export default Header;
