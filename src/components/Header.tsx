import HeaderLinkItem from "./HeaderLinkItem";
import "../styles/header.css";
import MobileMenu from "./MobileMenu";

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
  if (window.innerWidth > 800)
    return (
      <div className="flex flex-row gap-10 absolute top-10 left-10 z-50">
        <a href="/">{logo}</a>
        {menuItems}
      </div>
    );
  else
    return (
      <div className="absolute top-10 left-0 right-0 h-12 z-50">
        <a href="/" className="absolute left-1/2 top-1/2 translate-x-[-40%] -translate-y-1/2">
          {logo}
        </a>
        <MobileMenu items={menuItems} />
      </div>
    );
}

export default Header;
