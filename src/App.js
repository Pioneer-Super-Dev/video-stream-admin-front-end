import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/layout/Login";
import Admin from "./components/layout/Admin";
import SignUp from "./components/layout/SignUp";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/administrator" element={<Admin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
