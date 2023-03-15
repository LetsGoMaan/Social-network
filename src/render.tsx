import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, {StateType} from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,document.getElementById('root')

    );
}
