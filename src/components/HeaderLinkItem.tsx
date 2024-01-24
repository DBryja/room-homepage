interface IHeaderLinkItem {
  url: string;
  name: string;
}
function HeaderLinkItem({ url, name }: IHeaderLinkItem): JSX.Element {
  return (
    <a href={url} className={"font-regular text-black md:text-white headerItem text-l md:text-2xl"}>
      {name}
    </a>
  );
}

export default HeaderLinkItem;
