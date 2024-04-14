import React, { useEffect } from "react";
import "./notfound.css";

function NotFound() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center pb-4">
        <div className="content card">
          <div className="shake-container">
            <h1 className="text-center">Currently not available</h1>
            <h4 className="text-center" style={{color: 'gray'}}>Coming Soon</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
