import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  const variants = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={variants}
        transition={transition}
      >
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
      </motion.div>
    </main>
  );
};

export default Contact;
