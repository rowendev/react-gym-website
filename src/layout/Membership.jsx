import React from "react";
import { FaDumbbell } from "react-icons/fa";

function Membership() {
  return (
    <div className="memberships">
      <h1>View our plans</h1>
      <p className="membership__desc">
        Get started today and receive 25% off your first month
      </p>
      <div className="membership__wrapper">
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
