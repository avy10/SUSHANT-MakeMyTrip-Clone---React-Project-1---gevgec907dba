import React, { useEffect, useState } from "react";

import "./flights.css";
import { Autocomplete, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/en-in";
import "dayjs/locale/de";
import "dayjs/locale/it";
import "dayjs/locale/en-gb";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

const BoldOptionLabel = ({ children }) => {
  return <strong>{children}</strong>;
};

function Flights() {
  const [airportNames, setAirportNames] = useState([]);
  const [fromTerm, setFromTerm] = useState(null);
  const [toTerm, setToTerm] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const navigate = useNavigate();

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
  const userLocale = "en-in";
  const handleSearch = () => {
    navigate("/flightSearch", {
      state: {
        source: fromTerm?.iata_code,
        destination: toTerm?.iata_code,
        day: selectedDate.format("ddd"),
      },
    });
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="content container card">
          <div className="row">
            <div className="col-12 col-md-4 card rounded-start rounded-0 p-1 px-4 py-3">
              <p style={{ marginBottom: "-2px" }}>From</p>
              <Autocomplete
                options={airportNames}
                getOptionLabel={(option) =>
                  `${option.city}, \n${option.iata_code}, ${option.name}`
                }
                value={fromTerm}
                onChange={handleFromChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    multiline
                    rows={3}
                    InputProps={{
                      ...params.InputProps,
                      // style: { border: "none" },
                    }}
                  />
                )}
                renderOption={(props, option) => (
                  <div
                    style={{ padding: "12px 4px 0 12px", alignItems: "top" }}
                    {...props}
                  >
                    {/* <div style={{ fontSize: "13px", alignItems: 'initial' ,justifyContent: 'initial', display: 'flex', height: '100%'}}>
                      <FlightTakeoffIcon/>
                    </div> */}
                    <p style={{ fontSize: "13px", textAlign: "left" }}>
                      <strong>{option.city}</strong>,{option.iata_code},
                      <br></br>
                      {option.name}
                    </p>
                  </div>
                )}
              />
            </div>
            <div className="col-12 col-md-4 card rounded-0 p-1 px-4 py-3">
              <p style={{ marginBottom: "-2px" }}>To</p>
              <Autocomplete
                options={airportNames}
                getOptionLabel={(option) =>
                  `${option.city},\n${option.iata_code}, ${option.name} `
                }
                value={toTerm}
                onChange={handleToChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // label="Search airports"
                    variant="standard"
                    multiline
                    rows={3}
                    InputProps={{
                      ...params.InputProps,
                      style: { border: "none" },
                    }}
                  />
                )}
              />
            </div>
            <div className="col-12 col-md-4 card rounded-0 rounded-end p-1 px-4 py-3">
              <p>Departure</p>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={userLocale}
              >
                <DatePicker
                  // label="Select Date"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                />
              </LocalizationProvider>
            </div>
            {/* <div className="col-12 col-md-2 card rounded-0 rounded-end p-1 ps-4">
              Traveller & Class
            </div> */}
          </div>
        </div>
      </div>
      <div className="search-btn">
        <button onClick={handleSearch}>SEARCH</button>
      </div>
    </>
  );
}

export default Flights;
