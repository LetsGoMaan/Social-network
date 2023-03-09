import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {

    const dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ]

    const messages= [
        {id: 1, message: "Hi" },
        {id: 2, message: "How are you" },
        {id: 3, message: "Yo" },
        {id: 4, message: "Kavabanga" },
        {id: 5, message: "IlikeSeik" },
        {id: 6, message: "YOLO" },
    ]

    const dialogsElements = dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/> )
    const messagesElement = messages.map(m =>  <Message message={m.message}/> )

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

