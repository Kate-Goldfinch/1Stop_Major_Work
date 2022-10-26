import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {Button} from 'react-bootstrap'

const LogoutButton = () => {
  const { logout, user } = useAuth0();

  return (
    <>
      <div> Hello {user.name}{" "}
      <Button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </Button>
      </div>
    </>
  );
};

export default LogoutButton;
