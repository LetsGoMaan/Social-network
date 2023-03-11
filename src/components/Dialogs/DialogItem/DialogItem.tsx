import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog + " " + classes.active}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar"/>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}