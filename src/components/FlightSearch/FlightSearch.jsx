import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./flightSearch.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Header from "../Header/Header";
import Flights from "../../Flights";
import HeaderSearch from "../Header/HeaderSearch";
import FlightNew from "../../FlightNew";

const FlightSearch = () => {
  const location = useLocation();
  const { source, destination, day } = location.state;
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/bookingportals/flight?search={"source":"${source}","destination":"${destination}"}&day=${day}`,
          {
            method: "GET",
            headers: {
              projectID: "4xh7gn2pv8it",
            },
          }
        );

        const apiData = await response.json();
        setFlights(apiData?.data?.flights);
        console.log(apiData);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchData();
  }, [source, destination, day]);

  return (
    <>
      <div className="top-color"></div>
      <div style={{ paddingBottom: "70px" }}>
        <HeaderSearch />
      </div>
      <div className="p-4" style={{ backgroundColor: "#E5EEF4" }}>
        <div className="container">
          <div style={{}}>
            <FlightNew source={source} destination={destination} day={day} />
          </div>
          <div className="card border-0" style={{backgroundColor: '#113965'}}>
            <p style={{ fontSize: "28px", color: "white", fontWeight: '600' }}>
              Flights from {source} to {destination}
            </p>
          </div>
          <div className="row">
            {flights.map((flight) => (
              <div
                className="card my-2 mx-2 p-2 rounded-0 border-0"
                key={flight._id}
              >
                <div className="col-12 d-flex justify-content-evenly align-items-center">
                  <div className="arrival">
                    <div className="time">
                      <p>{flight.arrivalTime}</p>
                    </div>
                    <div className="city">
                      <p>{flight.source}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "center", lineHeight: "0" }}>
                    <p>{flight.duration} hour</p>
                    <p
                      style={{ fontWeight: "1000", color: "rgb(81, 226, 194)" }}
                    >
                      __________
                    </p>
                  </div>
                  <div className="departure align-items-center">
                    <div className="time">
                      <p>{flight.departureTime}</p>
                    </div>
                    <div className="city">
                      <p>{flight.destination}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "center", lineHeight: "12px" }}>
                    <p
                      style={{
                        fontWeight: "700",
                        fontSize: "24px",
                        alignItems: "center",
                      }}
                    >
                      <CurrencyRupeeIcon />
                      <span>{flight.ticketPrice} </span>
                    </p>
                    <p>per adult</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
