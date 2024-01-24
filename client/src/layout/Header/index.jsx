import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <img src="https://jevelin.shufflehound.com/single-product/wp-content/uploads/sites/29/2018/03/Jevelin_logo_dark.png" />
          </div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/add"}>Add New</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>Wishlist</Link>
            </li>
          </ul>
          <button className="btn btn-dark header-btn">Buy Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
