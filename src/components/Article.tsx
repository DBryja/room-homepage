interface IArticle {
  children: JSX.Element;
}

function Article({ children }: IArticle): JSX.Element {
  return <p className="mt-2 md:mt-6 text-gray-500 text-l md:text-xl">{children}</p>;
}

export default Article;
