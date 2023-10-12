interface IHeaderLinkItem {
  url: string;
  name: string;
}
function HeaderLinkItem({ url, name }: IHeaderLinkItem): JSX.Element {
  let classNames = "text-black text-xl";
  if (window.innerWidth > 800) classNames = "text-white headerItem text-2xl";
  return (
    <a href={url} className={"font-regular " + classNames}>
      {name}
    </a>
  );
}

export default HeaderLinkItem;
