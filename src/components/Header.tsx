import HeaderLinkItem from "./HeaderLinkItem";

function Header(): JSX.Element {
  return (
    <div className="flex flex-row gap-10 absolute top-10 left-10 z-50">
      <a href="/">
        <img src="/images/logo.svg" alt="logo" className="object-contain w-32" />
      </a>
      <HeaderLinkItem name="home" url="/" />
      <HeaderLinkItem name="shop" url="/shop" />
      <HeaderLinkItem name="about" url="/about" />
      <HeaderLinkItem name="contact" url="/contact" />
    </div>
  );
}

export default Header;
