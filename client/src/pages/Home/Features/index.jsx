import React from "react";
import "./styles.scss";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 p-5">
            <img
              src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Replace-screen-inside-this-SO3-1.jpg"
              alt="feature-img"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-6 p-5">
            <div className="content">
              <div className="section-header">
                <h4>MEET WITH OUR</h4>
                <h2>Splendid Features</h2>
              </div>
              <div className="feature-cards">
                <div className="feature-card d-flex ">
                  <div className="icon">
                    <i class="fa-regular fa-microphone"></i>
                  </div>
                  <div className="card-content">
                    <h3>Voice Recognition</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      
                    </p>
                  </div>
                </div>
                <div className="feature-card d-flex ">
                  <div className="icon">
                    <i class="fa-regular fa-microphone"></i>
                  </div>
                  <div className="card-content">
                    <h3>Voice Recognition</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      
                    </p>
                  </div>
                </div>
                <div className="feature-card d-flex ">
                  <div className="icon">
                    <i class="fa-regular fa-microphone"></i>
                  </div>
                  <div className="card-content">
                    <h3>Voice Recognition</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
