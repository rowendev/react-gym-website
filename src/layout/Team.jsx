import React from "react";
import personImg1 from "../assets/guy-1.jpg";
import personImg2 from "../assets/guy-2.jpg";
import personImg3 from "../assets/guy-3.jpg";
import personImg4 from "../assets/guy-4.jpg";

function Team() {
  return (
    <div className="team">
      <div className="team__wrapper">
        <div className="team__text">
          <p className="topline">Private Coaching</p>
          <h1>Meet our trainers</h1>
          <p className="team__desc">
            All our personal trainers have over 30 years of experience
          </p>
        </div>
        <div className="team__text">
          <p className="topline">Free Trial</p>
          <h1>7 day trial</h1>
          <p className="team__desc">
            All our personal trainers have over 30 years of experience
          </p>
        </div>
        <div className="team__card">
          <p>Tim</p>
          <img src={personImg1} alt="" className="team__img" />
        </div>
        <div className="team__card">
          <p>Kyle</p>
          <img src={personImg2} alt="" className="team__img" />
        </div>
        <div className="team__card">
          <p>Sarah</p>
          <img src={personImg3} alt="" className="team__img" />
        </div>
        <div className="team__card">
          <p>John</p>
          <img src={personImg4} alt="" className="team__img" />
        </div>
      </div>
    </div>
  );
}

export default Team;
