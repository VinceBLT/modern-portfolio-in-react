import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
        <Navigation />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adress</h4>
              <p>6 rue de Bougainville</p>
              <p>78990 Elancourt</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>phone</h4>
              <CopyToClipboard text="0675618104">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => {
                    alert("Phone copied to clipboard");
                  }}
                >
                  06 75 61 81 04
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard
                text="vincent.bezault@icloud.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard hover"
                  onClick={() => {
                    alert("Email copied to clipboard");
                  }}
                >
                  vincent.bezault@icloud.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Vincent Bezault - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/project-4"} />
      </div>
    </main>
  );
};

export default Contact;
