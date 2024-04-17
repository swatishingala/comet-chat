import './App.css';
import React from 'react';
import { CometChat } from "@cometchat-pro/chat";
import Routes from '../src/routes';

const appID = "255583813f842d09";
CometChat.init(appID);

function App() {
  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App;
