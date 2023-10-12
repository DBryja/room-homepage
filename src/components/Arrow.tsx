export default function Arrow() {
  return (
    <div className="arrowLink__arrow h-8 ml-8 relative origin-left">
      <div className="w-full h-0.5 bg-black absolute top-1/2 -translate-y-1/2"></div>
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
  );
}
