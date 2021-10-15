import React from "react";
import Shop from "../components/HomeComponents/Shop/Shop";
import Footer from "../components/Shared/Footer/Footer";
import NavBar from "../components/Shared/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Shop />
      <Footer />
    </>
  );
};

export default Home;
