import React from 'react'
import logo from './logo.svg';
import './App.css';
import UserProvider from "./UserProvider";
import Content from './Content'

function App() {
  const [user,setUser] = React.useState(null);
  return (
    <UserProvider>
      <Content/>
    </UserProvider>
  );
}

export default App;
