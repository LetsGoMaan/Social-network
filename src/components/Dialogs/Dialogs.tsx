import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../App";

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export const Dialogs = (props: DialogsPropsType) => {



    const dialogsElements = props.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> )
    const messagesElement = props.messages.map(m =>  <Message message={m.message}/> )

    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>
        </>
    );
};

