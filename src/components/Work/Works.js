import React, { useContext } from "react";
import "./Works.css";
import Karo from "../../img/karo.png";
import Sparks from "../../img/sparks.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

import { motion } from "framer-motion";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Worked for these</span>
        <span>Brands & Companies</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          KaroStartup : Worked in a team of 20 people as a frontend developer
          for developing <br /> an attractive landing page for Campus Ambassador
          Program.
          <br />
          <br />
          The Sparks Foundation : Build a funding website with payment gateway
          integration using razorpay .
          <br /> User can donate money with any payment medium i.e. debit card /
          credit card / UPI etc.
        </span>
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          <button className="button s-button">Hire Me</button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-10px" }}
          transition={{ duration: 4.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Sparks} className="sparks" alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Karo} alt="" />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
