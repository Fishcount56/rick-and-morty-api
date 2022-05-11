import React from "react";
import NavigationBar from "./navbar/navbar";
import "./dashboard.css";
import { API } from "../config/api";
import CharacterCarousel from "./carousel/carousel";

const Dashboard = () => {
  return (
    <div className="DashboardContent">
      <NavigationBar />
      <div className="DashboardTitle">
        <h1>Find Rick & Morty Characters</h1>
        <button>Character List</button>
      </div>
      <CharacterCarousel />
    </div>
  );
};

export default Dashboard;
