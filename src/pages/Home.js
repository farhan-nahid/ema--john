import React from "react";
import Shop from "../components/HomeComponents/Shop/Shop";
import Footer from "../components/Shared/Footer/Footer";
import NavBar from "../components/Shared/NavBar/NavBar";
import "./Pages.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <main className="container">
        <Shop />
      </main>
      <Footer />
    </>
  );
};

export default Home;
