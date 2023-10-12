import "../styles/hamburger.css";

interface IHamburger {
  active: boolean;
  onClick: () => void;
}
export default function Hamburger({ active, onClick }: IHamburger): JSX.Element {
  return (
    <div className={`burger left-8 top-1/2 -translate-y-1/2 ${active ? "active" : ""} z-20`} onClick={onClick}>
      <span className={`line line1`} />
      <span className={`line line2`} />
      <span className={`line line3`} />
    </div>
  );
}
