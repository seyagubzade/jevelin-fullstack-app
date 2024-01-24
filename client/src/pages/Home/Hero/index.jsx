import React from "react";
import "./styles.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-start justify-content-center">
            <h1>
              LifeStyle <br /> Smart{" "}
              <span style={{ color: "#984FFF" }}>Watch</span>
            </h1>
            <h3>Technology of the future</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              excepturi ut nesciunt pariatur enim est?
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 d-flex flex-column align-items-start justify-content-center">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Vector-Smart-Object-copy-3.png"
              alt="hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
