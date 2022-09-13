import React from "react";
import {Outlet} from "react-router-dom";
import { MyFooter } from "../components/myFooter";
import { MyHeader } from "../components/myHeader";

export const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyHeader></MyHeader>
        <Outlet />
        <MyFooter></MyFooter>
      </header>
    </div>
  );
};
