import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {
    store: StoreType
}

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                const onMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return (
                    <>
                        <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}
                                 newMessageText={state.newMessageText}/>
                    </>
                )
            }
        }
        </StoreContext.Consumer>
    );
};

