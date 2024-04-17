import { useEffect , useState} from "react";
import {Route, Navigate} from "react-router-dom";
import Home from './Components/Home'


const Routes = ({component : Component, isAuthenticated, ...rest}) => {
    
return (
    <Routes>
    <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  />
  </Routes>
)
}

export default Routes;