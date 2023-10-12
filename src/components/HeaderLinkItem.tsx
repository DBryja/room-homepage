interface IHeaderLinkItem {
  url: string;
  name: string;
}
function HeaderLinkItem({ url, name }: IHeaderLinkItem): JSX.Element {
  return (
    <a href={url} className="text-white font-regular text-2xl headerItem">
      {name}
    </a>
  );
}

export default HeaderLinkItem;
