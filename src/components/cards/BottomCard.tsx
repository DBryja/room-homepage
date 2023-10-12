import Article from "../Article";
export default function BottomCard() {
  return (
    <div className="grid grid-cols-[4fr_5fr_4fr] border-black">
      <img src="/images/image-about-dark.jpg" alt="dark" className="w-full h-full" />
      <div className="p-16">
        <h2 className="text-4xl font-semibold tracking-[.15em] uppercase">About our furniture</h2>
        <Article>
          <>
            Our multifunctional collection blends design and function to suit your individual taste. Make each room
            unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
            pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
            available to help you create your dream space.
          </>
        </Article>
      </div>
      <img src="/images/image-about-light.jpg" alt="light" className="w-full h-full" />
    </div>
  );
}
