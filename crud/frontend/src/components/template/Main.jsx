import "./Main.css";
import React from "react";
import Header from "./Header";

export default (props) => (
  <React.Fragment>
    <Header {...props}></Header>
    <main className="content container-fluid">
      {/* Para jogar as tags filhas é necessário usar props.children */}
      <div className="p-3 mt-3">{props.children}</div>
    </main>
  </React.Fragment>
);
