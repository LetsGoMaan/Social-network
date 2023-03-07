import React from "react";
import "./App.css";
import {Header} from "./Header";
import {Techologies} from "./Techologies";
import {Footer} from "./Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Techologies/>
            <Footer/>
        </div>
    );
}

export default App;
