import React from "react";
import classes from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (newMessageText: string) => void
    updateNewMessageText: (newText: string) => void
    isAuth: boolean
}

type FormDataType = {
    newMessageText: string
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>)

    let addNewMessage = (values: any) => {
        props.addMessage(values.newMessageText)
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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>

            </div>
        </>
    )
}


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your message"}/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
