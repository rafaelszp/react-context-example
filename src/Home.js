import React from 'react';

import {useUser,useUserDispatch} from "./UserProvider";

const Home = (props) => {
  const user = useUser();
  const userDispatch = useUserDispatch();
  return (
  <>
    <p>Welcome {user.login} :) </p>
    <p>
      <button onClick={()=> userDispatch({type: 'logout'})}>Logout</button>
    </p>
  </>

)};

export default Home;