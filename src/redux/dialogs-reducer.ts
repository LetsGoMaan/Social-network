import {ActionsType} from "./state";
import {DialogsPageType} from "../App";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export const dialogsReducer = (state: DialogsPageType, action:ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newPost = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newPost)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = (): ActionsType => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (newText: string): ActionsType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    }
}

export default dialogsReducer