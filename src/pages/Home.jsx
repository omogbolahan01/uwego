import React from "react";
import { Link } from "react-router-dom";
import Swiper from "../../swiper";

export default function Home() {
  return (
    <div className="hero-session">
      <div className="home-pagecontainer">
        <div className="hero-area">
          <div className="area-1">
            <p>Since 2022</p>
            <h2>Hello.</h2>
            <h2>
              {" "}
              We are <span className="h-span">Uwego</span> .
            </h2>
            <p>
              We’re on a mission to turn little drives into better rides, and
              make cities flow better for everyone.
            </p>
            <div className="download-area">
              <button className="app-store">
                <img src="/images/download1.png" />
              </button>

              <img src="/images/Line 4.png" className="download-line" />
              <button className="app-store">
                {" "}
                <img src="/images/download2.png" />
              </button>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <img src="/images/hero.png" className="hero--image" />
        </div>
      </div>
      <div className="what-area">
        <div className="what-text">
          <h3>WHAT THE APP ?</h3>
          <p>Our service has allowed you to find the fastest route.</p>
        </div>
        <div className="what-flex">
          <div className="flex-obj">
            <img src="/images/Metaverse.png" />
            <h3>Directions guide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              quisque lorem congue non pellentesque ut.
            </p>
          </div>
          <div className="flex-obj">
            <img src="/images/Dimension.png" />
            <h3>Fastest route</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              quisque lorem congue non pellentesque ut.
            </p>
          </div>
          <div className="flex-obj">
            <img src="/images/7.png" />
            <h3>Transportation connection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
              quisque lorem congue non pellentesque ut.
            </p>
          </div>
        </div>
      </div>
      <div className="why-area">
        <div className="why-text">
          <h3>WHY UWEGO ?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            quisque lorem congue non pellentesque ut.
          </p>
        </div>
        <div className="why-flex">
          <div className="flex-why">
            <img src="/images/ic.png" />
            <h3>Save time</h3>
            <p>
              Safety is at the heart of our company, it drives everything we do.
            </p>
          </div>
          <div className="flex-why">
            <img src="/images/carbon.png" />
            <h3>Innovation</h3>
            <p>
              we are focused on improving the experience for councils and
              riders.
            </p>
          </div>
          <div className="flex-why">
            <img src="/images/webhoo.png" />
            <h3>Sustainability</h3>
            <p>Inexpensive option that help reduce city congestion.</p>
          </div>
        </div>
      </div>
      <div className="how-area">
        <div className="how-text">
          <h3>HOW TO UWEGO ?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst
            quisque lorem congue non pellentesque ut.
          </p>
        </div>
        <div className="how-flex">
          <div className="flex-how">
            <img src="/images/Saly-12.png" />
            <p>Step 1</p>
            <h4>Download App </h4>
            <p>
              Lorem sit ametelit. Dictumst consectetur quisque lorem congue non
              pellentesque ut.
            </p>
          </div>
          <img src="/images/Group 12.png" className="how-arrow" />
          <div className="flex-how">
            <img src="/images/Saly-6.png" />
            <p>Step 2</p>
            <h4>Search </h4>
            <p>
              Lorem sit ametelit. Dictumst consectetur quisque lorem congue non
              pellentesque ut.
            </p>
          </div>
          <img src="/images/Group 12.png" className="how-arrow" />
          <div className="flex-how">
            <img src="/images/Saly-3.png" />
            <p>Step 3</p>
            <h4>Select your route </h4>
            <p>
              Lorem sit ametelit. Dictumst consectetur quisque lorem congue non
              pellentesque ut.
            </p>
          </div>
          <img src="/images/Group 12.png" className="how-arrow" />
          <div className="flex-how">
            <img src="/images/Saly-22.png" />
            <p>Step 4</p>
            <h4>Start your trip </h4>
            <p>
              Lorem sit ametelit. Dictumst consectetur quisque lorem congue non
              pellentesque ut.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-area">
        <div className="slider-text">
          <h3>10K+ CLIENTS TRUST US</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <Swiper />
        </div>
      </div>
      <div className="trust-area">
        <h2>TRUSTED BY THE TRUSTED</h2>
        <div className="logo-class1">
          <div className="try-logo">
            <h3>Logo Partner</h3>
          </div>
          <div className="try-logo2">
            <h3>Logo Partner</h3>
          </div>
          <div className="try-logo">
            <h3>Logo Partner</h3>
          </div>
          <div className="try-logo2">
            <h3>Logo Partner</h3>
          </div>
        </div>
        <div className="logo-class12">
          <div className="try-logo2">
            <h3>Logo Partner</h3>
          </div>
          <div className="try-logo">
            <h3>Logo Partner</h3>
          </div>
          <div className="try-logo2">
            <h3>Logo Partner</h3>
          </div>
          <div className="try-logo">
            <h3>Logo Partner</h3>
          </div>
        </div>
      </div>
      <div className="news-area">
        <div className="news-text">
          <h2>NEWS</h2>
          <p>Get the latest news updates and happenings from Uwego</p>
        </div>
        <div className="news-images">
          <div className="neews">
            <div className="news-image1">
              <div>
                <img src="/images/Rectangle 102.png" />
              </div>
              <div>
                <h2>News</h2>
                <p>UWEGO is now integrated with Google Maps!</p>
                <p>20/01/2022</p>
              </div>
            </div>
            <div className="news-image2">
              <div>
                <img src="/images/Rectangle 103.png" />
              </div>
              <div>
                <h2>News</h2>
                <p>UWEGO is now integrated with Google Maps!</p>
                <p>20/01/2022</p>
              </div>
            </div>
          </div>

          <div className="news-image3">
            <div>
              <img src="/images/Rectangle 104.png" />
            </div>
            <div>
              <h2>News</h2>
              <p>UWEGO is now integrated with Google Maps!</p>
              <p>20/01/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="download-area2">
        <div className="iphone-13">
          <img src="/images/iphone-13.png" />
        </div>
        <div className="iphone-text">
          <h3>Download Uwego For Free</h3>
          <p>
            We’re on a mission to turn little drives into better rides, and make
            cities flow better for everyone.
          </p>
          <div className="button-down">
            {/* <button> */}
            <img src="/images/download1.png" className="app-stores" />
            {/* </button> */}
            {/* <button> */}
            <img src="/images/download2.png" className="app-stores" />
            {/* </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
