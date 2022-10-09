import React from "react";
import gym2 from "../assets/gym-2.jpg";
import { FaCheckCircle } from "react-icons/fa";

function Service() {
  return (
    <div className="services">
      <div className="services__container">
        <div>
          <p className="topline">Features</p>
          <h1 className="services__heading">What we offer</h1>
          <div className="services__features">
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
