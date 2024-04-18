import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register/Register";


const Routes = ({component : Component, isAuthenticated, ...rest}) => {
    
return (

  <Router>
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    {/* Other routes */}
  </Switch>
</Router>
)
}

export default Routes;