import React from "react";
import "./Com.css";
import Image from "./1.png";
function Com() {
  return (
    <div className="Com">
      <nav className="com1">
        <img src={Image} alt="" />
        <p className="one">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae,
          quod, hic assumenda pariatur ducimus adipisci accusantium odit dolorum
          nobis sed ex enim saepe in mollitia temporibus rerum eveniet veniam
          earum!
        </p>
        <button type="submit" className="btn">
          Get Random Joke
        </button>
      </nav>
    </div>
  );
}

export default Com;
