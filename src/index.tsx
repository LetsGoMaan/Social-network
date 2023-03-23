import "./index.css";
// import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App
                // store={store}
                 // addPost={store.addPost.bind(store)}
                 // updateNewPostText={store.updateNewPostText.bind(store)}
                 // addMessage={store.addMessage.bind(store)}
                 // updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
            </Provider>
        </BrowserRouter>, document.getElementById("root")
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state)
    }
  )

