interface IArrowButton {
  onClick: () => void;
  children: JSX.Element;
  timing: number;
}
export default function ArrowButton({ children, onClick, timing }: IArrowButton): JSX.Element {
  const handleClick = (e: React.MouseEvent): void => {
    onClick();
    const target = e.target as HTMLButtonElement;
    target.setAttribute("disabled", "true");
    setTimeout(() => target.removeAttribute("disabled"), timing * 0.6);
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className={`bg-neutral-950 h-16 w-16 md:w-24 md:h-24 flex items-center justify-center md:hover:bg-neutral-900 md:transition-colors md:duration-300`}
    >
      {children}
    </button>
  );
}
