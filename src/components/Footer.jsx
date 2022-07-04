import React from "react";
import Socmed from "../utils/Socmed";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const mySocialMedia = [
    "Dribbble",
    "Linkedin",
    "Github",
    "Instagram",
    "Email",
    "Location",
  ];
  return (
    <footer
      id="contact"
      className="footer footer-center p-10 bg-primary text-primary-content">
      <Fade direction="bottom" triggerOnce={true} delay={500} duration={2000}>
        <div className="flex flex-col justify-center items-center">
          <img src="./assets/logo-white.svg" alt="" />
          <p className="font-bold">
            Sbk Industries Ltd. <br />
            Providing solution on front-end development
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </Fade>
      <Fade direction="bottom" triggerOnce={true} delay={500} duration={2000}>
        <div>
          <div className="flex flex-row flex-wrap gap-4 w-full">
            {mySocialMedia.map((socmed) => (
              <Socmed socmed={socmed} key={socmed} />
            ))}
          </div>
        </div>
      </Fade>
    </footer>
  );
}

export default Footer;
