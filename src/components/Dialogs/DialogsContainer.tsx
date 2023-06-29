import React, {ComponentType} from "react";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {DialogsPageType} from "../../App";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchProps = {
    addMessage: (newMessageText: string) => void
}

let mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchProps => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageActionCreator(newMessageText))
        },
    }
}

const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
    (Dialogs)

export default DialogsContainer

