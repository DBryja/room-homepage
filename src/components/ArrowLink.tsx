import classNames from "classnames";

interface IArrowLink {
  className: string;
}

function ArrowLink({ className }: IArrowLink): JSX.Element {
  let classes = classNames("flex flex-row items-center h-16 cursor-pointer arrowLink", className);
  return (
    <div className={classes}>
      <a href="/shop" className="text-2xl arrowLink__text">
        SHOP NOW
      </a>
      <div className="arrowLink__arrow h-8 ml-8 relative">
        <div className="w-full h-0.5 bg-black absolute top-1/2 -translate-y-1/2 origin-left"></div>
        <div
          style={{
            width: "24px",
            height: "24px",
            border: "solid black",
            borderWidth: "2px 2px 0 0",
            transform: "rotate(45deg) translateY(-70%)",
            position: "absolute",
            right: "16px",
            top: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ArrowLink;
