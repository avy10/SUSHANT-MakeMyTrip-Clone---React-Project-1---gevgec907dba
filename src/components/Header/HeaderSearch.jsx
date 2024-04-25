import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../images/makemytriplogo.png";
import flight from "../../images/flight1.png";
import hotel from "../../images/hotels1.png";
import home from "../../images/home1.png";
import holiday from "../../images/holiday1.png";
import train from "../../images/train1.png";
import bus from "../../images/bus1.png";
import cab from "../../images/cab1.png";
import forex from "../../images/forex1.png";
import travel from "../../images/travel1.png";
import bag from "../../images/bag.png";

import { Link, useLocation } from "react-router-dom";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const data = [
  { id: 1, label: "Flights", icon: flight, link: "/flights" },
  { id: 2, label: "Hotels", icon: hotel, link: "/hotels" },
  { id: 5, label: "Trains", icon: train, link: "/trains" },
  { id: 6, label: "Buses", icon: bus, link: "/buses" },
  { id: 7, label: "Cabs", icon: cab, link: "/notfound" },
  { id: 4, label: "Holiday Packages", icon: holiday, link: "/notfound" },
  { id: 3, label: "Homestays & Villas", icon: home, link: "/notfound" },
  { id: 9, label: "Travel Insurance", icon: travel, link: "/notfound" },
  { id: 8, label: "Forex Card & Currency", icon: forex, link: "/notfound" },
];

function HeaderSearch() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="header1">
        {/* <div className="left"> */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar">
          <ul>
            {data.map((item) => (
              <li key={item.id} className="navItem">
                <Link to={item.link}>
                  <div>
                    <div className="icon">
                      <img
                        src={item.icon}
                        alt="nav"
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="label">{item.label}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* </div> */}
        <div className="right">
          <div className="d-flex">
            <div className="p-2">
              <img src={bag} alt="" width="30" height="30" />
            </div>
          </div>
          <div
            className="p-0"
            style={{
              height: "20px",
              lineHeight: "0",
              marginTop: "16px",
              marginRight: "12px",
              fontSize: "12px",
            }}
          >
            <p style={{ color: "black", fontWeight: "600" }}>Login or</p>
            <p style={{ color: "black", fontWeight: "400" }}>Create Account</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderSearch;
