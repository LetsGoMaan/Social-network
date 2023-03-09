import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    <DialogItem name="Dimych" id={1}/>
                    <DialogItem name="Andrey" id={2}/>
                    <DialogItem name="Natasha" id={3}/>
                    <DialogItem name="Sveta" id={4}/>
                    <DialogItem name="Sasha" id={5}/>
                    <DialogItem name="Valera" id={6}/>
                </div>
                <div className={classes.messages}>
                   <Message message={"Hi"}/>
                   <Message message={"How are you"}/>
                   <Message message={"Yo"}/>

                </div>
            </div>
        </>
    );
};

