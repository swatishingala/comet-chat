import { useEffect , useState} from "react";
import {Route, Redirect} from "react-router-dom";
import Home from './Components/Login'


const Routes = ({component : Component, isAuthenticated, ...rest}) => {
    
return (

    <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      )
    }
  />
)
}

export default Routes;