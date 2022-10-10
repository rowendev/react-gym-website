import React, { useRef, useEffect } from "react";
import gym2 from "../assets/gym-2.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Service() {
  const serviceRef = useRef(null);
  useEffect(() => {
    const el = serviceRef.current;
    // p animation
    gsap.fromTo(
      ".services__feature",
      {
        x: -150,
        opacity: 0,

        scrollTrigger: {
          trigger: el,
        },
      },
      {
        x: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
    // img animation
    gsap.fromTo(
      ".services__img",
      {
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
        },
      },
      {
        x: 1,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);
  return (
    <div className="services">
      <div className="services__container">
        <div>
          <p className="topline">Features</p>
          <h1 className="services__heading">What we offer</h1>
          <div className="services__features" ref={serviceRef}>
            <p className="services__feature">
              <FaCheckCircle />
              Group Fitness Classes
            </p>
            <p className="services__feature">
              <FaCheckCircle />
              Personal Trainer Sessions
            </p>
            <p className="services__feature">
              <FaCheckCircle />
              Indoor Pool
            </p>
            <p className="services__feature">
              <FaCheckCircle />
              Steam Room
            </p>
            <p className="services__feature">
              <FaCheckCircle />
              Basketball Court
            </p>
            <p className="services__feature">
              <FaCheckCircle />
              Open 24/7
            </p>
          </div>
        </div>
        <img src={gym2} alt="" className="services__img" />
      </div>
    </div>
  );
}

export default Service;
