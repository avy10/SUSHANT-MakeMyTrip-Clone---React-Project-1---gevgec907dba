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
    <>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className=" left d-flex align-items-center justify-content-center">
                <a href="https://twitter.com/makemytrip/" target="_blank">
                  <div className="footer__icon">
                    <TwitterIcon style={{ fontSize: "30px" }} />
                  </div>
                </a>
                <p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                <a href="https://www.facebook.com/makemytrip/" target="_blank">
                  <div className="footer__icon">
                    <FacebookSharpIcon style={{ fontSize: "30px" }} />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="right align-items-center justify-content-center">
                <div className="copyright pt-2" style={{ lineHeight: "6px" }}>
                  <p>© 2024 MAKEMYTRIP PVT. LTD.</p>
                  <p className="text-center">
                    Country{" "}
                    <span>
                      <b>India USA UAE</b>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

// import React from "react";
// import "./footer.css";
// import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import EmailIcon from "@mui/icons-material/Email";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// function Footer() {
//   const d = new Date();
//   let year = d.getFullYear();

//   return (
//     <div className="footer__container">
//       <div className="footer">
//         <div className="footer__icons">
//           <a href="https://www.facebook.com/makemytrip/">
//             <div className="footer__icon">
//               <FacebookSharpIcon />
//             </div>
//           </a>
//           <a href="https://twitter.com/makemytrip/">
//             <div className="footer__icon">
//               <TwitterIcon />
//             </div>
//           </a>
//           <a href="https://www.instagram.com/makemytrip">
//             <div className="footer__icon">
//               <InstagramIcon />
//             </div>
//           </a>
//           <a href="https://www.youtube.com/@MakeMyTripOfficial">
//             <div className="footer__icon">
//               <YouTubeIcon />
//             </div>
//           </a>
//         </div>
//         <div className="footer__copy">
//           <p>
//             ©<span>{year}</span>Copyright MakeMyTrip
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
