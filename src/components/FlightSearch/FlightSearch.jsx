import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
      <div className="p-4" style={{backgroundColor: '#E5EEF4'}}>
        <h1>Flight Search</h1>
        <div className="container">
          <div className="row">
            {flights.map((flight) => (
              <div className="card shadow my-2 mx-2" key={flight._id}>
                <div className="col-12">
                  <h1>{flight.departureTime}</h1>
                  <p>Arrival : {flight.arrivalTime}</p>
                  <p>Departure : {flight.departureTime}</p>
                  <p>Source : {flight.source}</p>
                  <p>Destination : {flight.destination}</p>
                  <p>Stops : {flight.stops}</p>
                  <p>Price {flight.ticketPrice}</p>
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
