import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    newMessageText: string
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        if (newMessageElement.current) {
            let text = newMessageElement.current.value
            props.updateNewMessageText(text)
        }
    }

    // if(!props.isAuth) return <Redirect to={'/login'}/>

    return (

        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                    <textarea placeholder={"Enter your message"} onChange={onMessageChange} ref={newMessageElement}
                              value={props.newMessageText}/>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
        </>
    );
};

