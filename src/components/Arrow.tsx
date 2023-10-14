export default function Arrow() {
  return (
    <div className="arrowLink__arrow h-8 ml-8 relative origin-left">
      <div className="w-full h-0.5 bg-black absolute top-1/2 -translate-y-1/2"></div>
      <div className="w-6 h-6 border-t-2 border-r-2 border-black border-solid absolute right-1 top-1/2 -translate-y-1/2 rotate-45" />
    </div>
  );
}
