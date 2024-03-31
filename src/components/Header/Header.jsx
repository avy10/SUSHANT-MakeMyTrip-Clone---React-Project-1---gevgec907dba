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

import { Link, useLocation } from "react-router-dom";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";

const data = [
  { id: 1, label: "Flights", icon: flight, link: "flights" },
  { id: 2, label: "Hotels", icon: hotel, link: "hotels" },
  { id: 3, label: "Homestays & Villas", icon: home, link: "flights" },
  { id: 4, label: "Holiday Packages", icon: holiday, link: "flights" },
  { id: 5, label: "Trains", icon: train, link: "flights" },
  { id: 6, label: "Buses", icon: bus, link: "flights" },
  { id: 7, label: "Cabs", icon: cab, link: "flights" },
  { id: 8, label: "Forex Card & Currency", icon: forex, link: "flights" },
  { id: 9, label: "Travel Insurance", icon: travel, link: "flights" },
];

function Header() {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  const handleChange = () => {
    if (window.scrollY >= 150) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChange);
    return () => window.removeEventListener("scroll", handleChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className={nav ? "header" : "disnone"}>
        {/* <div className="left"> */}
        <div className="logo" onClick={refreshPage}>
          <img src={logo} alt="logo" />
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
          <div className="first">
            <button>login</button>
          </div>
          <div>
            <button>country</button>
          </div>
          <div>
            <button>Language</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
