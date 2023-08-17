import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about-top">
      <div className="about-first">ABOUT US</div>
      <div className="about-mid">
        <div className="about-check">
          <div className="about-image">
            <img src="/images/Rectangle 133.png" />
          </div>
          <div className="about-side">
            <h2>OUR STORY</h2>
            <div className="about-mission">
              <div className="mission-1">
                <img src="/images/rocket 1.png" className="imaage" />
                <h3>Mission</h3>
                <p>
                  We partner with cities to connect people and places in a safe,
                  convenient and fun way.
                </p>
              </div>
              <div className="mission-2">
                <img src="/images/settings.png" className="imaage" />
                <h3>Vision</h3>
                <p>
                  We are driven to help the world build a more prosperous and
                  sustainable future through new ways of moving and connecting.
                </p>
              </div>
            </div>
            <p className="cheekk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
              enim, consectetur arcu, in pulvinar morbi. Habitant commodo sit
              molestie metus lacus eget dictum morbi ac. Risus aliquet egestas
              consectetur ipsum nibh sit interdum. Proin mattis in nulla duis
              risus, dignissim. Maecenas sit proin odio commodo sed. Nunc
              volutpat enim urna, suspendisse massa tellus. Venenatis, sit
              ipsum, lectus tortor, quam. Odio quam pellentesque odio nunc
              tortor pellentesque. Nec orci, tincidunt sed enim velit suscipit
              risus. Lobortis dui id accumsan id nisi cras mi habitant. Morbi
              purus enim varius enim. Hendrerit elementum ornare urna mattis
              nisl. Mattis sollicitudin augue a est. Sagittis eget lobortis sit
              volutpat auctor ullamcorper lacinia gravida.
            </p>
          </div>
        </div>
        <div className="whaat-about">
          <h2>What Sets Us Apart</h2>
          <div className="about-flex">
            <div className="flex-about">
              <img src="/images/friendship.png" />
              <h3>Partnering with Cities</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                mattis aliquet elementum aliquam.
              </p>
            </div>
            <div className="flex-about">
              <img src="/images/ibm-security.png" />
              <h3>Commitment to Safety</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                mattis aliquet elementum aliquam.
              </p>
            </div>
            <div className="flex-about">
              <img src="/images/machine.png" />
              <h3>Technology Leadership</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                mattis aliquet elementum aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
