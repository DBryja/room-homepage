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
      className="bg-neutral-950 w-24 h-24 flex items-center justify-center hover:bg-neutral-900"
    >
      {children}
    </button>
  );
}
