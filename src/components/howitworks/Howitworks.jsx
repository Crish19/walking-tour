import React from "react";
import "./howitworks.css";
import { useState } from "react";
import git1 from '../../media/marginalia-location-access.gif'
import git2 from '../../media/sammy-backpack-for-travel.gif'
import git3 from '../../media/boba-traveller-man-looking-at-map-near-signpost-1.gif'

function HowItWorks() {
  return (
    <div className="how-it-works-container" id="how-it-works">
      <div className="title">
        <h2>How it works</h2>
      </div>
      <div className="title-underline-how"></div>
      <div className="how-it-works-cards">
        <div className="card">
          <h3 className="card-number">1</h3>
          <img src={git2} alt="" />
          <h2>Book a tour</h2>
          <p>
            Customers can book a tour with Cristhian or Jorge by filling out a
            form on your website or contacting you directly.
          </p>
        </div >
        <div className="card">
        <h3 className="card-number">2</h3>
        <img src={git1} alt="" />
          <h2>Plan the tour</h2>
          <p>
            Customers can keep in touch with you and tell you what they want to
            see, so you can plan a specific tour for them.
          </p>
        </div>
        <div className="card">
        <h3 className="card-number">3</h3>
        <img src={git3} alt="" />
          <h2>Meet in person</h2>
          <p>
            When everything is decided and agreed upon via WhatsApp or email,
            you'll meet in person and start an amazing tour.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
