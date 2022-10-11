import React, { useRef, useEffect } from "react";
import { FaDumbbell } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Membership() {
  const cardRef = useRef(null);
  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      ".membership__card",
      {
        y: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
        },
      },
      {
        y: 1,
        opacity: 1,
        duration: 1.2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div className="memberships">
      <h1>View our plans</h1>
      <p className="membership__desc">
        Get started today and receive 25% off your first month
      </p>
      <div className="membership__wrapper" ref={cardRef}>
        <div className="membership__card">
          <div className="membership__title">
            <FaDumbbell className="card-icon" />
            <h3>Starter</h3>
          </div>
          <div className="membership__perks">
            <p>Get access to the entire gym</p>
            <p>$29 per month</p>
          </div>
          <a href="/" className="button">
            Sign up
          </a>
        </div>
        <div className="membership__card">
          <div className="membership__title">
            <FaDumbbell className="card-icon" />
            <h3>Silver</h3>
          </div>
          <div className="membership__perks">
            <p>Get access to the entire gym</p>
            <p>$29 per month</p>
          </div>
          <a href="/" className="button">
            Sign up
          </a>
        </div>
        <div className="membership__card">
          <div className="membership__title">
            <FaDumbbell className="card-icon" />
            <h3>Silver</h3>
          </div>
          <div className="membership__perks">
            <p>Get access to the entire gym</p>
            <p>$29 per month</p>
          </div>
          <a href="/" className="button">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Membership;
