import React from 'react';

import LoginButton from "./components/auth0Login"
import LogoutButton from "./components/auth0Logout"
import Profile from "./components/auth0Profile"

import './App.css';

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <div>{Profile()}</div>
    </div>
  );
}

export default App;
