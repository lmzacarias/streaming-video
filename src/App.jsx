import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.css"

import Main from "./components/Main";

const App = () => {
  return (
    <BrowserRouter>
     <Switch>

     <Route path="/" component={Main} />
   
     </Switch>
     
    </BrowserRouter>
  );
};

export default App;
