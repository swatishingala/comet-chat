import './App.css';
import React from 'react';
import { CometChat } from "@cometchat-pro/chat";
import Home from './Components/Home';

const appID = "255583813f842d09";
CometChat.init(appID);

function App() {
  return (
    <div className="App">
       <Home></Home>
    </div>
  );
}

export default App;
