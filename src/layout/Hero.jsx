import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Hero() {
  const hero = useRef(null);
  useEffect(() => {
    const el = hero.current;
    gsap.fromTo(el, { y: -100 }, { y: 0, duration: 1, stagger: 0.3 });
  }, []);

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 ref={hero}>RWN FITNESS</h1>
        <p>Join now for $29</p>
        <a href="#" className="animate-hero button">
          Get started
        </a>
      </div>
    </div>
  );
}

export default Hero;
