import React  from "react";
import Main from "./Components/Main/index.js"
import Header from "./Components/Header/index.js"
import { ContextProvider } from "./Components/Context/index.js";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ContextProvider>
        <div className="main-div">
          <Header />
           <Main />
        </div>
      </ContextProvider>
    </Router>
  );
}