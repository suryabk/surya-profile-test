import React from "react";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiGithub,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";

const icons = [
  { name: "API", icon: <AiFillSetting />, color: "#61DBFB" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "#553C7B" },
  { name: "Css", icon: <SiCss3 />, color: "#3C99DC" },
  { name: "Git", icon: <SiGit />, color: "#F1502F" },
  { name: "Github", icon: <SiGithub />, color: "#333333" },
  { name: "Heroku", icon: <SiHeroku />, color: "#6762A6" },
  { name: "Html", icon: <SiHtml5 />, color: "#E34C26" },
  { name: "Javascript", icon: <SiJavascript />, color: "#F0DB4F" },
  { name: "Mysql", icon: <SiMysql />, color: "#00758F" },
  { name: "Php", icon: <SiPhp />, color: "#474A8A" },
  { name: "Netlify", icon: <SiNetlify />, color: "#20c6b7" },
  { name: "React", icon: <SiReact />, color: "#61DBFB" },
  { name: "Sass", icon: <SiSass />, color: "#CD6799" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#2BA4CF" },
  { name: "Vercel", icon: <SiVercel />, color: "#000" },
  { name: "Vscode", icon: <SiVisualstudiocode />, color: "#0078d7" },
];
function Skill({ logo }) {
  let filter = icons.filter((icon) => icon.name === logo);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="text-emerald-300 dark:text-white"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      style={hover ? { color: filter[0].color } : null}>
      <div className="tooltip tooltip-bottom" data-tip={logo}>
        {filter[0].icon}
      </div>
    </div>
  );
}

export default Skill;
