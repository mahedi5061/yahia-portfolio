import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/";
import Experience from "./components/Experience";
import Achievement from "./components/Achievement";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Blog from "./components/Blog";


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/achievement" component={Achievement} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
