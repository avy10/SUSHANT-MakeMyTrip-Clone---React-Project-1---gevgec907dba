import React from "react";
import "../styles/App.css";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Flights from "../Flights";
import Navbar from "./Navbar";
import TopBar from "./TopBar/TopBar";
import Test from "./Test";
import Hotels from "./Hotels";
import Trains from "./Trains/Trains";
import Buses from "./Buses/Buses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Flights />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/trains" element={<Trains />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/notfound" element={<NotFound />} />
        </Route>
        <Route path="/header" element={<Header />} />

        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
