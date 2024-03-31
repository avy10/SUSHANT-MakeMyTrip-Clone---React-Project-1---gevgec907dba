import React from "react";
import flight from "../images/flight1.png";
import "./test.css";
import { Link, useLocation } from "react-router-dom";

const data = [
  { id: 1, label: "Flights", icon: flight, link: "flights" },
  { id: 2, label: "Hotels", icon: flight, link: "hotels" },
  { id: 3, label: "Homestays & Villas", icon: flight, link: "home" },
  { id: 4, label: "Holiday Packages", icon: flight, link: "holiday" },
  { id: 5, label: "Trains", icon: flight, link: "trains" },
  { id: 6, label: "Buses", icon: flight, link: "buses" },
  { id: 7, label: "Cabs", icon: flight, link: "cabs" },
  { id: 8, label: "Forex Card & Currency", icon: flight, link: "forex" },
  { id: 9, label: "Travel Insurance", icon: flight, link: "travel" },
];

function Test() {
  const location = useLocation();

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="navs card shadow border-0">
          <div className="row text-center pt-2  px-4">
            {data.map((item) => (
              <div key={item.id} className="col ">
                <Link to={item.link}>
                  <div
                    className={`card-nav ${
                      location.pathname.includes(item.link) ||
                      (item.link === "flights" && location.pathname === "/")
                        ? "selected"
                        : ""
                    }`}
                    style={{ width: "74px" }}
                  >
                    <div className="nav-icon">
                      <img
                        src={item.icon}
                        alt="nav"
                        width="40px"
                        height="40px"
                      />
                    </div>
                    <div className="nav-label">{item.label}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
