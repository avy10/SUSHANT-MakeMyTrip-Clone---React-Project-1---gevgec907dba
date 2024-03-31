import React, { useState } from "react";
import "./topbar.css";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import logo from "../../images/logo1.png";
import bag from "../../images/bag.png";
import LoginModal from "../../LoginModal";

function TopBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="topbar">
        <div className="d-flex justify-content-between">
          <div className="top-logo" onClick={refreshPage}>
            <img src={logo} alt="logo" />
          </div>
          <div className="d-flex">
            <div className="d-flex">
              <div className="p-2">
                <img src={bag} alt="" width="30" height="30" />
              </div>
            </div>
            <div className="p-0" style={{height:'20px',lineHeight: '0',marginTop:'16px',marginRight:'12px', fontSize: '12px'}}>
              <p style={{color: 'white', fontWeight: '600'}}>My Trips</p>
              <p style={{color: '#C2C2C2', fontWeight: '400'}}>Manage your bookings</p>
            </div>
            <div>
              <div className="login" onClick={handleOpen}>
                <p>Login or Create Account</p>
              </div>
              <LoginModal open={open} handleClose={handleClose} />
            </div>
          </div>
        </div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default TopBar;
