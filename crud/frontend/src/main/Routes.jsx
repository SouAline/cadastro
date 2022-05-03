import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default (props) => (
  <Routes>
    <Route exact path="/" component={Home}></Route>
    <Route path="/users" component={UserCrud}></Route>
    <Route path="*" element={<Home />}></Route>
  </Routes>
);
