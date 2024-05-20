import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./component/Profile";
import Repo from "./component/Repo";
import Navigation from "./component/Navigation"
import Fallback from "./component/Fallback";
import Home from "./component/Home";
;// import Result from "./component/Result";
import "./index.css";

function Index() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Repo" element={<Repo />} />
        <Route path="/Navigation" element={<Navigation />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Fallback />}/>

      </Routes>
      </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);


