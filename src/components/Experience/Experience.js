import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">1+ </div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span>FrontendDev</span>
      </div>
      <div className="achievement">
        <div className="circle">10+ </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle">2+ </div>

        <span style={{ color: darkMode ? "white" : "" }}>internships</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
