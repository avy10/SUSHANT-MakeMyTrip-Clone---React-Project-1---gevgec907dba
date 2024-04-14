import React from "react";
import "./footer.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__icons">
          <a href="https://www.facebook.com/makemytrip/">
            <div className="footer__icon">
              <FacebookSharpIcon />
            </div>
          </a>
          <a href="https://twitter.com/makemytrip/">
            <div className="footer__icon">
              <TwitterIcon />
            </div>
          </a>
          <a href="https://www.instagram.com/makemytrip">
            <div className="footer__icon">
              <InstagramIcon />
            </div>
          </a>
          <a href="https://www.youtube.com/@MakeMyTripOfficial">
            <div className="footer__icon">
              <YouTubeIcon />
            </div>
          </a>
        </div>
        <div className="footer__copy">
          <p>
            ©<span>{year}</span>Copyright MakeMyTrip
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
