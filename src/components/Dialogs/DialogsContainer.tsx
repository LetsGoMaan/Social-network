import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().dialogsPage

    const addMessage = () => {
            props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (text:string) => {
            props.store.dispatch(updateNewMessageTextActionCreator(text))
    }


    return (
        <>
          <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state} newMessageText={state.newMessageText}/>
        </>
    );
};

