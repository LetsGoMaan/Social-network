import {ActionsType} from "./store";
import {DialogsPageType} from "../App";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Kavabanga"},
        {id: 5, message: "IlikeSeik"},
        {id: 6, message: "YOLO"},
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageType = initialState, action:ActionsType) => {
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