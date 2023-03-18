import "./index.css";
import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 // addPost={store.addPost.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // addMessage={store.addMessage.bind(store)}
                 // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>, document.getElementById("root")
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

