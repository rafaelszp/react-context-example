import React, {Fragment,useMemo} from 'react';
import Login from './Login'
import Home from './Home';
import {useUser} from "./UserProvider";

const Content = (props) => {
  const user = useUser();
  const loggedUser = useMemo(()=> user,[user]);

  if (!loggedUser.logged){
    return (
      <>
        <Login/>
      </>
    );
  }else{
    return (
      <>
        <Home/>
      </>
    )
  }
}

export default Content;