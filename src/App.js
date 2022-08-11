import React from "react";
import Main from "./Components/Main/index.js"
import Header from "./Components/Header/index.js"
import { ContextProvider } from "./Components/Context/provider.js";


export default function App() {
  return (
    <ContextProvider>
      <div className="main-div">
        <Header />
        <Main />
      </div>

    </ContextProvider>
  );
}