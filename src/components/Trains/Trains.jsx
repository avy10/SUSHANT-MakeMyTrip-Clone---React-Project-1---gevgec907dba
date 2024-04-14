import React, { useEffect } from "react";

function Trains() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="content card">
          <div className="ps-3">
            <h5>Trains</h5>
          </div>
          <div className="card-container d-flex ">
            <div
              className="card rounded-start rounded-0 p-1 ps-4"
              style={{ width: "300px", height: "112px" }}
            >
              <p>City, Property Name Or Location</p>
            </div>
            <div
              className="card rounded-0 p-1 ps-4"
              style={{ width: "300px", height: "112px" }}
            >
              <p>Check-In</p>
            </div>
            <div
              className="card rounded-0 p-1 ps-4"
              style={{ width: "158px", height: "112px" }}
            >
              <p>Check-Out</p>
            </div>
            <div
              className="card rounded-0 p-1 ps-4"
              style={{ width: "158px", height: "112px" }}
            >
              <p>Rooms & Guests</p>
            </div>
            <div
              className="card rounded-0 rounded-end p-1 ps-4"
              style={{ width: "214px", height: "112px" }}
            >
              <p>Price Per Night</p>
            </div>
          </div>
        </div>
      </div>
      <div className="search-btn">
        <button>SEARCH</button>
      </div>
    </>
  );
}

export default Trains;
