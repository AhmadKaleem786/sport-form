"use client";

import { initFlowbite } from "flowbite";
import "./index.css";
import { useEffect } from "react";
import SportsData from "./components/sportsData/sportsData";

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <SportsData />
    </div>
  );
}

export default App;
