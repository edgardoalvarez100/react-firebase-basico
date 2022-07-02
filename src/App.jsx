import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from "./components/Admin";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Menu from "./components/Menu";

const App = () => {
  return (<div className="">
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Inicio />} />
      </Routes>

    </BrowserRouter>
  </div>)
    ;
}

export default App;
