import classNames from "classnames";
import Arrow from "./Arrow";
import "../styles/arrowlink.css";

interface IArrowLink {
  className: string;
}

function ArrowLink({ className }: IArrowLink): JSX.Element {
  let classes = classNames(" h-8 md:h-16 cursor-pointer arrowLink", className);
  return (
    <div className={classes}>
      <a href="/shop" className="text-l md:text-2xl arrowLink__text flex flex-row items-center">
        SHOP NOW
        <Arrow />
      </a>
    </div>
  );
}

export default ArrowLink;
