import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Toaster />
      <Home />
    </div>
  );
}

export default App;
