import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <div>
      <Nav />
      <hr />
      <Outlet />
    </div>
  );
}

export default Home;
