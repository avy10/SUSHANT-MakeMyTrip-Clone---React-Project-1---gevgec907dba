import React from "react";
import app1 from "../../images/app1.png";
import qr from "../../images/qr.png";
import left from "../../images/left.png";
import "./applink.css";

function AppLink() {
  return (
    <>
      <div className="container pb-4">
        <div className="card shadow border-0 p-4">
          <div className="applink d-flex justify-content-between">
            <div className="applink-1 d-flex">
              <div>
                <img src={app1} alt="" width="150px" height="150px" />
              </div>
              <div className="mx-2" style={{marginTop: '40px'}}>
                <h1>Download App Now!</h1>
                <p>
                  Use code <span><b>WELCOMEMMT</b></span> and get <span><b>FLAT 12% OFF*</b></span> on your first
                  domestic flight booking
                </p>
              </div>
            </div>
            <div>
              <a href="https://apps.apple.com/us/app/makemytrip-flight-hotel-bus/id530488359?source_caller=ui&shortlink=iosappDownload&c=DTInstallsHomePage_iOS&pid=MMT_mWeb&deep_link_value=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fmakemytrip%2Fid530488359&af_xp=app" >
                <img src={left} alt="qrcode" width="200px" height="150px" />
              </a>
              <img src={qr} alt="qrcode" width="140px" height="150px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppLink;
