import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import LandingPage from "../../Components/LandingPage/Landingpage";


function Home() {

  return (
    <>
      <h1 style={{textAlign:"center"}}>Home Page</h1>
      <LandingPage />
    </>
  );
}

export default Home;