import React from "react";

function Location() {
  return (
    <div className="location">
      <div className="location__desc">
        <h1>Where are we ?</h1>
        <p className="topline">Location:</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quaerat.
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57840.128553116985!2d121.49468075820313!3d25.0338014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da80a7ad%3A0xacc4d11dc963103c!2z5Y-w5YyXMTAx6L6m5YWs5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1665406720782!5m2!1szh-TW!2stw"
        loading="lazy"
        title="1"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
