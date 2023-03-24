import {ActionsType} from "./redux-store";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Kavabanga"},
        {id: 5, message: "IlikeSeik"},
        {id: 6, message: "YOLO"},
    ] as Array<MessagesType>,
    newMessageText: ""
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action:ActionsType):InitialStateType => {


    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            return  {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }

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