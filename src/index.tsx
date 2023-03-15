import "./index.css";
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,document.getElementById('root')

    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
