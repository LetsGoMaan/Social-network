import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> )
    const messagesElement = props.state.messages.map(m =>  <Message message={m.message}/> )

     const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
       if(newMessageElement.current) {
           alert(newMessageElement.current.value)
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
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
        </>
    );
};

