import "../styles/hamburger.css";
import classNames from "classnames";

interface IHamburger {
  active: boolean;
  onClick: () => void;
}
export default function Hamburger({ active, onClick }: IHamburger): JSX.Element {
  const classes = classNames("burger left-8 top-1/2 -translate-y-1/2 z-20", { active: active });
  return (
    <div className={classes} onClick={onClick}>
      <span className={`line line1`} />
      <span className={`line line2`} />
      <span className={`line line3`} />
    </div>
  );
}
