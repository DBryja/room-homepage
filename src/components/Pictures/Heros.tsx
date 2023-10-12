const herosClassNames = "w-full h-full object-cover";
export function Hero1() {
  return (
    <img
      srcSet="/images/mobile-image-hero-1.jpg 375w, /images/desktop-image-hero-1.jpg 840w"
      alt="white chairs"
      className={herosClassNames}
      src="/images/mobile-image-hero-1.jpg"
    />
  );
}

export function Hero2() {
  return (
    <img
      srcSet="/images/mobile-image-hero-2.jpg 375w, /images/desktop-image-hero-2.jpg 840w"
      alt="colorfull chairs"
      className={herosClassNames}
      src="/images/mobile-image-hero-2.jpg"
    />
  );
}

export function Hero3() {
  return (
    <img
      srcSet="/images/mobile-image-hero-3.jpg 375w, /images/desktop-image-hero-3.jpg 840w"
      alt="black chair"
      className={herosClassNames}
      src="/images/mobile-image-hero-3.jpg"
    />
  );
}
