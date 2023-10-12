interface IArticle {
  children: JSX.Element;
}

function Article({ children }: IArticle): JSX.Element {
  return <p className="mt-6 text-gray-500 text-xl">{children}</p>;
}

export default Article;
