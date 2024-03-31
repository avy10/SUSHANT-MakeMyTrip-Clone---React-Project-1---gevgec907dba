import React, { useEffect, useState } from "react";

import "./flights.css";
import { Autocomplete, TextField } from "@mui/material";

function Flights() {
  const [airportNames, setAirportNames] = useState([]);
  const [fromTerm, setFromTerm] = useState(null);
  const [toTerm, setToTerm] = useState(null);

  useEffect(() => {
    fetch(
      "https://academics.newtonschool.co/api/v1/bookingportals/airport?limit=100",
      {
        method: "GET",
        headers: {
          projectID: "4xh7gn2pv8it",
        },
      }
    )
      .then((res) => res.json())
      .then((apiData) => {
        setAirportNames(apiData?.data?.airports);
        if (apiData?.data?.airports?.length > 0) {
          setFromTerm(apiData.data.airports[0]);
        }
        if (apiData?.data?.airports?.length > 0) {
          setToTerm(apiData.data.airports[1]);
        }
      });
  }, []);
  const handleFromChange = (event, newValue) => {
    setFromTerm(newValue);
  };
  const handleToChange = (event, newValue) => {
    setToTerm(newValue);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="content card">
          <div className="ps-3">
            <h5>One Way</h5>
          </div>
          <div className="card-container d-flex ">
            <div
              className="card rounded-start rounded-0 p-1 ps-4"
              style={{ width: "300px", height: "112px" }}
            >
              <p>From</p>
              <Autocomplete
                options={airportNames}
                getOptionLabel={(option) =>
                  `${option.city}, ${option.country} - ${option.name} (${option.iata_code})`
                }
                value={fromTerm}
                onChange={handleFromChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search airports"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div
              className="card rounded-0 p-1 ps-4"
              style={{ width: "300px", height: "112px" }}
            >
              <p>To</p>
              <Autocomplete
                options={airportNames}
                getOptionLabel={(option) =>
                  `${option.city}, ${option.country} - ${option.name} (${option.iata_code})`
                }
                value={toTerm}
                onChange={handleToChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search airports"
                    variant="outlined"
                  />
                )}
              />
            </div>
            <div
              className="card rounded-0 p-1 ps-4"
              style={{ width: "158px", height: "112px" }}
            >
              <p>Departure</p>
            </div>
            <div
              className="card rounded-0 p-1 ps-4"
              style={{ width: "158px", height: "112px" }}
            >
              <p>Return</p>
            </div>
            <div
              className="card rounded-0 rounded-end p-1 ps-4"
              style={{ width: "214px", height: "112px" }}
            >
              <p>Traveller & Class</p>
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

export default Flights;
