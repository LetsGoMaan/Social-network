import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";
import {ActionsType} from "../../redux/state";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsType) => void
    // addMessage: () => void
    // updateNewMessageText: (newText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> )
    const messagesElement = props.state.messages.map(m =>  <Message message={m.message}/> )

     const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
           // props.addMessage()
            props.dispatch(addMessageActionCreator())
    }

    const onMessageChange = () => {
        // if(newMessageElement.current) {
        //     props.updateNewMessageText(newMessageElement.current.value)
        // }
        if(newMessageElement.current) {
            props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value))
        }
    }


    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                    <textarea placeholder={"Enter your message"} onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText}/>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
        </>
    );
};

