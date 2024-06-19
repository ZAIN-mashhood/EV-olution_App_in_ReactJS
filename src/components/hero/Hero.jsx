import React from "react";
import "./Hero.css";
import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";

const Hero = ({
  heroData,
  setHeroCount,
  herocount,
  setPlayStatus,
  playstatus,
}) => {
  return (
    <div className="hero">
      <div className="hero_text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero_explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero_dot_play">
        <ul className="hero_dots">
          <li
            onClick={() => {
              setHeroCount(0);
            }}
            className={herocount === 0 ? "hero_dot orange" : "hero_dot"}
          ></li>
          <li
            onClick={() => {
              setHeroCount(1);
            }}
            className={herocount === 1 ? "hero_dot orange" : "hero_dot"}
          ></li>
          <li
            onClick={() => {
              setHeroCount(2);
            }}
            className={herocount === 2 ? "hero_dot orange" : "hero_dot"}
          ></li>
        </ul>

        <div className="hero_play">
          <img
            onClick={() => {
              setPlayStatus(!playstatus);
            }}
            src={playstatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
