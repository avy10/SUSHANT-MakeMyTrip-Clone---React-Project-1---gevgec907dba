import React from "react";
import flight from "../images/flight1.png";
import flight2 from "../images/flight2.png";
import hotel from "../images/hotels1.png";
import home from "../images/home1.png";
import holiday from "../images/holiday1.png";
import train from "../images/train1.png";
import bus from "../images/bus1.png";
import cab from "../images/cab1.png";
import forex from "../images/forex1.png";
import travel from "../images/travel1.png";

import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const data = [
  { id: 1, label: "Flights", icon: flight2, icon1: flight2, link: "flights" },
  { id: 2, label: "Hotels", icon: hotel, icon1: flight, link: "hotels" },
  { id: 3, label: "Homestays & Villas", icon: home, icon1: flight, link: "home" },
  { id: 4, label: "Holiday Packages", icon: holiday, icon1: flight, link: "holiday" },
  { id: 5, label: "Trains", icon: train, icon1: flight, link: "trains" },
  { id: 6, label: "Buses", icon: bus, icon1: flight, link: "buses" },
  { id: 7, label: "Cabs", icon: cab, icon1: flight, link: "cabs" },
  { id: 8, label: "Forex Card & Currency", icon: forex, icon1: flight, link: "forex" },
  { id: 9, label: "Travel Insurance", icon: travel, icon1: flight, link: "travel" },
];

function Navbar() {
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
                        width="42px"
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

export default Navbar;
