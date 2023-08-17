import React from "react";

import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="contact-top">
      <div className="contact-first">
        <h2>CONTACT US</h2>
      </div>
      <div className="contact-info">
        <div className="first-info">
          <h2>Contact info</h2>
          <div className="contact-1">
            <img src="/images/carbon_l.png" className="contact-2" />
            <p>Proin amet diam sit nulla orci feugiat ut.</p>
          </div>
          <div className="contact-1">
            <img src="/images/Vector (2).png" className="contact-2" />
            <p>info@uwego.com.aus</p>
          </div>
          <div className="contact-1">
            <img src="/images/Vector (3).png" className="contact-2" />
            <p>+61 123 456 789</p>
          </div>
          <div className="contact-1">
            <Link to="www.facebook.com">
              <img src="/images/Group 25.png" />
            </Link>
            <Link to="www.twitter.com">
              <img src="/images/Group 26.png" />
            </Link>
            <Link to="www.instagram.com">
              <img src="/images/Ellipse 14.png" />
            </Link>
          </div>
        </div>
        <div className="form-area">
          <h2>send a message</h2>
          <div className="form">
            <div>
              <h3>Name</h3>
              <input
                type="text"
                placeholder="Kally"
                className="form--input"
                name="topText"
              />
            </div>
            <div>
              <h3>Email</h3>
              <input
                type="text"
                placeholder="Your Email"
                className="form--input"
                name="bottomText"
              />
            </div>
            <div>
              <h3>Phone Number</h3>
              <input
                type="text"
                placeholder="Your Phone number"
                className="form--input"
                name="bottomText"
              />
            </div>
            <div>
              <h3>Subject</h3>
              <input
                type="text"
                placeholder="Your Subject"
                className="form--input"
                name="bottomText"
              />
            </div>
            {/* <div>
              <h3>Content</h3>
              <input
                type="text"
                placeholder="Your Content"
                className="form--content"
                name="bottomText"
              />
            </div> */}
            <button className="form--button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
