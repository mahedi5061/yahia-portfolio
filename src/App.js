import React from "react";
import { Route  } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
 
import Experience from "./components/Experience";
import Achievement from "./components/Achievement";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Blog from "./components/Blog";
 
import Home from "./components/Home";
import Header from "./components/Header";
 


function App() {
  return (
    <>
      <CssBaseline />    
      <Route  path="/home" component={Home} />
     
          <Route path="/achievement">
           <Achievement></Achievement>
          </Route>
          <Route path="/experience">
           <Experience></Experience>
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/contact">
          <Contacts/>
          </Route>
          <Route exact path="/" component={Home} />
         
    </>
  );
}

export default App;
