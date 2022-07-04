import React, { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa";

const socmedData = [
  {
    name: "Dribbble",
    icon: <FaDribbble />,
    href: "https://dribbble.com/suryakusuma",
    color: "#E94C88",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    href: "https://id.linkedin.com/in/suryabk",
    color: "#0A66C2",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    href: "https://github.com/suryabk",
    color: "#333333",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/surya_sbk/",
    color: "#833AB4",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    href: "mailto:suryabhaktik27@gmail.com",
    color: "#4285F4",
  },
  {
    name: "Location",
    icon: <FaMapPin />,
    href: "https://goo.gl/maps/9uiDBGEZ87heN3gq8",
    color: "#c23b22",
  },
];

function Socmed({ socmed }) {
  let filter = socmedData.filter((icon) => icon.name === socmed);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="text-white text-xl"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={hover ? { color: filter[0].color } : null}>
      <div className="tooltip tooltip-bottom" data-tip={socmed}>
        <a href={filter[0].href} target="_blank" rel="noopener noreferrer">
          {filter[0].icon}
        </a>
      </div>
    </div>
  );
}

export default Socmed;
