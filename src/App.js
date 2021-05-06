import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from "./component/Appointment/Appointment/Appointment";
import Home from "./component/Home/Home/Home";
import Login from "./component/Login/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import AllPatients from "./component/AllPatients/AllPatients/AllPatients";
import AddDoctor from "./component/AddDoctor/AddDoctor";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/doctor/appointment">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/doctor/patients">
          <AllPatients></AllPatients>
        </Route>
        <Route path="/doctor/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>


        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
