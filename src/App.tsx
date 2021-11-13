import React from 'react';
import Topbar from "./components/topbar/Topbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./app.css"
import { AppBar, Container, Typography } from '@material-ui/core';


const App = () => {

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <div className="others"> </div>
      </div>
    </div>
  );

}

export default App;
