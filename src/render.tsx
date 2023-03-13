import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, {StateType} from "./App";
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,document.getElementById('root')

    );
}
