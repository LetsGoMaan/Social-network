import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header/>
            <Techologies/>
        </div>
    );
}

const Header = () => {
    return  (
        <div>
            Some Header
        </div>
    )
}

const Techologies = () => {
    return  (
        <div>
           <ul>
               <li>HTML</li>
               <li>CSS</li>
               <li>JS</li>
               <li>REACT</li>
           </ul>
        </div>
    )
}

export default App;
