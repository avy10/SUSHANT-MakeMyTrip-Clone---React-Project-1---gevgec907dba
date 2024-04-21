import React, { useState, useEffect } from "react";
import { domain, offersURL } from "../../utils/apis";
import { Tabs, Tab, TabPanel, CircularProgress } from "@material-ui/core";
import "./offers.css";

function Offers() {
  const [offers, setOffers] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [isloading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setShowAll(false);
    const types = ["ALL", "FLIGHTS", "HOTELS", "RAILS"];
    const myHeaders = new Headers();
    myHeaders.append("projectID", "${projectID}");
    myHeaders.append("random", "adsaav");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const URL =
      `${domain}${offersURL}?filter={` +
      '"' +
      "type" +
      '"' +
      ":" +
      '"' +
      `${types[activeTab]}` +
      '"' +
      "}";
    console.log(URL);
    fetch(`${URL}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOffers(result?.data?.offers);
        console.log(result);
        setIsLoading(false);
        setTimeout(() => {
          setShowLoader(false);
        }, 1000); 
      })
      .catch((error) => console.error(error));
  }, [activeTab]);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const shouldShowViewAllButton = () => {
    return offers.length > 6;
  };

  return (
    <>
      <div className="container my-4">
        <div className="offers-card card p-4 shadow border-0">
          <div className="">
            <div className="head d-flex">
              <div className="">
                <h3 style={{ fontWeight: "700" }}>OFFERS</h3>
              </div>
              {shouldShowViewAllButton() ? (
                <div className="">
                  {!showAll && (
                    <div className="view-btn" onClick={handleToggleShowAll}>
                      VIEW ALL
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="">
              <Tabs
                value={activeTab}
                onChange={(e, newValue) => setActiveTab(newValue)}
                indicatorColor="primary"
              >
                <Tab label="All" />
                <Tab label="Flights" />
                <Tab label="Hotels" />
                <Tab label="Rails" />
              </Tabs>
            </div>
          </div>

          {showLoader ? (
            <div
              className="loader"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <CircularProgress size={90} />
            </div>
          ) : (
            <div className="row gy-3 gx-3 my-1">
              {offers.slice(0, showAll ? offers.length : 6).map((offer) => (
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" key={offer.id}>
                  <div className="card shadow p-2">
                    <div className="d-flex">
                      <div className="offer-img">
                        <img src={offer.newHeroUrl} alt="img" />
                      </div>
                      <div className="offer-details px-2">
                        <div className="title">
                          <p>{offer.lobDisplayText}</p>
                        </div>
                        <div className="title1">
                          <p>{offer.pTl}</p>
                        </div>
                        <div className="title2">
                          <p>{offer.pTx}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Offers;
