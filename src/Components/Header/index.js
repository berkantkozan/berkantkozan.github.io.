import React from "react"
import logo from './logo.svg';
import "./style.css"

export default function Header() {
    return (
        <nav className="nav">
            <img src={logo} className="App-logo" alt="logo" />
            <h2 className="header--title">TO-DO APP</h2>
            <a 
                href="https://tr.reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className="header--project"
            >Learning React</a>
        </nav>
    )
}