import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import loginAuth from "../../img/loginAuth.png";
import netflixClone from "../../img/netflixClone.png";
import fbClone from "../../img/fbClone.png";
import quizSystem from "../../img/quizSystem.png";
import paymentGateway from "../../img/paymentgateway.png";
import expenseTracker from "../../img/expenseTracker.png";
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider  */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={netflixClone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={paymentGateway} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fbClone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={loginAuth} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={expenseTracker} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={quizSystem} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
