import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from "../screens/Main";
import Login from "../screens/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/" element={localStorage.getItem('accessToken') ? <Main /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;