import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../App";

// type DialogsPropsType = {
//     // store: StoreType
// }

// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().dialogsPage
//
//                 const addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//
//                 const onMessageChange = (text: string) => {
//                     store.dispatch(updateNewMessageTextActionCreator(text))
//                 }
//                 return (
//                     <>
//                         <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}
//                                  newMessageText={state.newMessageText}/>
//                     </>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
}

type MapDispatchProps = {
    addMessage: () => void
    updateNewMessageText: (text:string) => void
}


let mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchProps => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text:string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


