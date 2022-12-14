import React from "react";
import { gsap } from "gsap";

function Form() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="email">
      <div className="email__content">
        <h1>Get access to members only perks</h1>
        <p>訂閱電子報,獲得即時優惠資訊!</p>
        <form onSubmit={onSubmit}>
          <div className="form__wrap">
            <label htmlFor="email">
              <input type="email" placeholder="enter your email" id="email" />
            </label>
            <button className="button" type="submit">
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
