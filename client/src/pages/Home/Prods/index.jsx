import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import { DeleteById, GetAll } from "../../../store/prods/api_actions";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";

const Prods = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.watch);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getAllData = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAllData();
  }, []);
  useEffect(() => {
    setFilteredData(() => {
      return data.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase().trim())
      );
    });
  }, [data, searchValue]);
  return (
    <div className="prods">
      <div className="container">
        <div className="section-header mb-5">
          <h4>ADJUSTABLE STRAPS</h4>
          <h2>
            Choose the best <br /> color for your activity
          </h2>
        </div>
        <div className="filter-section row justify-content-between">
          <div class="form-group col-12 col-md-6 col-lg-6 mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(() => e.target.value);
              }}
            />
          </div>
          <div
            class="btn-group col-12 col-md-6 col-lg-6 mt-3"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              class="btn btn-light"
              onClick={() => setFilteredData(data)}
            >
              Default
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={() =>
                setFilteredData(() => {
                  return [...data].sort((a, b) => a.price - b.price);
                })
              }
            >
              Lowest to Highest
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={() =>
                setFilteredData(() => {
                  return [...data].sort((a, b) => b.price - a.price);
                })
              }
            >
              Highest to Lowest
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={() =>
                setFilteredData(() => {
                  return [...data].sort((a, b) => a.name.localeCompare(b.name));
                })
              }
            >
              A to Z
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={() =>
                setFilteredData(() => {
                  return [...data].sort((a, b) => b.name.localeCompare(a.name));
                })
              }
            >
              Z to A
            </button>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <p>Loading</p>
          ) : filteredData ? (
            filteredData?.map((item) => (
              <div className="col-12 col-md-6 col-lg-4">
                <div className="item-card mt-5">
                    <h5 className="text-center mt-4">{item.subTitle}</h5>
                  <Link to={`/detail/${item._id}`}>
                    <h3 className="title text-center ">{item.name}</h3>
                  </Link>
                  <p className="price text-center">
                    $ {item.price}
                  </p>
                  <div className="actions text-center">
                    <button
                      className="btn btn-outline-light"
                      onClick={() => dispatch(DeleteById(item._id))}
                    >
                      Delete
                    </button>{" "}
                    <button
                      className="btn btn-light"
                      onClick={() => dispatch(addToWishlist(item))}
                    >
                      Add to wishlist
                    </button>{" "}
                  </div>
                  <div className="img-container">
                    <img src={item.image} alt="" />
                  </div>
                </div>
              </div>
            ))
          ) : error ? (
            <p>error</p>
          ) : (
            <p>not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prods;
