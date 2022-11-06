import React, {useState, useEffect} from 'react';
import { withAuthenticationRequired, useAuth0} from '@auth0/auth0-react';
import services from '../api/services'


const ProtectedRoute = ({ component, ...componentProps}) => {

  const [isAdmin, setIsAdmin] = useState(false)
  const { user, loginWithRedirect} = useAuth0();

    useEffect(() => {
      if(user){
        services.getToken(user).then(token =>{
          services.checkAdmin(token).then(response =>{
            setIsAdmin(response)
          })
        })
      }
      return () => {
        setIsAdmin(false)
      }
    }, [user])

    const ProtectedComponent= withAuthenticationRequired(component, {
      appState:{
        returnTo: window.location.pathname
      }
     })
    if(isAdmin) return <ProtectedComponent {...componentProps}/>
    loginWithRedirect(
        {appState:{
          returnTo: window.location.pathname
        }
    })
};

export default ProtectedRoute;