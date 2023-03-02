import React from 'react';
import {useUserDispatch} from "./UserProvider";

const Login = (props) => {
  const userDispatch = useUserDispatch();

  return (
    <>
      <p>You're not logged in</p>
      <button onClick={()=>userDispatch({type: 'login', user: {logged: true, login: 'rafael',id: 10}})}>Login</button>
    </>
  )
};

export default Login;